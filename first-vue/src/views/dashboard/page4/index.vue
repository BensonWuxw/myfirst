<template>
<div class="page4">
  <div class="site-title">
    <span>数据可视化页面设计</span>
  </div>
  <div class="site-content">
    <div class="content-left">
      <div class="content-title">品牌销售TOP5</div>
      <div class="content-content">
        <div class="data-item-4" v-for="(item,index) in top5Brands" :key="item.id" :class="{active: brandsActive === index}">
          <div class="circle-img"></div>
          <div class="item-content">
            <span class="item-name">{{item.name}}</span>
            <CountUp :end-val="item.sales_volume" :duration="1"></CountUp>
            <div class="precent-num">
              <CountUp :end-val="item.sales_proportion" :duration="1"></CountUp> % 
              <i class="trend-icon" :class="{'up': item.status, 'down': !item.status}"></i>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="content-center">
      <div class="statistics-No">
        <div class="circle-item circle1">
          <div class="No">
            <CountUp :end-val="num" :duration="1"></CountUp>%
          </div>
          同比
        </div>
        <div class="circle-item circle2">
          <div class="No">
            <CountUp :end-val="num1" :duration="1"></CountUp>%
          </div>
          完成率
        </div>
        <div class="circle-item circle3">
          <div class="No">
            <CountUp :end-val="num" :duration="1"></CountUp>%
          </div>
          售罄率
        </div>
        <div class="circle-item circle4">
          <div class="No">
            <CountUp :end-val="num1" :duration="1"></CountUp>%
          </div>
           折扣率
        </div>
      </div>
      <div class="total-num">
        <div class="name-No">
          销售总额
          <CountUp :end-val="total" :duration="1"></CountUp>
        </div>
        <div class="lines line1">
          <div class="statistics-class">
            日销售
            <CountUp :end-val="total" :duration="1"></CountUp> 
          </div>
          <img src="./images/lines.svg">
        </div>
        <div class="lines line2">
          <div class="statistics-class">
            周销售
            <CountUp :end-val="total" :duration="1"></CountUp> 
          </div>
          <img src="./images/line1.svg">
        </div>
        <div class="lines line3">
          <img src="./images/line3.svg">
        </div>
        <div class="lines line4">
          <img src="./images/line4.svg">
        </div>
        <div class="lines line5">
          <div class="statistics-class">
            年销售
            <CountUp :end-val="total" :duration="1"></CountUp> 
          </div>
          <img src="./images/line5.svg">
        </div>
        <div class="lines line6">
          <div class="statistics-class">
            月销售
            <CountUp :end-val="total" :duration="1"></CountUp> 
          </div>
          <img src="./images/line6.svg">
        </div>
      </div>

      
    </div>
    <div class="content-right">
      <div class="content-title">会销情况分析</div>
      <div class="data-item" v-for="(item,index) in statisticsData" :key="item.id">
        <div class="item-icon" :class="item.icon_class"></div>
        <div class="item-content">
          <div class="item-name">{{item.name}}</div>
          <div class="item-en-name">{{item.name_en}}</div>
          <div class="item-num" :class="item.color">
            <span class="unit">￥</span>
            <span class="yellow-num" v-if="index === 0">{{item.num}}</span>
            <CountUp v-else :end-val="item.num" :duration="1"></CountUp>
          </div>
        </div>
      </div>
      <div class="chart-content">
        <div class="title">完成情况</div>
        <div class="charts-item first-item">
          <div class="item-title">会销完成率</div>
          <div class="charts-box">
            <liquidFillCharts ref="liquidFillChartsBox" :data="num"></liquidFillCharts>
          </div>
          <div class="decoration"><div></div></div>
        </div>
        <div class="charts-item last-item">
          <div class="item-title">会销占比</div>
          <div class="charts-box">
            <liquidFillCharts ref="liquidFillChartsBox1" :data="num1"></liquidFillCharts>
          </div>
          <div class="decoration"><div></div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="site-bottom">
    <div class="site-bottom-left">
      <div class="content-title">大类销售分析</div>
      <div class="charts-content">
        <div class="chart-item" v-for="(item, index) in salesAnalysis" :key="`${item.id}_${index}`">
          <div class="class-icon"><img :src="item.icon" /></div>
          <div class="info">
            <div>{{item.name}}</div>
            <div class="sale-num">{{item.num}}</div>
          </div>
          <div class="procent">
            <stickCharts :data="item.percent"></stickCharts>
          </div>
        </div>
      </div>
    </div>
    <div class="site-bottom-center">
      <div class="circle-bg circle1"></div>
      <div class="circle-bg circle2"></div>
      <div class="circle-bg circle3"></div>
      <div class="circle-bg circle4"></div>
      <div class="circle-bg circle5"></div>
      
    </div>
    <div class="site-bottom-right">
      <div class="charts-box">
        <lineChart></lineChart>
      </div>
    </div>
    <div class="bottom-title">
      <div class="site-bottom-title">
        数据状况
      </div>
    </div>
  </div>
