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
const data = computed(() => {
  console.log(props.data);
  return props.data;
});
let angle = 0; //角度，用来做简单的动画效果的
let value = 80;
var timerId;
var outerRidus1 = 0.8
var outerRidus2 = 0.85

function getCirlPoint(x0, y0, r, angle) {
	let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
	let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
	return {
		x: x1,
		y: y1,
	};
}

const option = {
   legend: [
    {
      orient: "vertical",
      right: "5%",
      itemGap: 20,
      itemWidth: 14,
      itemHeight: 14,
      top: "center",
      textStyle: {
        color: "#fff",
      },
      data: data.value.slice(Math.floor(data.value.length / 2), data.value.length),
    },
    {
      orient: "vertical",
      right: "30%",
      itemGap: 20,
      itemWidth: 14,
      itemHeight: 14,
      top: "center",
      textStyle: {
        color: "#fff",
      },
      data: data.value.slice(0, Math.ceil(data.value.length / 2)),
    },
  ],
  tooltip: {
    show: true,
  },
  series: [
    // 最外层圆
    {
      type: "pie",
      radius: ["75%", "55%"],
      center: ["30%", "50%"],
      hoverAnimation: false,
      data: [],
      label: {
        show: false,
        position: "outside",
        formatter: "{d}%",
        color: "#FFFFFF",
      },
      labelLine: {
        normal: {
          length: 80,
          lineStyle: {
            width: 1,
          },
        },
      },
    },
    // 内圆 + 中间文字
    {
      type: "pie",
      radius: ["60%", "40%"],
      center: ["30%", "50%"],
      hoverAnimation: false,
      z: 10,
      label: {
        position: "center",
        formatter: () => {
          return "";
        },
        rich: {
          total: {
            fontSize: 24,
            color: "#FFFFFF",
          },
        },
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 30,
      },
      data: [],
      labelLine: {
        show: false,
      },
    },
  ],
};

const refreshCharts = () => {
  angle = angle + 3;
  option.series[0].data = []
  option.series[1].data = []
  data.value.forEach((item, index) => {
    let dataItem = {
          value: item.value,
          name: item.name,
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              color: {
                // 完成的圆环的颜色
                colorStops: [
                  {
                    offset: 0,
                    color: colors[index], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: colors[index + 1], // 100% 处的颜色
                  },
                ],
              },
            },
          },
        }
    option.series[0].data.push(dataItem)
    option.series[1].data.push(dataItem)
  })
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>