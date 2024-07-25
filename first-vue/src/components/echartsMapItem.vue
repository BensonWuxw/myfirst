<template>
<div class="echarts-box" ref="echartsBox"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { MapChart } from 'echarts/charts';
import { GeoComponent } from 'echarts/components';

// 引入中国地图数据
import chinaMapJson from "./china"
echarts.registerMap("china", chinaMapJson as any);

// 注册必要的组件
echarts.use([CanvasRenderer, MapChart, GeoComponent]);


const echartsBox = ref()
let myChart = null;
onMounted(() => {
    myChart = echarts.init(echartsBox.value);
    window.addEventListener('resize', handleResize);
})
const initCharts = (option: any) => {
  myChart.setOption(option)
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  if (myChart) {
    myChart.resize();
  }
};


defineExpose({initCharts})
</script>
<style scoped>
.echarts-box{
    width: 100%;
    height: 100%;
}
</style>
