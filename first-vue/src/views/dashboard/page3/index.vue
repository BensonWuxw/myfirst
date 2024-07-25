<template>
  <div class="page3">
    <div class="top">
      <div class="top-left">

      </div>
      <div class="top-center">
        <img src="./images/vue.svg">XXXXXXX系统
      </div>
      <div class="top-tight">
        {{currentTime}}
      </div>
    </div>
    <div class="mid">
      <div class="mid-left">
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <div class="item-50">
              <img class="level-icon" src="./images/aqdj.png" />
            </div>

            <div class="item-50">
              <pieCharts ref="pieChartsBox" :data="num"></pieCharts>
            </div>
          </div>

        </div>
        <div class="chart-item">
          <div class="item-title">评分排名</div>
          <div class="item-content">
            <vue3-seamless-scroll class="scroll" :list="items" :step="0.25" hover wheel>
              <div v-for="item in items" :key="item.id" class="scrool-item">
                <div class="scrool-item-index">
                  {{item.id}}
                </div>
                <div class="scrool-item-name">
                  {{item.name}}
                </div>
                <div class="scrool-item-time">
                  {{item.time}}
                </div>
              </div>
            </vue3-seamless-scroll>
          </div>
        </div>
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <stickCharts1 ref="stickChartsBox1" :data="series"></stickCharts1>
          </div>

        </div>
      </div>
      <div class="map-content" ref="mapContainer">
        <baidu-map class="map" ak="2YCQxbGampc7M1pFsKWNiwpS5F7RKVRt" :center="{lng: 101.48, lat: 37.4}" :zoom="5" :min-zoom="5" :max-zoom="15" auto-resize scroll-wheel-zoom @ready="initMap">
          <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale>
          <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <bm-panorama></bm-panorama>
          <!-- <bm-marker :position="{lng: 116.404, lat: 39.915}" animation="BMAP_ANIMATION_BOUNCE" :dragging="true" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker> -->
          <bm-marker v-for="point in series" :position="{lng: point.coord[0], lat: point.coord[1]}" :key="point.id" animation="BMAP_ANIMATION_BOUNCE" :dragging="true"></bm-marker>
        </baidu-map>
      </div>
      <div class="mid-right">
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
           <funnelCharts ref="funnelChartsBox" :data="series"></funnelCharts>
          </div>

        </div>
        <div class="chart-item">
          <div class="item-title">评分排名</div>
          <div class="item-content">
            <pieCharts1 ref="pieChartsBox1" :data="series"></pieCharts1>
          </div>
        </div>
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <guageCharts ref="guageChartsBox" :data="series"></guageCharts>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="chart-item">
        <div class="item-title">安全评分</div>
        <div class="item-content">
          <lineChart ref="lineChartBox" :data="series"></lineChart>
        </div>
      </div>
      <div class="bottom-center">
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <stickCharts ref="stickChartsBox" :data="series"></stickCharts>
          </div>
        </div>
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <stickCharts2 ref="stickChartsBox2" :data="series"></stickCharts2>
          </div>
        </div>
        <div class="chart-item">
          <div class="item-title">安全评分</div>
          <div class="item-content">
            <pictorialBar ref="pictorialBarChartsBox" :data="series"></pictorialBar>
          </div>
        </div>
      </div>
      <div class="chart-item">
        <div class="item-title">安全评分</div>
        <div class="item-content">
           <rander ref="randerChartsBox" :data="series"></rander>

        </div>
      </div>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { BaiduMap, BmScale, BmMapType, BmPanorama, BmMarker } from 'vue-baidu-map-3x'
import { onMounted, ref, onUnmounted, reactive } from 'vue';
import dayjs from "dayjs";
import styleJson from "./mapStyle"
import pieCharts from "./components/pie.vue"
import pieCharts1 from "./components/pie1.vue"


import stickCharts from "./components/stick.vue";
import stickCharts1 from "./components/stick1.vue"
import stickCharts2 from "./components/stick2.vue"

import lineChart from "./components/lineChart.vue";
import lineChart1 from "./components/lineChart1.vue";
import funnelCharts from "./components/funnel.vue";
import rander from "./components/rander.vue";
import pictorialBar from "./components/pictorialBar.vue";
import guageCharts from "./components/guageCharts.vue";

