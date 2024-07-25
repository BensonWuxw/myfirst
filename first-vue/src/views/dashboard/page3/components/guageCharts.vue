<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";

const chartItem = ref();
const props = defineProps(["data"]);
const colors = [
  "#F6580E",
  "#19CA88",
  "#858FF8",
  "#6DD400",
  "#0060FF",
  "#FEDB65",
  "#657aff",
  "#0060FF",
];
const dataArr = computed(() => {
  return props.data;
});

const refreshCharts = () => {

  var data = dataArr.value.map(item => {
      return item.value
    });
var length = data.length - 1;
var r = 1 / length;

var colorStopArr = data.map((item, index) => {
  if (index % 2 === 0) {
    return { offset: index * r, color: '#0ff' };
  } else {
    return { offset: index * r, color: '#dc0030' };
  }
});

const option = {
  grid: {
    top: '10%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true, // false
  },

  xAxis: {
    type: 'category',
    boundaryGap: true, //false则反之
    data: dataArr.value.map(item => {
      return item.name
    }),
    axisLine: {
      symbol: ['none', 'arrow'],
      symbolOffset: [0, 12],
      lineStyle: {
        width: 1,
        color: 'rgba(0,255, 255, 1)',
      },
    },
    axisTick: {
      show: false,
    },
    splitArea: {
      show: true,
      interval: 0,
      areaStyle: {
        color: ['rgba(0,255, 255, .1)', 'rgba(0,255, 255, .2)'],
      },
    },
  },
  yAxis: {
    splitLine: { show: false },
    type: 'value',
    axisLine: {
      symbol: ['none', 'arrow'],
      symbolOffset: [0, 12],
      lineStyle: {
        width: 1,
        color: 'rgba(0,255, 255, .5)',
      },
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      type: 'line',
      data: data,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        width: 2,
        shadowColor: 'rgba(0, 0, 0, .4)',
        shadowBlur: 5,
        shadowOffsetY: 15,
        shadowOffsetX: 5,
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          colorStops: colorStopArr,
        },
      },
      itemStyle: {
        normal: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: '#fff',
          borderWidth: 0,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, 1)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
      },
    },
    {
      type: 'line',
      data: data,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        width: 1,
        shadowColor: 'rgba(0, 0, 0, .4)',
        shadowBlur: 5,
        shadowOffsetY: 15,
        shadowOffsetX: 5,
        color: 'rgba(255, 255, 255, .4)',
      },
      itemStyle: {
        normal: {
          color: 'rgba(0, 0, 0, 0)',
          borderColor: '#fff',
          borderWidth: 0,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, 1)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
      },
    },
    {
      type: 'scatter',
      symbolSize: 20,
      z:5,
      itemStyle: {
        opacity: '1',
        shadowColor: 'rgba(0, 0, 0, .4)',
        shadowBlur: 5,
        shadowOffsetY: 15,
        shadowOffsetX: 5,
        color: function (params) {
          let item1 = {colorStops: [
              { offset: 0, color: colors[0] },
              { offset: 0.5, color: colors[1] },
              { offset: 1, color: colors[2] },
            ]};
          let item2 = {colorStops: [
              { offset: 0, color: colors[3] },
              { offset: 0.5, color: colors[4] },
              { offset: 1, color: colors[5] },
            ]};
          let colorList = [];
          dataArr.value.forEach((item,index) => {
            if (index === dataArr.value.length) {
            } else {
              colorList.push(item1, item2)
            }
          })
          return colorList[params.dataIndex];
        },
      },
      data: data,
    },
  ],
};
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>