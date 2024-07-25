<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
import icon from "../images/barfoot1.png"
import icon1 from "../images/barfoot0.png"
import { color } from "echarts";

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
 
let option = {
                tooltip: {
                    formatter: '{a}<br/>当前：{c}%'
                },
                series: [
                    //内圈
                    {
                        type: 'gauge',
                        center: ['50%', '60%'], // 默认全局居中
                        radius: '40%',
                        min: 0,
                        max: 10,
                        startAngle: 270,
                        endAngle: -89.99999,
                        splitNumber: 10,
                        axisLine: { // 仪表盘轴线
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: [
                                    [1, '#ff4500']
                                ],
                                width: 0,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisLabel: { // 刻度标签
                            show: false
                        },
                        axisTick: { // 刻度
                            length: 4, // 属性length控制线长
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: '#B0CC35'
                            }
                        },
                        splitLine: { // 分隔线
                            show: false
                        },
                        pointer: {
                            width: 0,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        detail: {
                            show: false
                        }
                    },
                    //中圈
                    {
                        name: '转速',
                        type: 'gauge',
                        center: ['50%', '60%'], // 默认全局居中
                        radius: '60%',
                        min: 0,
                        max: 10,
                        splitNumber: 10,
                        axisLine: { // 坐标轴线
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: [
                                    [1, 'rgba(255,255,255,0.25)']
                                ],
                                width: 8,

                                shadowBlur: 10
                            }
                        },
                        axisLabel: { // 刻度
                            show: false,
                            textStyle: { // 属性lineStyle控制线条样式
                                fontWeight: '',
                                color: 'rgba(30,144,255,0)',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        axisTick: { // 坐标轴小标记
                            show: false,
                            length: 2, // 属性length控制线长
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: 'auto'
                                /*shadowColor : '#fff', //默认透明
                                 shadowBlur: 10*/
                            }
                        },
                        splitLine: { // 分隔线
                            show: false,
                            length: 0, // 属性length控制线长
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 0,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            }
                        },
                        pointer: {
                            width: 0,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5
                        },
                        detail: {
                            show: false
                        }
                    },
                    //外圈室内
                    {
                        type: 'gauge',
                        center: ['50%', '60%'], // 默认全局居中
                        radius: '100%',
                        min: 0,
                        max: 100,
                        name: series.value[0].name,
                        axisLine: { // 坐标轴线
                            lineStyle: {
                                color: [
                                    [1, '#B0CC35']
                                ], // 属性lineStyle控制线条样式
                                width: 1
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: series.value[0].color
                            }
                        },
                        axisTick: {
                            show: false,
                            length: 3,
                            lineStyle: { 
                                width: 1,
                                color: "red"
                            }
                        },
                        axisLabel: { // 坐标轴小标记
                            show: false,
                            textStyle: { // 属性lineStyle控制线条样式
                                fontWeight: 'bolder',
                                fontSize: 10,
                                fontFamily: 'numfont'
                            }
                        },
                        splitLine: { // 分隔线
                            show: false,
                            length: 15, // 属性length控制线长
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 1,
                                color: "red"
                            }
                        },
                        pointer: {
                            width: 3,
                            length: '90%'
                        },
                        detail: {
                            show: false
                        },
                        data: [{
                            value: series.value[0].value
                        }]
                    },
                    //外圈室外
                    {
                        type: 'gauge',
                        center: ['50%', '60%'], // 默认全局居中
                        radius: '100%',
                        min: 0,
                        max: 100,
                        name: series.value[1].name,
                        axisTick: {
                            distance: 0,
                            length: 5,
                            lineStyle: { 
                                width: 1,
                                color: '#fff'
                            }
                        },
                        axisLine: { // 坐标轴线
                            lineStyle: {
                                color: [
                                    [1, '#fff']
                                ], // 属性lineStyle控制线条样式
                                width: 1
                            }
                        },
                        pointer: {
                            width: 3,
                            length: '90%'
                        },
                        itemStyle: {
                            normal: {
                                color: series.value[1].color
                            }

                        },
                        axisLabel: {
                            distance: 5,
                            textStyle: {
                                fontWeight: 'bolder',
                                fontSize: 8,
                                color: '#fff'
                            }
                        },
                        splitLine: { // 分隔线
                            length: 10, // 属性length控制线长
                            distance: 0,
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 2,
                               color: '#B0CC35'
                            }
                        },
                        detail: {
                            show: false
                        },
                        data: [{
                            value: series.value[1].value
                        }],
                        title: {
                            show: false
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