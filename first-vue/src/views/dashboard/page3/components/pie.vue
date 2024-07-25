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

const refreshCharts = () => {
  let getmax = 100;
  const option = {
    title: {
        text: series.value,
        x: '30%',
        y: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    angleAxis: {
      show: false,

      max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度

      type: "value",

      startAngle: 225, //极坐标初始角度

      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 10, //圆环宽度
    radiusAxis: {
      show: false,
      type: "category",
    },

    //圆环位置和大小

    polar: {
      center: ["40%", "50%"],
      radius: "150%",
    },

    series: [
      // 彩色
      {
        type: "bar",

        barGap: "-100%",

        coordinateSystem: "polar",

        roundCap: true,

        radius: "95%",
        center: ["40%", "50%"],
        z: 3,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: series.value,
          },
        ],
        color: [
          {
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgb(73,175,178)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#379cc6", // 50% 处的颜色
              },
              {
                offset: 1,
                color: "#379cc6", // 100% 处的颜色
              },
            ],
          },
        ],
      },
      // 白色
      {
        type: "pie",
        radius: "85%",
        center: ["40%", "50%"],
        avoidLabelOverlap: false,
        z: 4,
        hoverAnimation: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 1,
          },
        ],
        itemStyle: {
          color: "#238cf036",
        },
      },
      // 浅蓝
      {
        type: "pie",
        radius: "65%",
        center: ["40%", "50%"],
        data: [
          {
            //上层圆环，显示数据

            value: series.value,

            itemStyle: {
              color: "rgba(112, 131, 219, 0.2)",
            },
          },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        barGap: "-100%", //柱间距离,上下两层圆环重合

        coordinateSystem: "polar",

        roundCap: true, //顶端圆角

        z: 3, //圆环层级，同zindex
      },
      // 深蓝
      {
        //下层圆环，显示最大值
        type: "bar",
        data: [
          {
            value: 100,

            itemStyle: {
              color: "#7083DB",

              opacity: 0.25,

              borderWidth: 0,
            },
          },
        ],

        barGap: "-100%",

        coordinateSystem: "polar",

        roundCap: true,

        z: 1,
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