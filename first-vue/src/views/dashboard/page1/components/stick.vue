<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
const chartItem = ref();
const props = defineProps(["data"]);
const series = computed(() => {
  return props.data;
});

const colors = [
  "#0060FF",
  "#00EFFE",
  "#44D7B6",
  "#6DD400",
  "#FFA600",
  "#FEDB65",
  "#657aff",
  "#0060FF",
];

const option = {
  grid: {
    show: "true",
    borderWidth: "0",

    left: "35%",
    top: 0,
    right: 30,
    bottom: 0,
  },
  xAxis: {
    show: false, //是否显示x轴
    type: "value",
  },
  yAxis: [
    {
      type: "category",
      inverse: true, //让y轴数据逆向
      axisLabel: {
        show: true,
        textStyle: {
          color: "#26bcf8",
          fontWeight: "bold",
          fontSize: 12,
        },
      },
      splitLine: { show: false }, //横向的线
      axisTick: { show: false }, //y轴的端点
      axisLine: { show: false }, //y轴的线
      data: [],
    },
    {
      type: "category",
      inverse: true,
      axisTick: "none",
      axisLine: "none",
      show: true,
      axisLabel: {
        textStyle: {
          color: "#ffffff",
          fontSize: "12",
        },
        formatter: function (value) {
          return value + "";
        },
      },
      data: [],
    },
  ],
  series: [
    {
      name: "产出",
      type: "bar",
      itemStyle: {
        normal: {
          barBorderRadius: 6,
        },
      },
      label: {
        normal: {
          show: false,
          position: "inside",
          color: "black",
          fontSize: 12,
        },
      },
      barWidth: 6,
      data: [],
    },
    {
      name: "计划数",
      type: "bar",
      itemStyle: {
        normal: {
          barBorderRadius: 6,
          color: "rgba(0,200,134,0.4)",
        },
      },
      barGap: "-100%",
      z: 0,
      barWidth: 6,
      data: [],
    },
  ],
};

const refreshCharts = () => {
  let categoryArr = [],
    categoryData = [];
  series.value.map((item, index) => {
    categoryArr.push(item.name);
    categoryData.push(item.value);
  });
  let maxValue = Math.max(...categoryData)
  let maxArr = new Array(categoryData.length).map(item => {
    item = maxValue
  })
  option.series[0].data = categoryData
  option.series[1].data = maxArr;
  option.series[0].itemStyle.normal.color = chartItem.value.getColors(
    "rgba(11, 193, 234, 0.5)",
    "rgba(165, 222, 71, 1)"
  );
  option.yAxis[0].data = categoryArr;
  option.yAxis[1].data = categoryData;
  
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>