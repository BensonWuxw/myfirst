<template>
  <div class="container page1">
    <div class="data-item top">
      <div class="item-15">
        <div class="info">
          <div class="info-title">XXXXXXXXXXXXXX</div>
          <div class="info-content">
            <div class="info-item item-33 bg-37d2d4">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-33 bg-19CA88">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-33 bg-858FF8">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-25 bg-FD9133 top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-25 bg-F6D10E top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-25 bg-2E8CFF top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-25 bg-F6580E top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
          </div>
        </div>
        <div class="info top-10">
          <div class="info-title">XXXXXXXXXXXXXX</div>
          <div class="info-content">
            <stickCharts :data="series"></stickCharts>
          </div>
        </div>
      </div>
      <div class="item-70">
        <div class="page-title">
          XXXXXXXXXX数字平台
        </div>
        <div class="total-num">
          XXXXXXXx总计数量
          <div class="num">
            <CountUp :end-val="num" :duration="1"></CountUp>
          </div>
        </div>
        <div class="top-charts">
          <div class="charts-item">
            <pieCharts ref="piechasss" :data="series"></pieCharts>
          </div>
          <div class="charts-item">
            <pieCharts1 ref="piecha1ccc" :data="series"></pieCharts1>
          </div>
        </div>
      </div>
      <div class="item-15">
        <div class="info">
          <div class="info-title">XXXXXXXXXXXXXX</div>
          <div class="info-content">
            <div class="info-item item-50 bg-37d2d4">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-50 bg-19CA88">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-33 bg-858FF8 top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-33 bg-FD9133 top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
            <div class="info-item item-33 bg-F6D10E top-5">
              <div class="info-num"><CountUp :end-val="healthValue" :duration="1"></CountUp></div>
              <div class="info-name">统计名称</div>
            </div>
          </div>
        </div>
        <div class="info top-10">
          <div class="info-title">XXXXXXXXXXXXXX</div>
          <div class="info-content">
            <stickCharts3 ref="piecha2" :data="series"></stickCharts3>
          </div>
        </div>
      </div>
    </div>
    <div class="data-item top2">
      <div class="t-num-item">
        <div class="data-item-name">XXXXX</div>
        <div class="data-item-num">
          <CountUp :end-val="num" :duration="1"></CountUp>
        </div>
      </div>
      <div class="t-num-item">
        <div class="data-item-name">XXXXX</div>
        <div class="data-item-num">
          <CountUp :end-val="num" :duration="1"></CountUp>
        </div>
      </div>
      <div class="t-num-item">
        <div class="data-item-name">XXXXX</div>
        <div class="data-item-num">
          <CountUp :end-val="num" :duration="1"></CountUp>
        </div>
      </div>
      <div class="t-num-item">
        <div class="data-item-name">XXXXX</div>
        <div class="data-item-num">
          <CountUp :end-val="num" :duration="1"></CountUp>
        </div>
      </div>
      <div class="t-num-item">
        <div class="data-item-name">XXXXX</div>
        <div class="data-item-num">
          <CountUp :end-val="num" :duration="1"></CountUp>
        </div>
      </div>
    </div>
    <div class="data-item bottom1">
      <div class="c-item">
        <div class="c-item-title">XXXXX</div>
        <div class="c-item-content">
          <vue3-seamless-scroll class="scroll" :list="items" :step="0.25" hover  wheel :waitTime="500" :singleHeight="30">
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
        </div>
      </div>
      <div class="c-item">
        <div class="c-item-title">XXXXX</div>
        <div class="c-item-content middle-item">
            <stickCharts2 ref="stickChartsBox2" :data="stickArr"></stickCharts2>
        </div>
      </div>
      <div class="c-item">
        <div class="c-item-title">XXXXX</div>
        <div class="c-item-content">
          <vue3-seamless-scroll class="scroll" :list="items" :step="0.25" hover  wheel :waitTime="500" :singleHeight="30">
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
        </div>
      </div>
    </div>
    <div class="data-item bottom">
        <div class="bottom-item-20">
            <div class="bottom-item-title">XXXXXXXXXXXXXX</div>
            <div class="bottom-item-content">
                <rander ref="randerBox" :data="series"></rander>
            </div>
        </div>
        <div class="bottom-item-30">
            <div class="bottom-item-title">XXXXXXXXXXXXXX</div>
            <div class="bottom-item-content">
                <pictorialBar ref="pictorialBarBox" :data="series"></pictorialBar>
            </div>
        </div>
        <div class="bottom-item-30">
            <div class="bottom-item-title">XXXXXXXXXXXXXX</div>
            <div class="bottom-item-content">
                <lineChart ref="lineBox" :data="series"></lineChart>
            </div>
        </div>
        <div class="bottom-item-20">
            <div class="bottom-item-title">XXXXXXXXXXXXXX</div>
            <div class="bottom-item-content">
                <guageCharts ref="guageChartsBox" :data="series"></guageCharts>
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onUnmounted, reactive } from "vue";
import CountUp from "vue-countup-v3";
import pieCharts from "./components/pie.vue";
import pieCharts1 from "./components/pie1.vue";
import stickCharts2 from "./components/stick2.vue";
import stickCharts3 from "./components/stick3.vue";
import stickCharts from "./components/stick.vue";
import rander from "./components/rander.vue";
import pictorialBar from "./components/pictorialBar.vue";
import lineChart from "./components/lineChart.vue";
import guageCharts from "./components/guageCharts.vue";



