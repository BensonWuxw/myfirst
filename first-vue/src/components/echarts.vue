<template>
    <div ref="echartsContainer" class="echarts-container"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, defineExpose } from "vue"
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import { 
    TitleComponent, 
    TooltipComponent, 
    GridComponent, 
    DatasetComponent, 
    TransformComponent,
    LegendComponent 
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type { BarSeriesOption,  LineSeriesOption } from 'echarts/charts';
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components';
import type { 
  ComposeOption, 
} from 'echarts/core';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
const props = defineProps<{options: ECOption}>()
const option: ECOption = props.options;
const echartsContainer = ref()


const initCharts = () => {
    let myChart = echarts.init(echartsContainer.value);
    myChart.setOption(option);
}
onMounted(() => {
    initCharts()
})

defineExpose({initCharts})
</script>
<style>
.echarts-container{
    width: 100%;
    height: 100%;
    min-height: 300px;
}
</style>