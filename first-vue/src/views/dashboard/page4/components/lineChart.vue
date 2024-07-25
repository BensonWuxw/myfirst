<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
import * as echarts from "echarts";
import dayjs from "dayjs";

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



let xAxisData = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(item => dayjs(new Date().getTime() - (6 - Number(item)) * 5000).format("hh:mm:ss"));

// 统计百分比
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => Math.ceil(Math.random() * item * 100));
const base = +new Date(new Date().getTime() - 1 * 15 * 60 * 1000);
const oneMin = 60 * 1000;
const date = [];
let now = new Date(base);
let now2 = "";

const addData = (shift) => {
  now2 = dayjs(new Date()).format("hh:mm:ss");
  xAxisData.push(now2);
  if (shift) {
    xAxisData.shift();
  }
  now = new Date(+new Date(now) + oneMin);
};

let json = {
  chart0: {
    xcategory: xAxisData,
    low: data,
    lowLine: [],
  },
};

let zrUtil = echarts.util;
zrUtil.each(json.chart0.xcategory, function (item, index) {
  json.chart0.lowLine.push([
    {
      coord: [index, json.chart0.low[index]],
    },
    {
      coord: [index + 1, json.chart0.low[index + 1]],
    },
  ]);
});

const option = {
  grid: {
    top: 10,
    bottom: 50,
    left: 70,
    right: 20,
  },
  xAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: "#f29701",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
    },
    splitNumber: 5,
    data: xAxisData,
  },
  yAxis: {
   
    splitNumber: 3,

    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      
      textStyle: {
        //改变刻度字体样式
        color: "#ffffff",
        fontSize: "0.12rem"
      },
    },
  },
  series: [
    {
      name: "环比",
      type: "line",
      // smooth: true,
      symbol: "circle",
      symbolSize: 6,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#0ff",
              },
              {
                offset: 1,
                color: "#09c4ca33",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
        },
      },
      itemStyle: {
        normal: {
          color: "#0ff8",
        },
      },
      data: data,
    },
    {
      name: "环比",
      type: "lines",
      coordinateSystem: "cartesian2d",
      zlevel: 1,
      smooth: true,
      symbol: "circle",
      effect: {
        show: true,
        smooth: true,
        period: 1,
        symbolSize: 4,
      },
      lineStyle: {
        normal: {
          color: "#0ff",
          width: 1,
          opacity: 0,
          curveness: 0,
        },
      },
      data: json.chart0.lowLine,
    },
  ],
};
setInterval(function () {
  for (var i = 0; i < 1; i++) {
    data.shift();
    data.push(Math.ceil(Math.random() * 100));

    json = {
      chart0: {
        xcategory: xAxisData,
        low: data,
        lowLine: [],
      },
    };

    zrUtil.each(json.chart0.xcategory, function (item, index) {
      json.chart0.lowLine.push([
        {
          coord: [index, json.chart0.low[index]],
        },
        {
          coord: [index + 1, json.chart0.low[index + 1]],
        },
      ]);
    });
  }
  addData(true);
  refreshCharts();
}, 5000);

const refreshCharts = () => {
  option.xAxis.data = xAxisData;
  option.series[0].data = data;
  option.series[1].data = json.chart0.lowLine;
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>