import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import dayjs from "dayjs"
const piechasss = ref()
const piecha1ccc = ref()
const randerBox = ref()
const pictorialBarBox = ref()
const lineBox = ref()
const stickChartsBox2 = ref()
const guageChartsBox = ref()
const stickArr = ref<any>([['91', '51', '29'], ['83', '81', '20'], ['南昌工厂', '宜昌工厂', '赣州工厂']])
const num = ref(8888);
const healthValue = ref(88);
const items = ref(
  Array.from({ length: 1000 }, (_, index) => ({
    id: index,
    name: `科学研究金融制造 ${index + 1}`,
    time: dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss")
  }))
);

const series = ref<any[]>([
  { id: "1", name: "制造", value: 134 },
  { id: "2", name: "金融", value: 120 },
  { id: "3", name: "国家行政机构", value: 130 },
  { id: "4", name: "科学研究", value: 230 },
  { id: "5", name: "社会团体", value: 58 },
]);
const timer = setInterval(() => {
  num.value = Math.ceil(Math.random() * 100000);
  healthValue.value = Math.ceil(Math.random() * 99);
  series.value[0].value = Math.ceil(Math.random() * 200);
  series.value[1].value = Math.ceil(Math.random() * 200);
  series.value[2].value = Math.ceil(Math.random() * 200);
  series.value[3].value = Math.ceil(Math.random() * 200);
  series.value[4].value = Math.ceil(Math.random() * 200);
  stickArr.value[0] = [Math.ceil(Math.random() * 99),Math.ceil(Math.random() * 99), Math.ceil(Math.random() * 99)]
  stickArr.value[1] = [Math.ceil(Math.random() * 99),Math.ceil(Math.random() * 99), Math.ceil(Math.random() * 99)]
  piechasss.value.refreshCharts()
  piecha1ccc.value.refreshCharts()
  randerBox.value.refreshCharts()
  pictorialBarBox.value.refreshCharts()
  lineBox.value.refreshCharts()
  stickChartsBox2.value.refreshCharts()
  guageChartsBox.value.refreshCharts()
}, 5000);
onUnmounted(() => {
   clearTimeout(timer)
})
</script>
<style lang="less" scoped>


