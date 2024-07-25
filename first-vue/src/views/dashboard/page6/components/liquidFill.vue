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
  series: [{
		type: 'liquidFill', //水位图
		radius: '96%', //显示比例
		center: ['50%', '50%'], //中心点
		amplitude: 5, //水波振幅
		data: [0.5, 0.5, 0.5], // data个数代表波浪数
		color: ['#B0CC35'], //波浪颜色
    waveAnimation: true,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
    animationDurationUpdate: 1,
    animationDuration: 100,
		backgroundStyle: {
			borderWidth: 0, //外边框
			borderColor: '#000', //边框颜色
			color: 'transparent', //边框内部填充部分颜色
		},
		label: {
			//标签设置
			normal: {
        show: false,
				position: ['50%', '30%'],
				formatter: '50%', //显示文本,
				textStyle: {
					fontSize: '52px', //文本字号,
					color: '#fff',
				},
			},
		},
		outline: {
			show: false, //最外层边框显示控制
		},
	}, ]
};
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>