</div>
</template>
 
<script setup lang="ts">
import { onMounted, ref, onUnmounted, reactive } from 'vue';
import dayjs from "dayjs";
import CountUp from "vue-countup-v3";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import liquidFillCharts from "./components/liquidFill.vue"
import stickCharts from "./components/stick.vue"
import lineChart from "./components/lineChart.vue"

import shoe from './images/shoe.png';
import clothes from './images/clothes.png';
import mz from './images/mz.png';


const num = ref(88)
const num1 = ref(66)
const total = ref(89778997)
const mapContainer = ref()
const liquidFillChartsBox = ref()
const liquidFillChartsBox1 = ref()

const currentTime = ref(dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss"));

const top5Brands = reactive([
  {id: 'brand1', name:"XXX品牌1", sales_volume: 8888, sales_proportion: 80, status: true},
  {id: 'brand2', name:"XXX品牌2", sales_volume: 8666, sales_proportion: 70, status: false},
  {id: 'brand3', name:"XXX品牌3", sales_volume: 8333, sales_proportion: 60, status: true},
  {id: 'brand4', name:"XXX品牌4", sales_volume: 6666, sales_proportion: 50, status: false},
  {id: 'brand5', name:"XXX品牌5", sales_volume: 5555, sales_proportion: 40, status: true},
])

const statisticsData = reactive([
  {id: 'item1', name:"会销目标", name_en: "MARKETINT TARGET", num: 8888888, icon_class: 'icon-1', color: 'color1'},
  {id: 'item2', name:"会销实际", name_en: "MARKETINT ACTUAL", num: 9999999, icon_class: 'icon-2', color: 'color2'},
  {id: 'item3', name:"会员总数", name_en: "TOTAL MEMBERSHIP", num: 666666, icon_class: 'icon-3', color: 'color3'},
])

const salesAnalysis = reactive([
  {id: 'item1', name:"鞋类", num: 34562, icon: shoe, percent: 20},
  {id: 'item2', name:"服装", num: 66556, icon: clothes, percent: 23},
  {id: 'item3', name:"饰品", num: 35775, icon: mz, percent: 12},
])

const brandsActive = ref(0)
let timeRange = 3;
const timer = setInterval(() => {
  currentTime.value = dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss");
  if (timeRange === 3) {
    brandsActive.value++
    brandsActive.value = brandsActive.value === 5 ? 0 : brandsActive.value
    timeRange = 0
    num.value = Math.ceil(Math.random() * 100);
    num1.value = Math.ceil(Math.random() * 100);
    total.value += Math.ceil(Math.random() * 1000);
    top5Brands[0].sales_volume += Math.ceil(Math.random() * 10)
    top5Brands[1].sales_volume += Math.ceil(Math.random() * 10)
    top5Brands[2].sales_volume += Math.ceil(Math.random() * 10)
    top5Brands[3].sales_volume += Math.ceil(Math.random() * 10)
    top5Brands[4].sales_volume += Math.ceil(Math.random() * 10)
    top5Brands[0].sales_proportion = Math.ceil(Math.random() * 100)
    top5Brands[1].sales_proportion = Math.ceil(Math.random() * 100)
    top5Brands[2].sales_proportion = Math.ceil(Math.random() * 100)
    top5Brands[3].sales_proportion = Math.ceil(Math.random() * 100)
    top5Brands[4].sales_proportion = Math.ceil(Math.random() * 100)
    top5Brands[0].status = top5Brands[0].sales_proportion > Math.ceil(Math.random() * 100)
    top5Brands[1].status = top5Brands[1].sales_proportion > Math.ceil(Math.random() * 100)
    top5Brands[2].status = top5Brands[2].sales_proportion > Math.ceil(Math.random() * 100)
    top5Brands[3].status = top5Brands[3].sales_proportion > Math.ceil(Math.random() * 100)
    top5Brands[4].status = top5Brands[4].sales_proportion > Math.ceil(Math.random() * 100)
    statisticsData[1].num += Math.ceil(Math.random() * 1000)
    statisticsData[2].num += Math.ceil(Math.random() * 10)
    salesAnalysis[1].num += Math.ceil(Math.random() * 1000)
    salesAnalysis[2].num += Math.ceil(Math.random() * 1000)
    salesAnalysis[0].num += Math.ceil(Math.random() * 1000)
    salesAnalysis[1].percent += Math.floor(Math.random() * 2)
    salesAnalysis[2].percent += Math.floor(Math.random() * 2)
    salesAnalysis[0].percent += Math.floor(Math.random() * 2)
    liquidFillChartsBox.value.refreshCharts()
    liquidFillChartsBox1.value.refreshCharts()
    // pieChartsBox1.value.refreshCharts()
    // lineChartBox.value.refreshCharts()

    // funnelChartsBox.value.refreshCharts()
    // guageChartsBox.value.refreshCharts()
    // pictorialBarChartsBox.value.refreshCharts()
    // randerChartsBox.value.refreshCharts()
  } else {
    timeRange++;
  }
  
  
}, 1000);
onUnmounted(() => {
  clearTimeout(timer);
});

</script>
 
<style lang="less" scoped>
.page4{
  width: 100%;
  height: 100%;
  background: url(./images/site_bg.png) no-repeat ;
  background-size: 100% 100%;
  font-size: 0.14rem;
  color: #fff;
  .site-title{
    height: 10%;
    background: url(./images/site_title_bg.png) no-repeat ;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      background-image: linear-gradient( to top,  #86919e, #fff ); /* 设置水平渐变，从红色到绿色 */
      -webkit-background-clip: text; /* 将背景应用到文本上 */
      color: transparent; /* 设置文本颜色为透明，以显示背景渐变 */
      font-weight: bold;
      font-size: 0.36rem;
    }
  }
  .site-content{
    height: 60%;
    display: flex;
    .content-left{
      width: 20%;
      margin: 0 2.5% 0 2.5%;
      .content-content{
        height: calc(100% - 0.6rem);
        justify-content: space-between;
        display: flex;
        flex-flow: column;
        padding-top: 0.1rem;
        .data-item-4{
          height: 0.7rem;
          display: flex;
          align-items: flex-end;
          .circle-img{
            width: 0.45rem;
            height: 0.45rem;
            background: url(./images/green.png) no-repeat center;
            background-size: 100% 100%;
            position: relative;
            right: -0.15rem;
          }
          .item-content{
            width: calc(70% - 0.5rem);
            height: 0.5rem;
            line-height: 0.5rem;
            display: flex;
            justify-content: space-around;
            padding: 0.15rem 10%;
            background: url(./images/data-item-bg.png) no-repeat center;
            background-size: 100% 100%;
            ::v-deep .countup-wrap{
              min-width: 0.5rem;
              text-align: center;
            }
            .item-name{
              max-width: 1rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .precent-num{
              display: flex;
              align-items: center;
              ::v-deep .countup-wrap{
                min-width: 0.2rem;
                text-align: right;
              }
              .trend-icon{
                width: 0.2rem;
                height: 0.2rem;
                &.up{
                  background: url(./images/up.png) no-repeat center;
                  background-size: auto 80%;
                }
                &.down{
                  background: url(./images/down.png) no-repeat center;
                  background-size: auto 80%;
                }
              }
            }
          }
          &.active{
            .circle-img{
              background: url(./images/orange.png) no-repeat center;
              background-size: 100% 100%;
            }
            .item-content{
              background: url(./images/data-item-orange-bg.png) no-repeat center;
              background-size: 100% 100%;
            }
          }
          
          
        }
      }
    }
    .content-center{
      width: 50%;
      position: relative;
      .total-num{
        width: 4rem;
        height: 4rem;
        background: url(./images/earth.png) no-repeat center, url(./images/cloud.png) no-repeat center, radial-gradient(transparent 5%,#000000 25%, #000000aa 45%, transparent 60%);
        background-size: 100% 100%, 55% 55%;
        position: absolute;
        left: calc(50% - 2rem);
        bottom: -0.35rem;
        z-index: 88;
        border-radius: 100%;
        .name-No{
          height: 1rem;
          width: 50%;
          margin: 1.1rem auto;
          color: #005a79;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          font-size: 0.24rem;
          
          ::v-deep .countup-wrap{
            color: #003c63;
            font-size: 0.36rem;
            font-family: 'LCdd';
            text-align: center;
            width: 80%;
            margin-top: 0.1rem;
          }
        }
        .lines{
          position: absolute;
          width: 3rem;
          height: 3rem;
          z-index: 66;
          img{
            width: 100%;
            height: 100%;
          }
          &::before{
            content: '';
            width: 0.14rem;
            height: 0.14rem;
            position: absolute;
            border-radius: 0.14rem;
            background: #fff;
            box-shadow: 0.07rem 0.07rem 20px #0ff, -0.07rem -0.07rem 20px #0ff, 0.07rem 0.07rem 5px inset #0ff, -0.07rem -0.07rem 5px inset #0ff;
          }
          .statistics-class{
            position: absolute;
            color: #4eebc8;
            text-align: center;
            width: 80%;
            ::v-deep .countup-wrap{
              color: #f29701;
              font-size: 0.24rem;
              font-family: 'LCdd';
              text-align: center;
              width: 100%;
            }
          }
        }
        .line1{
          bottom: 0.75rem;
          left: 75%;
          &::before{
            top: calc(6% - 0.07rem);
            right: calc(24% - 0.07rem);
          }
          .statistics-class{
            top: calc(6% - 0.07rem);
            right: calc(24% - 0.07rem);
            transform: translate(50%, -105%);
          }
        }
        .line2{
          width: 3.5rem;
          height: 3.5rem;
          bottom: 1.25rem;
          left: 65%;
          &::before{
            top: calc(6% - 0.07rem);
            left: calc(40% - 0.07rem);
          }
          .statistics-class{
            top: calc(6% - 0.07rem);
            left: calc(40% - 0.07rem);
            transform: translate(-50%, -105%);
          }
        }
        .line3{
          width: 1.5rem;
          height: 1.5rem;
          bottom: 2rem;
          left: 85%;
          &::before{
            top: calc(6% - 0.07rem);
            left: calc(6% - 0.07rem);
            box-shadow: 0.07rem 0.07rem 20px #f29701, -0.07rem -0.07rem 20px #f29701, 0.07rem 0.07rem 5px inset #f29701, -0.07rem -0.07rem 5px inset #f29701;
          }
        }
        .line4{
          width: 1.5rem;
          height: 1.5rem;
          bottom: 2rem;
          left: -5%;
          &::before{
            top: calc(6% - 0.07rem);
            left: calc(20% - 0.07rem);
          }
        }
        .line5{
          width: 3.5rem;
          height: 3.5rem;
          bottom: 0.75rem;
          left: -42%;
          &::before{
            top: calc(6% - 0.07rem);
            left: calc(20% - 0.07rem);
          }
          .statistics-class{
            top: calc(6% - 0.07rem);
            left: calc(20% - 0.07rem);
            transform: translate(-50%, -105%);
          }
        }
        .line6{
          width: 2rem;
          height: 2rem;
          bottom: 2.5rem;
          left: 10%;
          &::before{
            top: calc(20% - 0.07rem);
            left: calc(50% - 0.07rem);
          }
          .statistics-class{
            top: calc(20% - 0.07rem);
            left: calc(50% - 0.07rem);
            transform: translate(-50%, -105%);
          }
        }
      }
      .statistics-No{
        width: 6rem;
        height: 4rem;
        position: relative;
        bottom: -10%;
        margin: 0 auto;
        z-index: 100;

        .circle-item{
          position: absolute;
          width: 1.2rem;
          height: 1.2rem;
          top: 60%;
          left: 40%;
          text-align: center;
          display: flex;
          flex-flow: column;
          justify-content: center;
          border-radius: 1.2rem;
          .No{
            display: flex;
            justify-content: center;
            font-size: 0.3rem;
          }
        }
        .circle1 {
          background: url(./images/circle1.png) no-repeat;
          background-size: 100%;
          animation: rotate5 20s linear infinite;
          color: #f29701;

        }

        .circle2 {
          background: url(./images/circle2.png) no-repeat;
          background-size: 100%;
          animation: rotate6 20s linear infinite;
          color: #0ac1c7;
 
        }

        .circle3 {
          background: url(./images/circle1.png) no-repeat;
          background-size: 100%;
          animation: rotate7 20s linear infinite;
          color: #f29701;

        }

        .circle4 {
          background: url(./images/circle2.png) no-repeat;
          background-size: 100%;
          color: #0ac1c7;
          animation: rotate8 20s linear infinite;
        }
      }
      
    }
    .content-right{
      width: 20%;
      margin: 0 2.5% 0 2.5%;
      .data-item{
        display: flex;
        height: 0.8rem;
        font-size: 0.16rem;
        margin-bottom: 0.2rem;
        .item-icon{
          width: 20%;
          height: 100%;
        }
        .icon-1{
          background: url(./images/s1.png) no-repeat center left;
          background-size: 72%;
        }
        .icon-2{
          background: url(./images/s2.png) no-repeat center left;
          background-size: 72%;
        }
        .icon-3{
          background: url(./images/s3.png) no-repeat center left;
          background-size: 72%;
        }
        .item-en-name{
          font-size: 0.1rem;
        }
        .item-num{
          font-size: 0.36rem;
          display: flex;
          align-items: center;
          .unit{
            font-size: 0.24rem;
          }
        }
        .color1{
          color: #f29701;
        }
        .color2{
          color: #09c4ca;
        }
        .color3{
          color: #4eebc8;
        }
      }
      .chart-content{
        height: calc(100% - 3.5rem);
        display: flex;
        .title{
          position: relative;;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10%;
          height: 50%;
          vertical-align: middle;
          writing-mode: vertical-rl;
          white-space: nowrap;
          background: url(./images/execution.png) no-repeat center;
          background-size: 100% 100%;
          &::before{
            content: '';
            width: 2px;
            background: #12888c;
            position: absolute;
            bottom: -80%;
            height: 80%;
            left: 20%;
          }
          &::after{
            content: '';
            width: 2px;
            background: #12888c;
            position: absolute;
            bottom: -100%;
            height: 100%;
            right: 20%;
          }
        }
        .charts-item{
          width: 45%;
          position: relative;
          height: 100%;
        }
        .first-item{
          &::before{
            content: '';
            width: 67%;
            background: #12888c;
            position: absolute;
            bottom: 10%;
            height: 2px;
            left: -17%;
          }
          &::after{
            content: '';
            width: 2px;
            background: #12888c;
            position: absolute;
            bottom: 10%;
            height: 10%;
            right: 50%;
          }
        }
        .last-item{
          &::before{
            content: '';
            width: 155%;
            background: #12888c;
            position: absolute;
            bottom: 0;
            height: 2px;
            left: -105%;
          }
          &::after{
            content: '';
            width: 2px;
            background: #12888c;
            position: absolute;
            bottom: 0;
            height: 20%;
            right: 50%;
          }
        }
        .item-title{
          text-align: center;
          height: 0.3rem;
          line-height: 0.3rem;
        }
        .charts-box{
          height: calc(80% - 0.4rem);
          position: relative;
          margin-bottom: -0.2rem;
          z-index: 99;
        }
        .decoration{
          width: 1rem;
          height: 0.3rem;
          position: relative;
          left: calc(50% - 0.5rem);
          div{
            position: absolute;
            height: 1rem;
            width: 100%;
            bottom: -125%;
            transform: rotateX(60deg);
            background: url(./images/charts-bottom-bg.png) no-repeat center;
            background-size: 100% 100%;
            animation: rotateCircle 2s linear infinite;
          }
        }
      }
    }
  }
  .site-bottom{
    height: 30%;
    display: flex;
    position: relative;
    .bottom-title{
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        height: 1.13rem;
        background: url(./images/site-bottom-bg.png) no-repeat center bottom;
        background-size: 100% 100%;
        .site-bottom-title{
          width: 30%;
          height: 0.75rem;
          line-height: 0.75rem;
          margin: 0 auto;
          background-image: linear-gradient(to top,  #86919e, #fff ); /* 设置水平渐变，从红色到绿色 */
          -webkit-background-clip: text; /* 将背景应用到文本上 */
          color: transparent; /* 设置文本颜色为透明，以显示背景渐变 */
          font-weight: bold;
          font-size: 0.24rem;
          text-align: center;
        }
      }
    .site-bottom-left{
      width: 20%;
      margin: 0.3rem 2.5% 0; 
      height: calc(100% - 0.3rem);
      .charts-content{
        height: calc(100% - 0.6rem);
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        .chart-item{
          height: 31%;
          display: flex;
          align-items: center;
          .class-icon{
              width: 15%;
              display: flex;
              justify-content: center;
              align-items: center;
              img{
                width: 50%;
              }
            }
          .info{
            width: 15%;
            display: flex;
            flex-flow: column;
            font-size: 0.12rem;
            .sale-num{
              color: #09c4ca;
            }
          }
          .procent{
            width: 100%;
            height: 100%;
            margin-right: -30%;
          }
        }
      }
    }
    .site-bottom-center{
      width: 50%;
      position: relative;
      height: 100%;
     
      .circle-bg{
        position: absolute;
        transform: rotateX(75deg);
        z-index: 5;
        border-radius: 100%;
      }
      .circle1{
        height: 6rem;
        width: 6rem;
        bottom: 0;
        left: calc(50% - 3rem);
        background: url(./images/circle.png) no-repeat center;
        background-size: 100% 100%;
        animation: rotateCircle1 8s linear infinite;
      }
      .circle2 {
        height: 3rem;
        width: 3rem;
        bottom: 1.2rem;
        left: calc(50% - 1.5rem);
        background: url(./images/circle-bg-2.png) no-repeat center;
        background-size: 100% 100%;
        animation: rotateCircle1 2s linear infinite;
      }
      .circle3 {
        height: 3rem;
        width: 3rem;
        bottom: 0.9rem;
        left: calc(50% - 1.5rem);
        background: url(./images/circle-bg-3.png) no-repeat center;
        background-size: 100% 100%;
        animation: rotateCircle1 2s linear infinite;
      }
      .circle4 {
        height: 3rem;
        width: 3rem;
        bottom: 0.6rem;
        left: calc(50% - 1.5rem);
        background: url(./images/circle-bg-4.png) no-repeat center;
        background-size: 100% 100%;
        animation: rotateCircle1 2s linear infinite;
      }
      .circle5 {
        height: 3rem;
        width: 3rem;
        bottom: 0.3rem;
        left: calc(50% - 1.5rem);
        background: url(./images/circle-bg-5.png) no-repeat center;
        background-size: 100% 100%;
        animation: rotateCircle1 2s linear infinite;
      }
    }
    .site-bottom-right{
      width: 25%;
      height: 100%;
      .charts-box{
        width: 120%;
        height: 90%;
        margin: 5% 0 5% -25%;
      }
    }
  }
}
.content-title{
  height: 0.5rem;
  line-height: 0.5rem;
  background: url(./images/content-title-bg.png) no-repeat center;
  background-size: 100% 50%;
  text-align: center;
  color: #fff;
  font-size: 0.2rem;
}
@keyframes rotateCircle1 {
  0% {
    transform: rotateX(75deg) rotateZ(0deg);
  }
  100%{
    transform: rotateX(75deg) rotateZ(360deg);
  }
}
@keyframes rotateCircle {
  0% {
    transform: rotateX(60deg) rotateZ(0deg);
  }
  100%{
    transform: rotateX(60deg) rotateZ(360deg);
  }
}


.arc-box {
  position: relative;
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
}
 
.arc-box::before,
.arc-box::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-top: 20px solid #333;
  border-radius: 50%;
}
 
.arc-box::before {
  left: -50%;
  border-right: 20px solid transparent;
}
 
.arc-box::after {
  left: 50%;
  border-left: 20px solid transparent;
}
</style>