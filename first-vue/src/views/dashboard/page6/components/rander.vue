<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
import * as echarts from "echarts";

const chartItem = ref();
const props = defineProps(["data"]);
const colors = [
  "#FEDB65",
  "#00EFFE",
  "#44D7B6",
  "#6DD400",
  "#FFA600",
  "#FEDB65",
  "#657aff",
  "#0060FF",
];
const dataArr = computed(() => {
  return props.data;
});

const refreshCharts = () => {
  let max = Math.max(...dataArr.value);
  let indicatorArr = [
    { name: "N", max: max },
    { name: "NNW", max: max },
    { name: "NW", max: max },
    { name: "WNW", max: max },
    { name: "W", max: max },
    { name: "WSW", max: max },
    { name: "SW", max: max },
    { name: "SSW", max: max },
    { name: "S", max: max },
    { name: "SSE", max: max },
    { name: "SE", max: max },
    { name: "ESE", max: max },
    { name: "E", max: max },
    { name: "ENE", max: max },
    { name: "NE", max: max },
    { name: "NNE", max: max },
  ];
  const option = {
    tooltip: {},
    radar: {
      indicator: indicatorArr,
      nameGap: 8,
      name: {
        textStyle: {
          color: "rgba(176,204,53,1)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.4)",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.4)",
        },
      },
      splitArea: {
        areaStyle: {
          color: "rgba(255,255,255,0)",
        },
      },
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: dataArr.value,
            name: "2016",
          },
        ],
        areaStyle: {
          normal: {
            color: "rgba(176,204,53,.5)",
          },
        },
        lineStyle: {
          normal: {
            color: "rgba(176,204,53,.7)",
          },
        },
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
          normal: {
            color: "#A9C33B",
          },
        },
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