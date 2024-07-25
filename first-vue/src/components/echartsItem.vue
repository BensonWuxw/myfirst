<template>
<div class="echarts-box" ref="echartsBox"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import * as echarts from "echarts"
import 'echarts-liquidfill'
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

const getColors = (color1, color2) => {
  return new echarts.graphic.LinearGradient(1, 0, 0, 1, [
      {
          offset: 1,
          color: color1,
      },
      {
          offset: 0,
          color: color2,
      },
  ])
}

defineExpose({initCharts, getColors})
</script>
<style scoped>
.echarts-box{
    width: 100%;
    height: 100%;
}
</style>