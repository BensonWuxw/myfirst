<template>
  <echartsMapItem ref="chartItem"></echartsMapItem>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import echartsMapItem from "@/components/echartsMapItem.vue";
const chartItem = ref();
const props = defineProps(["data"]);

const series = computed(() => {
  return props.data;
});

const refreshCharts = () => {
  		let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

  let data = [], LableData = [];
  series.value.forEach((item,index) => {
    let dataItem =  {
      name: item.name,
      value: item.coord,
    }
    let LableDataItem = {
      name: item.name,
      coords: [item.coord, [item.coord[0] + Math.floor(Math.random() * 10), item.coord[1] - Math.floor(Math.random() * 10)]],
      value: [item.value, item.value + 2],
    } 
    data.push(dataItem)
    LableData.push(LableDataItem)
  })

  const option = {
    /*backgroundColor: '#000f1e',*/
    geo: {
      map: "china",
      aspectScale: 0.85,
      layoutCenter: ["50%", "50%"], //地图位置
      layoutSize: "100%",
      itemStyle: {
        normal: { //未选中状态
				borderColor: 'rgba(147, 235, 248, 1)',
				borderWidth: 1,
				areaColor: {
					type: 'radial',
					x: 0.5,
					y: 0.5,
					r: 0.8,
					colorStops: [{
						offset: 0,
						color: 'rgba(0, 205, 205, .5)' // 0% 处的颜色
					}, {
						offset: 1,
						color: 'rgba(0, 205, 205, .8)' // 100% 处的颜色
					}],
					globalCoord: false // 缺省为 false
				},
				
				shadowColor: 'rgba(255, 255, 255, 1)',
				shadowOffsetX: -2,
				shadowOffsetY: 2,
				shadowBlur: 10
			},
			emphasis: { // 移动样式
				areaColor: '#389BB7',
				borderWidth: 0
			}
      },
        
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",

            borderColor: "rgba(0, 10, 52, 1)",
            normal: {
              opacity: 1,
              label: {
                show: false,
                color: "#009cc9",
              },
            },
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
     
      {
        //首都星图标
        name: "首都",
        type: "scatter",
        coordinateSystem: "geo",
        data: [
          {
            name: "首都",
            value: [116.24, 41.55, 100],
          },
        ],
        symbol: iconRQ,
        symbolSize: 20,
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
      },
      // 区域散点图
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        symbolSize: 10,
        rippleEffect: {
          //坐标点动画
          period: 3,
          scale: 5,
          brushType: "fill",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
            color: "#b3e2f2",
            fontWeight: "bold",
            fontSize: 16,
          },
        },

        data: data,
        itemStyle: {
          //坐标点颜色
          normal: {
            show: true,
            color: "#ff8003",
            shadowBlur: 20,
            shadowColor: "#fff",
          },
          emphasis: {
            areaColor: "#f00",
          },
        },
      },
      {
        type: "lines",
        zlevel: 3,
        symbol: "circle",
        symbolSize: [5, 5],
        color: "#ff8003",
        opacity: 1,
        label: {
          show: true,
          padding: [10, 20],
          color: "#fff",
          backgroundColor: "#1a3961",
          borderColor: "#aee9fb",
          borderWidth: 1,
          borderRadius: 6,
          formatter(params) {
            let arr = [
              params.name
            ];
            return arr.join("\n");
          },
          textStyle: {
            align: "left",
            lineHeight: 20,
          },
          /* normal: {

		                     textStyle: {
		                         color: '#fff',
		                         fontSize: 9,
		                     },
		                     formatter (value){
		                         return value.data.value[2]
		                     },

		                 }*/
        },
        lineStyle: {
          type: "solid",
          color: "#fff",
          width: 0.5,
          opacity: 1,
        },
        data: LableData,
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