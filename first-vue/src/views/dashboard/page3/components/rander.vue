<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
import * as echarts from "echarts"

const chartItem = ref();
const props = defineProps(["data"]);
const colors = [
  "#FEDB65",
  "#00EFFE",
  "#44D7B6",
  "#6DD400",
  "#FFA600",
  "#FEDB65",
  "#657aff",
  "#0060FF",
];
const dataArr = computed(() => {
  return props.data;
});


const refreshCharts = () => {
    

  let dataValueArr = [];
  dataArr.value.forEach(item => {
    dataValueArr.push(item.value)
  })
  let max = Math.max(...dataValueArr)

const option = {
  
    tooltip: {
        show: false 
    },
    radar: {
        radius: '75%',
        center: ['50%', '55%'],
        splitNumber: 35,
        name: {
            textStyle: {
                color: 'rgba(0,255,255, 0.8)',
                fonrSize: 12,
                padding: [-5,-5,-10,-5]
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: '#1d2a56',
            }
        },
        axisLine: {
             lineStyle: {
                width: 2,
                color: 'rgba(0,255,255, 0.2)',
            }
         },
        splitArea: {
            areaStyle: {
                 color: []
            },
        },
        indicator: dataArr.value
    },
    series: [{
        type: 'radar',
        symbolSize: 10,
        itemStyle: {
            borderColor: '#202020',
            borderWidth: 1,
        },
        areaStyle: {
            normal: {
                opacity: 0,
                
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#C6FA08',
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                },
            },
            value: []
        }]
    }]
}
  option.radar.indicator = dataArr.value;
  option.series[0].data[0].value = dataValueArr 
  option.radar.splitArea.areaStyle.color = [ chartItem.value.getColors('#6DD400', "#fff"),  chartItem.value.getColors('#0ff', "#f00")]
  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>