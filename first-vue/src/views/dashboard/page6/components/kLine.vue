<template>
  <echartsItem ref="chartItem"></echartsItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsItem from "@/components/echartsItem.vue";
const chartItem = ref();
const props = defineProps(["data", "dataConfig"]);
const chartsData = computed(() => {
  return { series: props.data, config: props.dataConfig };
});

function calculateMA(dayCount, data) {
  var result = [];
  for (var i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push("-");
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}

const refreshCharts = () => {
  console.log(chartsData.value);
  let dates = chartsData.value.series.map((item) => {
    return item[0];
  });
  let name = chartsData.value.config.name;
  let unit = chartsData.value.config.unit;
  let color = chartsData.value.config.color;
  let data = chartsData.value.series.map((item) => {
    return [item[1], item[2], item[3], item[4]];
  });
  const option = {
    legend: {
      show: false,
      data: ["日K", "MA5", "MA10", "MA20", "MA30"],
      inactiveColor: "#777",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
        type: "cross",
        lineStyle: {
          color: "#376df4",
          width: 2,
          opacity: 1,
        },
      },
      formatter: function (params) {
        var time = params[0].name;
        var kd = params[0].data;
        // var ma5 = params[1].data;
        // var ma10 = params[2].data;
        // var ma20 = params[3].data;
        var rate = ((kd[1] - kd[0]) / kd[0]) * 100;
        rate = rate > 0 ? "+" + rate.toFixed(2) : rate.toFixed(2);
        var html = `${time}<br> 开始${name}：${kd[3]}${unit}<br> 结束${name}：${kd[2]}${unit}<br>`;
        return html;
      }.bind(this),
    },
    xAxis: {
      type: "category",
      data: dates,
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
    },
    yAxis: {
      scale: true,
      splitNumber: 4, //坐标轴的分割段数
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#777",
        },
      }, //坐标轴在 ((grid)) 区域中的分隔线。
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: "{value} " + unit,
      },
    },
    grid: {
      top: 10,
      left: 50,
      right: 0,
      bottom: 30,
    },

    animation: true,
    series: [
      {
        type: "candlestick",
        name: "日K",
        data: data,
        itemStyle: {
          normal: {
            color: color[1],
            color0: color[0],
            borderColor: color[1],
            borderColor0: color[0],
          },
        },
      },
      {
        name: "MA5",
        type: "line",
        data: calculateMA(5, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1,
          },
        },
      },
      {
        name: "MA10",
        type: "line",
        data: calculateMA(10, data),
        smooth: true,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1,
          },
        },
      },
      // {
      //     name: 'MA20',
      //     type: 'line',
      //     data: calculateMA(20, data),
      //     smooth: true,
      //     showSymbol: false,
      //     lineStyle: {
      //         normal: {
      //             width: 1
      //         }
      //     }
      // },
      // {
      //     name: 'MA30',
      //     type: 'line',
      //     data: calculateMA(30, data),
      //     smooth: true,
      //     showSymbol: false,
      //     lineStyle: {
      //         normal: {
      //             width: 1
      //         }
      //     }
      // }
    ],
  };

  chartItem.value.initCharts(option);
};
onMounted(() => {
  refreshCharts();
});

defineExpose({ refreshCharts });
</script>