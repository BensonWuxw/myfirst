<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";

const chartItem = ref();
const props = defineProps(["data"]);
const colors = [
  "#F6580E",
  "#19CA88",
  "#858FF8",
  "#6DD400",
  "#0060FF",
  "#FEDB65",
  "#657aff",
  "#0060FF",
];
const dataArr = computed(() => {
  return props.data;
});

const refreshCharts = () => {
  const option = {
  
  tooltip: {
    show: true,
    trigger: 'axis', //axis , item
    backgroundColor: 'RGBA(0, 49, 85, 1)',
    borderColor: 'rgba(0, 151, 251, 1)',
    borderWidth: 1,
    borderRadius: 0,
    textStyle: {
      color: '#BCE9FC',
      fontSize: 16,
      align: 'left',
    },
  },
  grid: {
    right: '5%',
    top: '5%',
    left: '5%',
    bottom: '2%',
    containLabel: true,
  },
  xAxis: {
    name: '城市',
    nameTextStyle: {
      color: '#65d5ff',
    },
    type: 'category',
    boundaryGap: true,
    data: dataArr.value.map(item => {return item.name}),
    axisLabel: {
      //坐标轴刻度标签的相关设置。
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
      //	margin:15,
      textStyle: {
        color: '#65D5FF',
        fontStyle: 'normal',
        fontSize: 16,
      },
    },
    axisTick: {
      //坐标轴刻度相关设置。
      show: false,
    },
    axisLine: {
      //坐标轴轴线相关设置
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
    splitLine: {
      //坐标轴在 grid 区域中的分隔线。
      show: true,
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      bottom: '20px',
      borderColor: '#07417a',
      backgroundColor: 'transparent',
      dataBackground: {
        lineStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
        areaStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
      },
      // 拖拽手柄样式 svg 路径
      handleIcon:
        'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
      handleColor: '#aab6c6',
      height: 6,
      handleSize: 12,
      showDataShadow: false,
      filterMode: 'filter',
      textStyle: {
        color: '#ccc',
      },
      start: 0,
      end: 100,
    },
  ],
  yAxis: [
    {
      name: '个',
      nameTextStyle: {
        color: '#65d5ff',
      },
      type: 'value',
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: '#65D5FF',
          fontStyle: 'normal',
          fontSize: 16,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
        },
      },
    },
    {
      name: '',
      nameTextStyle: {
        color: '#65d5ff'
      },
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#78bdf5'
        },
        formatter: function(value) {
          return value * 100 + '%'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '变更',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255, 64, 0, 0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
        'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: dataArr.value.map(item => {return item.value / 4}),
    },
    {
      name: '新增',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(48, 236, 166,0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
        'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: dataArr.value.map(item => {return item.value / 8}),
    },
    {
      name: '废弃',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(161, 159, 158, 0.8)', // 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(133, 133, 196, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
        'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: dataArr.value.map(item => {return item.value / 10}),
    },
     {
      name: '变化占比',
      type: 'line',
      data: dataArr.value.map(item => {return item.value / 100}),
      smooth: true,
      symbol: 'none',
      lineStyle: {
        normal: {
          color: {colorStops: [{
            offset: 0,
            color: 'rgba(255, 227, 168, 0.3)'
          }, {
            offset: 0.5,
            color: 'rgba(255, 227, 168, 1)'
          }, {
            offset: 1,
            color: 'rgba(255, 227, 168, 0.3)'
          }]},
          shadowColor: 'rgba(255, 120, 0,1)',
          shadowBlur: 10
        }
      },
      yAxisIndex: 1
    },
    {
      name: '变化占比',
      yAxisIndex: 1,
      type: 'effectScatter',
      showEffectOn: 'render',
      rippleEffect: {
        period: 5,
        scale: 3,
        brushType: 'stroke'
      },
      hoverAnimation: true,
      itemStyle: {
        normal: {
          color: 'rgba(217,247,249,1)',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: []
    }
  ],
};


  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>