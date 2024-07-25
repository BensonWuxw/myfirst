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
watch(series, () => {
    refreshCharts()
})
const refreshCharts = () => {
let val = series.value, con = '完成率', max = 100, color = '#09c4ca';

const option = {
            grid: {
                left: '20%',
                top: '0',
                right: '20%',
                bottom: '0'
            },
            "xAxis": {
                type: 'value',
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "axisLabel": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                }
            },
            "yAxis": [{
                "type": "category",
                "inverse": false,
                "data": [],
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    show: false
                }
            }],
            "series": [
                {
                    type: 'pictorialBar',
                    data: [val],
                    itemStyle: {
                        normal: {
                            color: color
                        }
                    },
                    symbolRepeat: 'fixed',
                    symbolClip: true,
                    symbolSize: [5, 10],
                    symbol: 'roundRect',
                    label: {
                        show: true,
                        position: 'left',
                        formatter: function () {
                            return con
                        },
                        color: '#fff',
                        fontSize: '0.12rem',
                    },
                    z: 1000
                },
                {
                    type: 'pictorialBar',
                    itemStyle: {
                        normal: {
                            color: '#193040'
                        }
                    },
                    data: [max],
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    // symbolMargin: '20%',
                    symbol: 'roundRect',
                    symbolSize: [5, 10],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: function () {
                            return Math.floor(val * 100 / max) + '%'
                        },
                        color: '#fff',
                        fontSize: '0.12rem',
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