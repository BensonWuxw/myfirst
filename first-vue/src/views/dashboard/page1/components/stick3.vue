<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
const chartItem = ref();
const props = defineProps(["data"]);
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
const dataArr = computed(() => {
  return props.data;
});

let xLabel = ["周一", "周二", "周三", "周四", "周五", "周六", "周天"];
let dataValue = ["1450", "1550", "1540", "1430", "1600", "1650", "1530"];

const option = {
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgb(253,233,42)",
    axisPointer: {
      lineStyle: {
        color: "rgb(126,199,255)",
      },
    }
  },

  grid: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    // containLabel: true
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: "rgb(41,188,245)",
        },
      },
      axisLabel: {
        //坐标轴刻度标签的相关设置
        textStyle: {
          color: "#78bdf5",
          padding: 16,
          fontSize: 14,
        },
        formatter: function (data) {
          return data;
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#233653",
        },
      },
      axisTick: {
        show: false,
      },
      data: xLabel,
    },
  ],
  yAxis: [
    {
      min: 1200,
      max: 1700,
      interval: 100,
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(41,188,245, 0.25)",
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#233653",
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#78bdf5",
          padding: 16,
        },
        formatter: function (value, index) {
          // value大于1000时除以1000并拼接k，小于1000按原格式显示
          if (value >= 100) {
            value = value / 100 + "00";
          } else if (value < 100) {
            value;
          }
          return value;
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "",
      type: "line",
      // symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      // showAllSymbol: false,
      // symbolSize:8,
      lineStyle: {
        normal: {
          width: 2,
          color: "rgb(42,191,250)", // 线条颜色
        },
      },
      itemStyle: {
        color: "rgb(42,191,250)",
      },
      areaStyle: {
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: {
            colorStops: [
              {
                offset: 0,
                color: "rgba(42,191,250,.4)",
              },
              {
                offset: 1,
                color: "rgba(242,191,250, 0)",
              },
            ]
          },
        },
      },
      data: dataValue,
    },
    {
      name: "",
      type: "line",
      showAllSymbol: true,
      symbol: "none",
      itemStyle: {
        color: "#FFBE0F",
      },
      lineStyle: {
        width: 2,
        type: "dotted",
        color: "#FFBE0F",
        shadowColor: "#FFF500",
        shadowBlur: 12,
      },
      data: [  1510, 1510, 1510, 1510, 1510, 1510, 1510, 1510, 1510, 1510, 1510, 1510 ],
    },
    {
      name: '占位背景',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: '#000',
          opacity: 0
        }
      },
      silent: true,
      barWidth: '50%',
      data: dataValue,
      animation: false
    }, {
      name: '占位背景',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: '#000',
          opacity: .1
        }
      },
      silent: true,
      barWidth: '50%',
      barGap: 0,
      data: dataValue,
      animation: false
    }
  ],
};

const refreshCharts = () => {
 
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>