import CountUp from "vue-countup-v3";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
let allData = [
  {
    id: 0,
    name: "北京",
    value: 27,
    coord: [116.41, 40.19],
  },
  {
    id: 1,
    name: "上海",
    value: 72,
    coord: [121.47, 31.24],
  },
  {
    id: 2,
    name: "西安",
    value: 17,
    coord: [108.79, 34.11],
  },
  {
    id: 3,
    name: "深圳",
    value: 88,
    coord: [114.13, 22.65],
  },
  {
    id: 4,
    name: "广州",
    value: 47,
    coord: [113.54, 23.35],
  },
  {
    id: 5,
    name: "武汉",
    value: 93,
    coord: [114.34, 30.62],
  },
  {
    id: 6,
    name: "杭州",
    value: 12,
    coord: [119.47, 29.9],
  },
  {
    id: 7,
    name: "郑州",
    value: 86,
    coord: [113.47, 34.63],
  },
  {
    id: 8,
    name: "南京",
    value: 49,
    coord: [118.84, 31.93],
  },
  {
    id: 9,
    name: "天津",
    value: 97,
    coord: [117.33, 39.29],
  },
  {
    id: 10,
    name: "苏州",
    value: 14,
    coord: [120.65, 31.38],
  },
  {
    id: 11,
    name: "成都",
    value: 69,
    coord: [103.93, 30.65],
  },
  {
    id: 12,
    name: "长沙",
    value: 69,
    coord: [113.15, 28.23],
  },
  {
    id: 13,
    name: "合肥",
    value: 81,
    coord: [117.36, 31.76],
  },
  {
    id: 14,
    name: "宁波",
    value: 15,
    coord: [121.46, 29.74],
  },
  {
    id: 15,
    name: "福州",
    value: 23,
    coord: [119.18, 26.05],
  },
  {
    id: 16,
    name: "青岛",
    value: 94,
    coord: [120.14, 36.45],
  },
  {
    id: 17,
    name: "泉州",
    value: 56,
    coord: [118.26, 25.2],
  },
  {
    id: 18,
    name: "厦门",
    value: 31,
    coord: [118.12, 24.68],
  },
  {
    id: 19,
    name: "东莞",
    value: 85,
    coord: [113.88, 22.94],
  },
  {
    id: 20,
    name: "重庆",
    value: 95,
    coord: [107.87, 30.06],
  },
  {
    id: 21,
    name: "南通",
    value: 23,
    coord: [121.02, 32.19],
  },
  {
    id: 22,
    name: "佛山",
    value: 17,
    coord: [112.94, 23.01],
  },
  {
    id: 23,
    name: "无锡",
    value: 12,
    coord: [120.08, 31.53],
  },
  {
    id: 24,
    name: "济南",
    value: 27,
    coord: [117.21, 36.64],
  },
  {
    id: 25,
    name: "温州",
    value: 33,
    coord: [120.44, 27.9],
  },
  {
    id: 26,
    name: "嘉兴",
    value: 61,
    coord: [120.8, 30.62],
  },
  {
    id: 27,
    name: "南昌",
    value: 72,
    coord: [116.02, 28.65],
  },
  {
    id: 28,
    name: "昆明",
    value: 11,
    coord: [102.87, 25.39],
  },
  {
    id: 29,
    name: "太原",
    value: 6,
    coord: [112.32, 37.96],
  },
  {
    id: 30,
    name: "绍兴",
    value: 94,
    coord: [120.64, 29.74],
  },
  {
    id: 31,
    name: "南宁",
    value: 51,
    coord: [108.46, 23.06],
  },
  {
    id: 32,
    name: "扬州",
    value: 89,
    coord: [119.47, 32.74],
  },
  {
    id: 33,
    name: "兰州",
    value: 55,
    coord: [103.65, 36.35],
  },
  {
    id: 34,
    name: "石家庄",
    value: 70,
    coord: [114.44, 38.13],
  },
  {
    id: 35,
    name: "廊坊",
    value: 26,
    coord: [116.63, 39.26],
  },
  {
    id: 36,
    name: "沈阳",
    value: 62,
    coord: [123.14, 42.09],
  },
  {
    id: 37,
    name: "徐州",
    value: 98,
    coord: [117.52, 34.36],
  },
  {
    id: 38,
    name: "常州",
    value: 38,
    coord: [119.64, 31.63],
  },
  {
    id: 39,
    name: "金华",
    value: 4,
    coord: [119.95, 29.12],
  },
  {
    id: 40,
    name: "中山",
    value: 76,
    coord: [113.38, 22.52],
  },
  {
    id: 41,
    name: "保定",
    value: 46,
    coord: [115.17, 39.02],
  },
  {
    id: 42,
    name: "长春",
    value: 84,
    coord: [125.77, 44.38],
  },
  {
    id: 43,
    name: "哈尔滨",
    value: 84,
    coord: [127.96, 45.64],
  },
  {
    id: 44,
    name: "盐城",
    value: 17,
    coord: [120.18, 33.51],
  },
  {
    id: 45,
    name: "台州",
    value: 25,
    coord: [121.11, 28.77],
  },
  {
    id: 46,
    name: "潍坊",
    value: 83,
    coord: [119.07, 36.55],
  },
  {
    id: 47,
    name: "惠州",
    value: 84,
    coord: [114.5, 23.24],
  },
  {
    id: 48,
    name: "贵阳",
    value: 35,
    coord: [106.71, 26.84],
  },
  {
    id: 49,
    name: "大连",
    value: 12,
    coord: [122.21, 39.59],
  },
  {
    id: 50,
    name: "淮安",
    value: 52,
    coord: [118.96, 33.35],
  },
  {
    id: 51,
    name: "泰州",
    value: 4,
    coord: [120.06, 32.57],
  },
  {
    id: 52,
    name: "湖州",
    value: 46,
    coord: [119.87, 30.74],
  },
  {
    id: 53,
    name: "银川",
    value: 37,
    coord: [106.35, 38.28],
  },
  {
    id: 54,
    name: "唐山",
    value: 86,
    coord: [118.34, 39.72],
  },
  {
    id: 55,
    name: "邯郸",
    value: 54,
    coord: [114.54, 36.55],
  },
  {
    id: 56,
    name: "镇江",
    value: 66,
    coord: [119.45, 32.02],
  },
  {
    id: 57,
    name: "宿迁",
    value: 76,
    coord: [118.52, 33.78],
  },
  {
    id: 58,
    name: "阜阳",
    value: 4,
    coord: [115.7, 32.92],
  },
  {
    id: 59,
    name: "莆田",
    value: 3,
    coord: [118.89, 25.45],
  },
  {
    id: 60,
    name: "烟台",
    value: 64,
    coord: [120.8, 37.24],
  },
  {
    id: 61,
    name: "济宁",
    value: 57,
    coord: [116.73, 35.37],
  },
  {
    id: 62,
    name: "临沂",
    value: 51,
    coord: [118.28, 35.31],
  },
  {
    id: 63,
    name: "洛阳",
    value: 14,
    coord: [112.03, 34.29],
  },
  {
    id: 64,
    name: "汕头",
    value: 30,
    coord: [116.58, 23.33],
  },
  {
    id: 65,
    name: "江门",
    value: 100,
    coord: [112.67, 22.28],
  },
  {
    id: 66,
    name: "海口",
    value: 20,
    coord: [110.42, 19.83],
  },
  {
    id: 67,
    name: "沧州",
    value: 29,
    coord: [116.75, 38.27],
  },
  {
    id: 68,
    name: "呼和浩特",
    value: 28,
    coord: [111.5, 40.59],
  },
  {
    id: 69,
    name: "连云港",
    value: 40,
    coord: [119.13, 34.53],
  },
  {
    id: 70,
    name: "许昌",
    value: 81,
    coord: [113.71, 34.07],
  },
  {
    id: 71,
    name: "珠海",
    value: 57,
    coord: [113.36, 22.17],
  },
  {
    id: 72,
    name: "湛江",
    value: 29,
    coord: [110.16, 21.1],
  },
  {
    id: 73,
    name: "咸阳",
    value: 36,
    coord: [108.39, 34.78],
  },
  {
    id: 74,
    name: "邢台",
    value: 72,
    coord: [114.82, 37.21],
  },
  {
    id: 75,
    name: "包头",
    value: 100,
    coord: [110.26, 41.55],
  },
  {
    id: 76,
    name: "芜湖",
    value: 24,
    coord: [118.13, 31.16],
  },
  {
    id: 77,
    name: "滁州",
    value: 12,
    coord: [118.1, 32.54],
  },
  {
    id: 78,
    name: "漳州",
    value: 73,
    coord: [117.44, 24.37],
  },
  {
    id: 79,
    name: "淄博",
    value: 41,
    coord: [118.05, 36.61],
  },
  {
    id: 80,
    name: "日照",
    value: 1,
    coord: [119.14, 35.58],
  },
  {
    id: 81,
    name: "开封",
    value: 76,
    coord: [114.54, 34.6],
  },
  {
    id: 82,
    name: "黄石",
    value: 3,
    coord: [115.03, 29.93],
  },
  {
    id: 83,
    name: "襄阳",
    value: 6,
    coord: [111.94, 31.93],
  },
  {
    id: 84,
    name: "荆州",
    value: 72,
    coord: [112.57, 30],
  },
  {
    id: 85,
    name: "衡阳",
    value: 49,
    coord: [112.57, 26.79],
  },
  {
    id: 86,
    name: "肇庆",
    value: 40,
    coord: [112.21, 23.54],
  },
  {
    id: 87,
    name: "梅州",
    value: 25,
    coord: [116.08, 24.2],
  },
  {
    id: 88,
    name: "揭阳",
    value: 76,
    coord: [116.12, 23.34],
  },
  {
    id: 89,
    name: "柳州",
    value: 61,
    coord: [109.37, 24.95],
  },
  {
    id: 90,
    name: "桂林",
    value: 73,
    coord: [110.51, 25.35],
  },
  {
    id: 91,
    name: "三亚",
    value: 7,
    coord: [109.42, 18.39],
  },
  {
    id: 92,
    name: "宝鸡",
    value: 47,
    coord: [107.2, 34.38],
  },
  {
    id: 93,
    name: "渭南",
    value: 42,
    coord: [109.85, 34.95],
  },
  {
    id: 94,
    name: "榆林",
    value: 49,
    coord: [109.57, 38.04],
  },
  {
    id: 95,
    name: "西宁",
    value: 15,
    coord: [101.44, 36.83],
  },
  {
    id: 96,
    name: "秦皇岛",
    value: 45,
    coord: [119.19, 40.09],
  },
  {
    id: 97,
    name: "衡水",
    value: 41,
    coord: [115.82, 37.76],
  },
  {
    id: 98,
    name: "鞍山",
    value: 78,
    coord: [123.01, 40.71],
  },
  {
    id: 99,
    name: "丹东",
    value: 52,
    coord: [124.4, 40.54],
  },
  {
    id: 100,
    name: "吉林",
    value: 38,
    coord: [126.84, 43.58],
  },
  {
    id: 101,
    name: "衢州",
    value: 6,
    coord: [118.67, 28.93],
  },
  {
    id: 102,
    name: "舟山",
    value: 67,
    coord: [122.19, 30.09],
  },
  {
    id: 103,
    name: "安庆",
    value: 77,
    coord: [116.49, 30.58],
  },
  {
    id: 104,
    name: "六安",
    value: 9,
    coord: [116.23, 31.66],
  },
  {
    id: 105,
    name: "亳州",
    value: 17,
    coord: [116.18, 33.44],
  },
  {
    id: 106,
    name: "宁德",
    value: 13,
    coord: [119.47, 26.97],
  },
  {
    id: 107,
    name: "萍乡",
    value: 74,
    coord: [113.9, 27.51],
  },
  {
    id: 108,
    name: "九江",
    value: 28,
    coord: [115.45, 29.32],
  },
  {
    id: 109,
    name: "赣州",
    value: 88,
    coord: [115.27, 25.71],
  },
  {
    id: 110,
    name: "泰安",
    value: 82,
    coord: [117.03, 36],
  },
  {
    id: 111,
    name: "德州",
    value: 15,
    coord: [116.65, 37.25],
  },
  {
    id: 112,
    name: "聊城",
    value: 94,
    coord: [115.88, 36.46],
  },
  {
    id: 113,
    name: "菏泽",
    value: 79,
    coord: [115.69, 35.15],
  },
  {
    id: 114,
    name: "平顶山",
    value: 28,
    coord: [113.01, 33.8],
  },
  {
    id: 115,
    name: "焦作",
    value: 72,
    coord: [113.13, 35.12],
  },
  {
    id: 116,
    name: "漯河",
    value: 2,
    coord: [113.9, 33.66],
  },
  {
    id: 117,
    name: "南阳",
    value: 54,
    coord: [112.28, 33.04],
  },
  {
    id: 118,
    name: "信阳",
    value: 48,
    coord: [114.88, 32.08],
  },
  {
    id: 119,
    name: "周口",
    value: 71,
    coord: [114.88, 33.72],
  },
  {
    id: 120,
    name: "驻马店",
    value: 44,
    coord: [114.15, 32.92],
  },
  {
    id: 121,
    name: "宜昌",
    value: 97,
    coord: [111.14, 30.75],
  },
  {
    id: 122,
    name: "荆门",
    value: 23,
    coord: [112.61, 31.07],
  },
  {
    id: 123,
    name: "孝感",
    value: 53,
    coord: [113.88, 31.12],
  },
  {
    id: 124,
    name: "株洲",
    value: 45,
    coord: [113.52, 27.12],
  },
  {
    id: 125,
    name: "湘潭",
    value: 12,
    coord: [112.6, 27.73],
  },
  {
    id: 126,
    name: "岳阳",
    value: 51,
    coord: [113.25, 29.07],
  },
  {
    id: 127,
    name: "常德",
    value: 36,
    coord: [111.52, 29.3],
  },
  {
    id: 128,
    name: "娄底",
    value: 56,
    coord: [111.61, 27.74],
  },
  {
    id: 129,
    name: "茂名",
    value: 82,
    coord: [110.95, 22.02],
  },
  {
    id: 130,
    name: "河源",
    value: 45,
    coord: [114.96, 24.04],
  },
  {
    id: 131,
    name: "清远",
    value: 65,
    coord: [112.87, 24.31],
  },
  {
    id: 132,
    name: "云浮",
    value: 38,
    coord: [111.79, 22.82],
  },
  {
    id: 133,
    name: "北海",
    value: 88,
    coord: [109.33, 21.68],
  },
  {
    id: 134,
    name: "钦州",
    value: 99,
    coord: [109.02, 22.18],
  },
  {
    id: 135,
    name: "攀枝花",
    value: 90,
    coord: [101.73, 26.81],
  },
  {
    id: 136,
    name: "绵阳",
    value: 57,
    coord: [104.7, 31.85],
  },
  {
    id: 137,
    name: "张家口",
    value: 8,
    coord: [115.03, 40.87],
  },
  {
    id: 138,
    name: "承德",
    value: 78,
    coord: [117.55, 41.35],
  },
  {
    id: 139,
    name: "大同",
    value: 48,
    coord: [113.72, 39.9],
  },
  {
    id: 140,
    name: "长治",
    value: 73,
    coord: [112.92, 36.48],
  },
  {
    id: 141,
    name: "晋城",
    value: 100,
    coord: [112.71, 35.61],
  },
  {
    id: 142,
    name: "晋中",
    value: 9,
    coord: [112.96, 37.33],
  },
  {
    id: 143,
    name: "运城",
    value: 37,
    coord: [111.06, 35.19],
  },
  {
    id: 144,
    name: "忻州",
    value: 25,
    coord: [112.41, 38.88],
  },
  {
    id: 145,
    name: "临汾",
    value: 70,
    coord: [111.38, 36.23],
  },
  {
    id: 146,
    name: "吕梁",
    value: 25,
    coord: [111.26, 37.68],
  },
  {
    id: 147,
    name: "乌海",
    value: 33,
    coord: [106.87, 39.43],
  },
  {
    id: 148,
    name: "赤峰",
    value: 42,
    coord: [118.87, 43.22],
  },
  {
    id: 149,
    name: "通辽",
    value: 79,
    coord: [121.57, 43.82],
  },
  {
    id: 150,
    name: "鄂尔多斯",
    value: 9,
    coord: [108.63, 39.41],
  },
  {
    id: 151,
    name: "呼伦贝尔",
    value: 78,
    coord: [121.2, 49.66],
  },
  {
    id: 152,
    name: "本溪",
    value: 63,
    coord: [124.57, 41.23],
  },
  {
    id: 153,
    name: "锦州",
    value: 72,
    coord: [121.61, 41.46],
  },
  {
    id: 154,
    name: "盘锦",
    value: 44,
    coord: [122, 41.08],
  },
  {
    id: 155,
    name: "铁岭",
    value: 84,
    coord: [124.17, 42.64],
  },
  {
    id: 156,
    name: "四平",
    value: 85,
    coord: [124.47, 43.57],
  },
  {
    id: 157,
    name: "通化",
    value: 72,
    coord: [125.95, 41.96],
  },
  {
    id: 158,
    name: "白山",
    value: 48,
    coord: [127.29, 42.07],
  },
  {
    id: 159,
    name: "松原",
    value: 1,
    coord: [124.48, 44.8],
  },
  {
    id: 160,
    name: "延边朝鲜族自治州",
    value: 18,
    coord: [129.12, 43.14],
  },
  {
    id: 161,
    name: "齐齐哈尔",
    value: 55,
    coord: [124.55, 47.7],
  },
  {
    id: 162,
    name: "大庆",
    value: 77,
    coord: [124.7, 46.35],
  },
  {
    id: 163,
    name: "牡丹江",
    value: 47,
    coord: [129.89, 44.6],
  },
  {
    id: 164,
    name: "蚌埠",
    value: 94,
    coord: [117.33, 33.11],
  },
  {
    id: 165,
    name: "淮南",
    value: 32,
    coord: [116.77, 32.47],
  },
  {
    id: 166,
    name: "马鞍山",
    value: 80,
    coord: [118.37, 31.64],
  },
  {
    id: 167,
    name: "淮北",
    value: 33,
    coord: [116.74, 33.73],
  },
  {
    id: 168,
    name: "铜陵",
    value: 14,
    coord: [117.56, 30.88],
  },
  {
    id: 169,
    name: "宿州",
    value: 100,
    coord: [117.21, 33.86],
  },
  {
    id: 170,
    name: "宣城",
    value: 45,
    coord: [118.85, 30.69],
  },
  {
    id: 171,
    name: "南平",
    value: 58,
    coord: [118.14, 27.34],
  },
  {
    id: 172,
    name: "龙岩",
    value: 73,
    coord: [116.74, 25.29],
  },
  {
    id: 173,
    name: "景德镇",
    value: 18,
    coord: [117.27, 29.31],
  },
  {
    id: 174,
    name: "新余",
    value: 93,
    coord: [114.85, 27.85],
  },
  {
    id: 175,
    name: "鹰潭",
    value: 49,
    coord: [117.11, 28.22],
  },
  {
    id: 176,
    name: "吉安",
    value: 83,
    coord: [114.82, 26.97],
  },
  {
    id: 177,
    name: "宜春",
    value: 78,
    coord: [114.97, 28.31],
  },
  {
    id: 178,
    name: "抚州",
    value: 98,
    coord: [116.43, 27.51],
  },
  {
    id: 179,
    name: "上饶",
    value: 9,
    coord: [117.47, 28.77],
  },
  {
    id: 180,
    name: "枣庄",
    value: 40,
    coord: [117.39, 34.92],
  },
  {
    id: 181,
    name: "东营",
    value: 86,
    coord: [118.6, 37.62],
  },
  {
    id: 182,
    name: "滨州",
    value: 87,
    coord: [117.84, 37.53],
  },
  {
    id: 183,
    name: "安阳",
    value: 14,
    coord: [114.35, 35.88],
  },
  {
    id: 184,
    name: "鹤壁",
    value: 58,
    coord: [114.31, 35.72],
  },
  {
    id: 185,
    name: "新乡",
    value: 48,
    coord: [114.09, 35.26],
  },
  {
    id: 186,
    name: "濮阳",
    value: 40,
    coord: [115.28, 35.81],
  },
  {
    id: 187,
    name: "三门峡",
    value: 61,
    coord: [111.11, 34.36],
  },
  {
    id: 188,
    name: "商丘",
    value: 78,
    coord: [115.7, 34.29],
  },
  {
    id: 189,
    name: "济源",
    value: 30,
    coord: [112.39, 35.1],
  },
  {
    id: 190,
    name: "十堰",
    value: 22,
    coord: [110.44, 32.46],
  },
  {
    id: 191,
    name: "鄂州",
    value: 22,
    coord: [114.76, 30.33],
  },
  {
    id: 192,
    name: "黄冈",
    value: 79,
    coord: [115.34, 30.72],
  },
  {
    id: 193,
    name: "咸宁",
    value: 16,
    coord: [114.18, 29.62],
  },
  {
    id: 194,
    name: "随州",
    value: 95,
    coord: [113.42, 31.83],
  },
  {
    id: 195,
    name: "恩施土家族苗族自治州",
    value: 22,
    coord: [109.5, 30.19],
  },
  {
    id: 196,
    name: "仙桃",
    value: 56,
    coord: [113.38, 30.29],
  },
  {
    id: 197,
    name: "天门",
    value: 71,
    coord: [113.11, 30.64],
  },
  {
    id: 198,
    name: "邵阳",
    value: 46,
    coord: [110.87, 26.91],
  },
  {
    id: 199,
    name: "张家界",
    value: 8,
    coord: [110.53, 29.39],
  },
  {
    id: 200,
    name: "益阳",
    value: 49,
    coord: [111.95, 28.58],
  },
  {
    id: 201,
    name: "郴州",
    value: 43,
    coord: [113.14, 25.81],
  },
  {
    id: 202,
    name: "永州",
    value: 68,
    coord: [111.73, 25.77],
  },
  {
    id: 203,
    name: "汕尾",
    value: 99,
    coord: [115.53, 23.01],
  },
  {
    id: 204,
    name: "阳江",
    value: 67,
    coord: [111.77, 22.04],
  },
  {
    id: 205,
    name: "防城港",
    value: 95,
    coord: [108, 21.88],
  },
  {
    id: 206,
    name: "贵港",
    value: 44,
    coord: [110, 23.31],
  },
  {
    id: 207,
    name: "玉林",
    value: 10,
    coord: [110.18, 22.44],
  },
  {
    id: 208,
    name: "百色",
    value: 6,
    coord: [106.29, 23.99],
  },
  {
    id: 209,
    name: "儋州",
    value: 51,
    coord: [109.4, 19.57],
  },
  {
    id: 210,
    name: "自贡",
    value: 70,
    coord: [104.68, 29.29],
  },
  {
    id: 211,
    name: "泸州",
    value: 81,
    coord: [105.67, 28.44],
  },
  {
    id: 212,
    name: "德阳",
    value: 75,
    coord: [104.44, 31.13],
  },
  {
    id: 213,
    name: "遂宁",
    value: 8,
    coord: [105.47, 30.63],
  },
  {
    id: 214,
    name: "乐山",
    value: 61,
    coord: [103.57, 29.22],
  },
  {
    id: 215,
    name: "南充",
    value: 50,
    coord: [106.2, 31.2],
  },
  {
    id: 216,
    name: "眉山",
    value: 53,
    coord: [103.76, 29.93],
  },
  {
    id: 217,
    name: "宜宾",
    value: 99,
    coord: [104.64, 28.57],
  },
  {
    id: 218,
    name: "达州",
    value: 44,
    coord: [107.64, 31.37],
  },
  {
    id: 219,
    name: "遵义",
    value: 90,
    coord: [107.08, 28.17],
  },
  {
    id: 220,
    name: "黔西南布依族苗族自治州",
    value: 67,
    coord: [105.46, 25.27],
  },
  {
    id: 221,
    name: "黔东南苗族侗族自治州",
    value: 56,
    coord: [108.56, 26.51],
  },
  {
    id: 222,
    name: "黔南布依族苗族自治州",
    value: 23,
    coord: [107.25, 26.01],
  },
  {
    id: 223,
    name: "曲靖",
    value: 67,
    coord: [103.94, 25.7],
  },
  {
    id: 224,
    name: "丽江",
    value: 10,
    coord: [100.52, 26.94],
  },
  {
    id: 225,
    name: "普洱",
    value: 91,
    coord: [100.72, 23.19],
  },
  {
    id: 226,
    name: "大理白族自治州",
    value: 76,
    coord: [100.04, 25.73],
  },
  {
    id: 227,
    name: "铜川",
    value: 31,
    coord: [109.03, 35.2],
  },
  {
    id: 228,
    name: "延安",
    value: 83,
    coord: [109.32, 36.44],
  },
  {
    id: 229,
    name: "汉中",
    value: 49,
    coord: [107.1, 33.09],
  },
  {
    id: 230,
    name: "安康",
    value: 72,
    coord: [108.93, 32.76],
  },
  {
    id: 231,
    name: "商洛",
    value: 86,
    coord: [109.9, 33.65],
  },
  {
    id: 232,
    name: "武威",
    value: 93,
    coord: [103.06, 38.17],
  },
  {
    id: 233,
    name: "平凉",
    value: 44,
    coord: [106.65, 35.31],
  },
  {
    id: 234,
    name: "酒泉",
    value: 99,
    coord: [96.06, 40.26],
  },
  {
    id: 235,
    name: "庆阳",
    value: 74,
    coord: [107.59, 36.16],
  },
  {
    id: 236,
    name: "定西",
    value: 7,
    coord: [104.45, 35.12],
  },
  {
    id: 237,
    name: "石嘴山",
    value: 29,
    coord: [106.51, 39.01],
  },
  {
    id: 238,
    name: "固源",
    value: 78,
    coord: [110.43, 32.13],
  },
];

