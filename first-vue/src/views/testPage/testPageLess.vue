<template>
  <div class="myclass">
    <echartsVue ref="echartsItem" :options="options"></echartsVue>
    <echartsVue ref="echartsItem1" :options="options"></echartsVue>
  </div>
</template>
<script lang="ts" setup>
import echartsVue from "../../components/echarts.vue"
import {ref} from "vue";
import { message } from "ant-design-vue";
const echartsItem = ref()
const echartsItem1 = ref()
const options = ref({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})
setTimeout(() => {
  options.value.xAxis.data = ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1']
  options.value.series[0].type = "line"
  echartsItem.value.initCharts()
  echartsItem1.value.initCharts()
  message.success("数据更新成功")
}, 5000);
</script>
<style lang="less">
.myclass{
  width: 100%;
  height: 500px;
}


</style>

