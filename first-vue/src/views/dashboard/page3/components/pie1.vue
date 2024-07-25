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
  let highlight = '#03b7c9';

let demoData = [
    { name: '新增', value: 88, pos: ['25%', '50%'], range: [0, 88] },
    { name: '电流', value: 66, pos: ['75%', '50%'], range: [0, 66] }
  ]
demoData[0].name = series.value[0].name 
demoData[0].value = series.value[0].value 
demoData[0].range[1] = series.value[0].value 
demoData[1].name = series.value[1].name 
demoData[1].value = series.value[1].value 
demoData[1].range[1] = series.value[1].value 
const option = {
   
    series: (function () {
        let result = [];
        demoData.forEach(function (item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    center: item.pos,
                    radius: '70%', // 1行3个
                    splitNumber: 10,
                    min: 0,
                    max: 100,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [[1, highlight]],
                        },
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: highlight,
                            width: 1,
                        },
                        length: -2,
                        splitNumber: 10,
                    },
                    splitLine: {
                        show: true,
                        length: -6,
                        lineStyle: {
                            color: highlight,
                        },
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: highlight,
                            fontSize: '10',
                            fontWeight: 'bold',
                        },
                    },
                    pointer: {
                        show: 0,
                    },
                    detail: {
                        show: 0,
                    },
                },

                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: '60%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 10,
                            color: [[1, 'rgba(255,255,255,.1)']],
                        },
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0,
                    },
                    pointer: {
                        show: true,
                        length: '105%',
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            fontSize: '0.16rem',
                            color: '#0ff',
                        },
                        formatter: ['{value} %', '{name|' + item.name + '}'].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd',
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: highlight,
                        },
                    },
                    data: [
                        {
                            value: item.value,
                        },
                    ],
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 14,
                        itemStyle: {
                            color: '#fff',
                        },
                    },
                }
            );
        });

        return result;
    })(),
};
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>