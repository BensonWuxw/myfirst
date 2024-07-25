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
var option = {
    grid: {
        top: '10%',
        bottom: '5%',
        left: '5%',
        right: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: series.value.map(item => item.name),
        axisLine: {
            lineStyle: {
                color: 'rgba(66, 192, 255, .3)',
            },
        },
        
        axisLabel: {
        rotate: -45,
            textStyle: {
                color: '#33FFFF',
            },
        },
    },

    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#5FBBEB',
                },
            },
            axisLine: {
                lineStyle: {
                    fontSize:12,
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
        },
        {
            type: 'value',
            name: '(%)',
            nameTextStyle: {
                color: '#d2d2d2',
            },
            max:'100',
            min:'0',
            scale: true,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: 'rgba(66, 192, 255, .3)',
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                formatter: '{value} %', //右侧Y轴文字显示
                textStyle: {
                    fontSize:12,
                    color: '#42C0FF',
                },
            },
        },
    ],
    series: [
        {
            name: '回访数量',
            type: 'bar',
            barWidth: '12px',
            itemStyle: {
                normal: {
                    color: {
                      colorStops: [
                        {
                            offset: 0,
                            color: '#29acff',
                        },
                        {
                            offset: 1,
                            color: '#4bdfff',
                        },
                    ]
                    },
                    barBorderRadius: 6,
                },
            },
            data: series.value.map(item => item.value + Math.ceil(Math.random()*100)),
        },
        {
            name: '满意率',
            type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示

            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                normal: {
                    color: '#ffa43a',
                    borderColor: 'rgba(255, 234, 0, 0.5)', //圆点透明 边框
                    borderWidth: 5,
                },
            },
            lineStyle: {
                color: '#ffa43a',
            },

            data: series.value.map(item => item.value),
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