.page1 {
  background: #1d2a56;
  padding: 0.2rem;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100% - 0.4rem);
  width: calc(100% - 0.4rem);
  min-width: 600px;
  min-height: 600px;
  .data-item {
    width: 100%;
    display: flex;
    height: 25%;
    &.top {
      height: 40%;
    }
    &.top2 {
      height: calc(10% - 0.1rem);
      margin-top: 0.1rem;
    }
  }
  .page-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20%;
    background: url(./images/title_bg.png) no-repeat center;
    background-size: 100% 100%;
    font-size: 0.24rem;
    justify-content: center;
    color: #0ff;
    font-weight: bolder;
  }
  .total-num {
    height: 15%;
    display: flex;
    align-items: center;
    font-size: 0.24rem;
    justify-content: center;
    color: #0ff;
    font-weight: bolder;
    .num {
      min-width: 1rem;
      padding-left: 0.15rem;
    }
  }
  .top-charts {
    height: 65%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 15px;
    .charts-item {
      width: calc(50% - 0.1rem);
      height: 100%;
      background: url("./images/main_top_bottom.png") no-repeat center;
      background-size: 100% 100%;
    }
  }
  .bottom{
    height: calc(25% - 0.15);
    padding: 0.15rem 0 0 0;
  }
}
.info {
  height: calc(50% - 0.05rem);
  background: url(./images/main_top_left.png) no-repeat center;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  &.top-10 {
    margin-top: 0.1rem;
  }
  .info-title {
    height: 18%;
    width: 94%;
    color: #0ff;
    font-weight: bold;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 0.16rem;
  }
  .info-content {
    height: calc(80% - 0.2rem);
    width: calc(94% - 0.1rem);
    padding: 0.1rem;
    display: flex;
    flex-flow: row wrap;
    font-size: 0.12rem;
    justify-content: space-between;
    align-content: space-between;
    .info-item {
      display: flex;
      flex-flow: column;
      align-items: center;
      color: #fff;
      justify-content: center;
      border-radius: 4px;
      .info-num {
        font-size: 0.16rem;
        font-weight: bold;
      }
      .info-name{
        font-size: 0.1rem;
        font-weight: bold;
      }
    }
  }
}
.turn-num {
  display: flex;
  height: 0.5rem;
}
.top2 {
  display: flex;
  justify-content: space-between;
  .t-num-item {
    width: 19.5%;
    height: 100%;
    background: url("./images/main_middle.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    position: relative;
    .data-item-name {
      font-size: 0.14rem;
      color: #0ff;
      padding: 10px;
    }
    .data-item-num {
      position: absolute;
      font-size: 0.18rem;
      color: white;
      font-weight: bold;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.bottom1 {
  display: flex;
  height: calc(25% - 0.1rem)!important;
  margin-top: 0.1rem;
  justify-content: space-between;
  .c-item {
    width: 32.5%;
    height: 100%;
    background: url("./images/main_bottopm_top2.png") no-repeat;
    background-size: 100% 100%;
    .c-item-title {
      height: 0.3rem;
      margin-top: 0.2rem;
      margin-left: 3%;
      width: 32%;
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: bold;
      text-indent: 0.4rem;
      font-size: 0.16rem;
      background: url("./images/box-title-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .c-item-content {
      font-size: 0.14rem;
      color: #fff;
      height: calc(100% - 0.65rem);
      min-height: 0.6rem;
      padding: 0.05rem 0.2rem;
      &.middle-item{
        height: calc(100% - 0.5rem);
        padding: 0.05rem 0.2rem;
      }
    }
  }
}
.bottom{
    display: flex;
    justify-content: space-between;
    .bottom-item-20{
        width: 19.5%;
        background: url(./images/main_bottom_bottom.png) no-repeat;
        background-size: 100% 100%;
    }
    .bottom-item-30{
        width: 29.5%;
        background: url(./images/main_bootm_middle.png) no-repeat;
        background-size: 100% 100%;
    }
    .bottom-item-title{
        height: 11%;
        width: 97%;
        margin:0 auto;;
        color: #0ff;
        font-weight: bold;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 0.16rem;
    }
    .bottom-item-content{
        height: 88%;
        width: 97%;
    }
}
</style>