const series = reactive([
  {
    id: 0,
    name: "北京",
    value: 27,
    coord: [116.41, 40.19],
  },
  {
    id: 1,
    name: "上海",
    value: 72,
    coord: [121.47, 31.24],
  },
  {
    id: 2,
    name: "西安",
    value: 17,
    coord: [108.79, 34.11],
  },
  {
    id: 3,
    name: "深圳",
    value: 88,
    coord: [114.13, 22.65],
  },
  {
    id: 4,
    name: "广州",
    value: 47,
    coord: [113.54, 23.35],
  },
]);
const series1 = reactive(allData);
const items = ref(
  Array.from({ length: 1000 }, (_, index) => ({
    id: index,
    name: allData[index % allData.length].name,
    time: allData[index % allData.length].value,
  }))
);

const num = ref(88)
const mapStyles = ref(styleJson)
const mapContainer = ref()
const stickChartsBox = ref()
const stickChartsBox1 = ref()
const stickChartsBox2 = ref()
const lineChartBox = ref()
const pieChartsBox = ref()
const pieChartsBox1 = ref()
const funnelChartsBox = ref()
const guageChartsBox = ref()
const pictorialBarChartsBox = ref()
const randerChartsBox = ref()
const currentTime = ref(dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss"));
const initMap = ({ BMap, map }) => {
  map.setMapStyleV2({
    styleJson: styleJson
  })
}


let timeRange = 3;
const timer = setInterval(() => {
  currentTime.value = dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss");
  if (timeRange === 3) {
    timeRange = 0
    num.value = Math.ceil(Math.random() * 100);
    let index = Math.floor(Math.random() * (allData.length - 5))
    for (let i = 0; i < 5; i++) {
      series[i].name = allData[index + i].name;
      series[i].value = Math.ceil(Math.random() * 100);
      series[i].coord = allData[index + i].coord;
    }
    pieChartsBox.value.refreshCharts()
    pieChartsBox1.value.refreshCharts()
    lineChartBox.value.refreshCharts()
    stickChartsBox.value.refreshCharts()
    stickChartsBox1.value.refreshCharts()
    stickChartsBox2.value.refreshCharts()
    funnelChartsBox.value.refreshCharts()
    guageChartsBox.value.refreshCharts()
    pictorialBarChartsBox.value.refreshCharts()
    randerChartsBox.value.refreshCharts()
  } else {
    timeRange++;
  }

}, 1000);
onUnmounted(() => {
  clearTimeout(timer);
});

</script>
 
<style lang="less" scoped>
.page3 {
  width: 100%;
  height: 100%;
  background: url(./images/bg_page.png) no-repeat center;
  background-size: 100% 100%;
  .top {
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 0.14rem;
    color: #fff;
    .top-center {
      width: 60%;
      line-height: 0.8rem;
      font-size: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(
        to bottom,
        #00f,
        #238cf0,
        #aaffff
      ); /* 设置水平渐变，从红色到绿色 */
      -webkit-background-clip: text; /* 将背景应用到文本上 */
      color: transparent; /* 设置文本颜色为透明，以显示背景渐变 */
      font-weight: bold;
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.2rem;
        border-radius: 0.8rem;
        border: 0.1rem solid #238cf0;
      }
    }
    .top-tight {
      color: #1b92fd; 
    }
  }
  .mid {
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .mid-left {
      width: 20%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      .item-50{
        display: flex;
        align-items: center;
      }
      .chart-item{
        height: calc(33.33% - 0.135rem);
      }
    }
    .mid-right {
      width: 20%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
    }
    .map-content {
      width: 60%;
      height: 100%;

      background-size: 100%;
      border-radius: 2px;
      box-shadow: 1px 1px 5px #1b92fd80, -1px -1px 5px #1b92fd80;
      ::v-deep .map {
        width: 100%;
        height: 100%;
        background: transparent !important;
        & > div {
          background: transparent !important;
        }
      }
    }
    ::v-deep .BMap_cpyCtrl {
      display: none;
    }
    ::v-deep .BMap_scaleTxt {
      color: #0ff !important;
    }
  }
  .bottom {
    display: flex;
    height: 25%;
    .chart-item {
      margin: 0.2rem;
      width: calc(20% - 0.4rem);
      height: calc(100% - 0.4rem);
    }
    .bottom-center{
      width: 60%;
      display: flex;
      justify-content: space-between;
      .chart-item {
        width: calc(33.33% - 0.134rem);
        height: calc(100% - 0.4rem);
        margin: 0.2rem 0;
      }
    }
  }
}
.chart-item {
  width: calc(100% - 0.4rem);
  height: 30%;
  border-radius: 2px;
  box-shadow: 1px 1px 5px #1b92fd80, -1px -1px 5px #1b92fd80;
  .item-title {
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.16rem;
    color: #1b92fd; 
    font-weight: bold;
    text-align: center;
  }
  .item-content {
    display: flex;
    height: calc(100% - 0.5rem);
    font-size: 0.14rem;
    color: #fff;

    .level-icon {
      width: 50%;
      margin-left: 35%;
    }
  }
}
.scroll-num {
  position: relative;
  ::v-deep .countup-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.16rem;
  }
}
</style>