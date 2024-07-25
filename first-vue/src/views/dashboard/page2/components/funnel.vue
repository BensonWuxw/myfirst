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

const option = {
    title: {
       show:false
    },
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            return '最近'
        }
    },
    color: colors,
  
    series : [
        {
            name:'漏斗图',
            type:'funnel',
            x: '5%',
            y: 10,
            x2: '5%',
            y2: 10,
            
            min: 0,
            max: 100,
            minSize: '40%',
            maxSize: '100%',
            sort : 'descending', // 'ascending', 'descending'
            gap :0,
            data:series.value.sort(function (a, b) { return a.value - b.value}),
            roseType: true,
            label: {
                normal: {
                    color:'#fff',
                    formatter: function (params) {
                        return  params.name + ' 变更{style|'+ params.value + '}次';
                    },
                    position: 'center',
                    rich:{
                        style:{
                            fontSize:'14px'
                        },
                        part:{
                            color:'#eee',
                            marginLeft:'10px'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 30,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
        
    ]
};


  chartItem.value.initCharts(option);
}
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>