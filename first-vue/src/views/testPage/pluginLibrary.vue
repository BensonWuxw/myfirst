<template>
  <a-row :gutter="16">
    <a-col :span="8">
      <a-card class="box-shadow1" title="数字翻牌器 --> vue-countup-v3" :bordered="false">
        <a-typography-title><count-up :end-val="num" :duration="2"></count-up></a-typography-title>
        <a-typography-title><count-up :end-val="num" :duration="1"></count-up></a-typography-title>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card class="box-shadow2" title="轮播表 --> vue3-seamless-scroll" :bordered="false">
        <vue3-seamless-scroll class="scroll" :list="items" :step="0.25" hover wheel>
          <div v-for="item in items" :key="item.id" class="scrool-item">
            <div class="scrool-item-index">
              {{item.id}}
            </div>
            <div class="scrool-item-name">
              {{item.name}}
            </div>
            <div class="scrool-item-time">
              {{item.time}}
            </div>
          </div>
        </vue3-seamless-scroll>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card class="box-shadow3" title="高亮显示搜索文字 --> vue-word-highlighter" :bordered="false">
        <a-input v-model:value="queryContent" />
        <WordHighlighter :query="queryContent" splitBySpace>
            <p>splitBySpace 关键字根据空格切割</p>
            <p>highlightTag 高亮字html标签名</p>
            <p>caseSensitive 字符串是否区分大小写</p>
            <p>highlightClass highlightStyle类名和样式</p>
            <p>插件地址：https://github.com/kawamataryo/vue-word-highlighter?tab=readme-ov-file</p>
        </WordHighlighter>
      </a-card>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 15px;">
    <a-col :span="8">
      <a-card  class="box-shadow4" title="拖拽排序列表 --> vuedraggable@next" :bordered="false">
        <draggable></draggable>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  class="box-shadow4" title="浏览器录屏" :bordered="false">
        <screenRecording></screenRecording>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  class="box-shadow4" title="复制功能 --> copy-text-to-clipboard" :bordered="false">
        UUID生成: {{copyValue}}
        <a-button @click="testCopy(copyValue)">复制UUID</a-button>
        
      </a-card>
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top: 15px;">
    <a-col :span="8">
      <a-card  class="box-shadow4" title="二维码生成器 --> qrcode" :bordered="false">
        <qrCodeVue></qrCodeVue>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  class="box-shadow4" title="浏览器录屏" :bordered="false">
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  class="box-shadow4" title="复制功能 --> copy-text-to-clipboard" :bordered="false">
       
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { ref } from "vue";

import CountUp from "vue-countup-v3";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import WordHighlighter from "vue-word-highlighter";
import dayjs from "dayjs";
import copy from 'copy-text-to-clipboard';
import { v4 as uuidv4 } from 'uuid';
import draggable from "@/components/draggable.vue"
import screenRecording from "@/components/screenRecording.vue"
import qrCodeVue from "@/components/qrCode.vue"
let allData = "魍、魉、魑、黐、饬、墀、褫、雠、吜、侴、篪、螭、歯、啻、篪、晷、鸠、夿、媸、嗤、坻、敕、篪、瘛、伬、鸱、砥、砺、镬、豁、藿、嚟、砾、羴、鳝、疝、 骤、咮、喌、籀、绉、㤘、冑、炿、呪、 瞓、峯、錒、腌、锕、蜯、镑、幚、搒、 峁、袤、懋、亜、敕、闳、薨、荭、竑、 雠、丒、殠、紬、懤、怞、梼、楱、偢、菗、踌、酬、儔、俦、牰、畴、騶、掫、諏、鄹、楱、搊、緅、鯐、豿、缑、彀、 钩、诟、媾、崆、埪、鵼、悾、涳、倥、 箜、戳、鹾、剉、遳、厝、莨、煷、芐、 邋、遢、翋、砬、鯻、櫴、揧、辢、擸、 鲤、鲫、冀、琲、惫、軰、褙、挩、姝、 镁、魅、眛、袂、寐、罄、儬、勍、綪";
let nameItem = allData.split("、");
let itemLength = nameItem.length - 1;
const num = ref(666);
const queryContent = ref('关键字')
const getItemName = (length) => {
  let name = "";
  for (let i = 0; i <= length; i++) {
    name += String(nameItem[Math.ceil(Math.random() * itemLength)]).trim();
  }
  return name;
};
const items = ref(
  Array.from({ length: 100 }, (_, index) => ({
    id: index,
    name: getItemName(3),
    time: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  }))
);

const copyValue = ref(uuidv4())
const testCopy = (data: any) => {
  if (copy(data)) {
    message.success("复制成功")
  } else {
    message.error("复制失败")
  }
}

setInterval(() => {
  num.value += 66;
}, 3000);


let arr = [123,203,23,13,34,605,65,45,89,13,1];
let length = arr.length;
const maopao = (sortArr) => {
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length; j++) {
      if (sortArr[j] > sortArr[j + 1]) {
        let item = sortArr[j]
        sortArr[j] = sortArr[j+1];
        sortArr[j+1] = item
      }
    }
  }
  console.log("冒泡-----》", sortArr)
  return sortArr
  
}
const kuaipai = (sortArr) => {
  if (sortArr.length <= 1) return sortArr
  let leftArr = [], rightArr = [];
  let midItemIndex = Math.floor(sortArr.length / 2 )
  let midItem = sortArr.splice(midItemIndex, 1)
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] < midItem) {
      leftArr.push(sortArr[i])
    } else {
      rightArr.push(sortArr[i])
    }
  }
  let lastSortArr = kuaipai(leftArr).concat(midItem, kuaipai(rightArr))
  console.log("快排-----》", lastSortArr)
  
  return lastSortArr
}

let arr1 = [];
for(let i = 0; i < 25; i++){
  arr1[i] = Math.ceil(Math.random() * 1000)
}
const charu = (sortArr) => {
  for(let i = 1; i < sortArr.length; i++) {
    let currIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (sortArr[currIndex] < sortArr[j]) {
        let item = sortArr[j]
        sortArr[j] = sortArr[currIndex]
        sortArr[currIndex] = item;
        currIndex--;
      } else {
        break;
      }
    }
  } 
  console.log("插入-----》", sortArr)
}
// maopao(arr)
// kuaipai(arr)
charu(arr1)
</script>
<style scoped lang="less">
::v-deep .ant-card-body {
  height: 320px;
  .countup-wrap {
    font-family: "LCdd";
  }
  h1.ant-typography {
    margin: 10px auto;
  }
  .scroll {
    height: 100%;
    overflow: hidden;
    .scrool-item {
      display: flex;
      justify-content: space-around;
    }
  }
  mark{
    background: red;
  }
}
.box-shadow1{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.box-shadow2{
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.box-shadow3{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.box-shadow4{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.box-shadow5{

}
</style>
