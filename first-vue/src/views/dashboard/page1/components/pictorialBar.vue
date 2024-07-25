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
      top: "20%",
      left: "10%",
      right: "5%",
      bottom: "15%",
    },
    xAxis: {
      // name: 'X',
      nameTextStyle: {
        color: "#00EFFE",
        padding: [0, 0, -20, -20],
      },
      show: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#0ff",
          shadowColor: "rgba(0,255,255, 0.2)",
          shadowOffsetX: "20",
        },
        symbol: ["none", "arrow"],
        symbolOffset: [0, 0],
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#00EFFE",
        },
      },
      axisLabel: {
        show: true,
        // rotate: -1,
        textStyle: {
          fontSize: 12,
          color: "#00EFFE",
        },
      },
      axisTick: {
        show: false,
      },
      data: dataArr.value.map((val) => {
        return val.name;
      }),
    },
    yAxis: [
      {
        nameTextStyle: {
          color: "#00EFFE",
          padding: [0, 0, 0, -20],
        },
        max: max,
        min: 0,
        splitNumber: Math.ceil(max%5),
        show: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          symbol: ["none", "arrow"],
          symbolOffset: [0, 15],
          lineStyle: {
            // color: 'rgba(255, 129, 109, 0.1)',
            width: 1, //这里是为了突出显示加上的
            color: "#0ff",
            shadowColor: "rgba(0,255,255, 0.2)",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 12,
            color: "#00EFFE",
          },
        },
   
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(0,255,255, 0.2)",
            width: 1,
            type: "solid",
          },
        },
      },
    ],
    series: [
      {
        type: "pictorialBar",
        barCategoryGap: "-10%",
   

        symbol: "path://M0,10 L10,10 C5.5,10 6.5,5 5,5 C3.5,5 4.5,10 0,10 z",
        label: {
          show: true,
          position: "top",
          distance: 5,
          color: "#0ff",
          fontWeight: "bolder",
          fontSize: 12,
        },
        itemStyle: {
          normal: {
            color: (params) => {
                 const colorList = []
                dataArr.value.forEach((item, index) => {
                    let colorItem = {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                            offset: 0,
                            color: colors[index],
                            },
                            {
                            offset: 1,
                            color:  colors[index] + '20',
                            },
                        ],
                    }
                    colorList.push(colorItem)
                })
        
              return colorList[params.dataIndex];
            },
            opacity: 0.7,
          },
          // 鼠标移入柱子上 透明度变为 1
          emphasis: {
            opacity: 1,
          },
        },
        data: dataArr.value.map((v) => {
          return v.value;
        }),
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