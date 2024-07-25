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
  let dataValueArr = [];
  dataArr.value.forEach((item) => {
    dataValueArr.push(item.value);
  });
  let max = Math.max(...dataValueArr);

  const option = {
    grid: {
      left: "5%",
      right: "2%",
      top: "20%",
      bottom: "5%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(50, 216, 205, 1)",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: 1,
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "rgba(0,255,255, 0.8)",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },

        data: dataArr.value.map((item) => {
          return item.name;
        }),
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "",
        padding: 5,
        // max: 1000,
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(0,255,255, 0.2)",
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          margin: 10,
          textStyle: {
            color: "rgba(0,255,255, 0.8)",
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "今日",
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: "#23D0C4",
            lineStyle: {
              color: "#23D0C4",
              width: 2,
            },
          },
        },
        areaStyle: {
          normal: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(50, 216, 205, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 255, 255, 0.2)",
                },
              ],
            },
          },
        },
        data: dataValueArr,
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