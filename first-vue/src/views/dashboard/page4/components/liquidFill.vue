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
  let num = (dataArr.value / 100).toFixed(2)
let data = [num, Number(num) - 0.15]
const option = {
    series: [
          {
            type: "liquidFill",
            data: data,
            direction: "right", //波浪方向或者静止
            radius: "99%",
            shape: 'path://M518.331077 949.080615c17.142154-19.282708 34.282338-44.994954 100.688738-149.962831 32.143754-53.5552 59.984738-102.829292 85.698954-152.103385 49.274092-96.407631 98.548185-227.089723 98.548185-310.636308-2.140554-72.847754-29.993354-134.973046-85.698954-186.387692C659.733662 98.573785 593.31741501 72.861538 514.049969 72.861538s-147.822277 25.712246-203.52 79.267446c-57.844185 53.56504601-85.698954 115.688369-83.5584 188.526277C226.973538 561.315446 520.481477 951.221169 518.331077 949.080615z',
            // 水球颜色
            color: ["rgb(9,192,199)"],
            center: ["50%", "50%"], //水球位置
            // outline  外边
            outline: {
              // show: false
              borderDistance: 0, //内环padding值
              itemStyle: {
                borderWidth: 1, //圆边线宽度
                borderColor: "rgb(9,192,199)",
                shadowBlur: 50,
                shadowColor: 'rgba(63, 218, 255, 0.5)'
              }
            },
            backgroundStyle: {
                color: 'transparent'
            },
            label: {
              fontSize: '0.16rem',
              color: "rgb(255,255,255,0.88)"
            }
          }
        ]
};
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>