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
    let xDataArr = [], seriesData = [];
    series.value.forEach(item => {
       xDataArr.push(item.name)
        seriesData.push(item.value)
    })
  const option = {
    color: ['#3cefff'],
    tooltip: {},
    grid: {
      top: "12.5%",
      right: "10%",
      left: "0",
      bottom: "2.5%",
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: xDataArr,
            axisTick: {
                alignWithLabel: true,
            },
            nameTextStyle: {
                color: '#82b0ec',
            },
            axisLine: {
                lineStyle: {
                    color: '#82b0ec',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#82b0ec',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#82b0ec',
                },
                formatter: '{value}%',
            },
            splitLine: {
                lineStyle: {
                    color: '#0c2c5a',
                },
            },
            axisLine: {
                show: false,
            },
            max:100
        },
    ],
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                },
            },
            data:seriesData,
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            z: 12,
            data: seriesData
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    opacity: 0.7,
                },
            },
            barWidth: '20',
            data: seriesData,
            markLine: {
                silent: true,
                label: {
                    position: 'middle',
                    formatter: '{b}',
                    color: 'red',
                },
                data: [
                    {
                        yAxis: 80,
                        lineStyle: {
                            color: 'red',
                        },
                        itemStyle: {
                            color: 'red',
                        },
                        label: {
                            position: 'end',
                            formatter: '{b}\n {c}%',
                        },
                    },
                ],
            },
        },
        {
            type: 'effectScatter',
            silent: true,
            tooltip: {
                show: false,
            },
            zlevel: 3,
            symbolSize: 10,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                color: '#3cefff',
                scale: 5,
            },
            itemStyle: {
                color: '#3cefff',
            },
            hoverAnimation: true,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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