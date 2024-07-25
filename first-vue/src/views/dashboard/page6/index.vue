<template>
    <div class="page6">
        <div class="page-top"></div>
        <div class="page-content">
            <div class="left">
                <div class="data-item height-50">
                    <div class="item-title"><i class="left-line"></i><span>大气压强</span><i class="right-line"></i></div>
                    <div class="item-content-box">
                        <span class="current-status" :class="{'relative': pressureStatus === 'relative'}"></span>
                        <div class="data-title">
                            <span class="title-num"><CountUp :end-val="relativePressure" :duration="1"></CountUp></span>
                            <span class="title-name">相对压强</span>
                        </div>
                        <div class="item-process">
                            <span class="relative" v-for="item in 50" :key="item"  :class="{'active': pressureStatus === 'relative' && item <= relativePressure / 2}"></span>
                        </div>
                        <div class="item-unit">
                            <span class="title-name">HPA</span>
                        </div>
                    </div>
                    <div class="item-content-box">
                        <span class="current-status" :class="{'absolute': pressureStatus === 'absolute'}"></span>
                        <div class="data-title">
                            <span class="title-num"><CountUp :end-val="absolutePressure" :duration="1"></CountUp></span>
                            <span class="title-name">绝对压强</span>
                        </div>
                        <div class="item-process">
                            <span class="absolute" :class="{'active': pressureStatus === 'absolute' && item <= absolutePressure / 2}" v-for="item in 50" :key="item"></span>
                        </div>
                        <div class="item-unit">
                            <span class="title-name">HPA</span>
                        </div>
                    </div>
                    <div class="charts-box">
                        <div class="charts-box-item">
                            <div class="charts-item-title">温度</div>
                            <div class="chart-content">
                                <gauge ref="gaugeBox" :data="temperature"></gauge>
                                <div class="data-legend">
                                    <div class="data-legend-item" v-for="item in temperature" :key="item.color">
                                        <span :style="{'background': item.color}"></span>
                                        <CountUp :end-val="item.value" :duration="1"></CountUp>  ℃
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="charts-box-item">
                            <div class="charts-item-title">湿度</div>
                            <div class="chart-content">
                                <gauge ref="gaugeBox1" :data="humidity"></gauge>
                                <div class="data-legend">
                                    <div class="data-legend-item" v-for="item in humidity" :key="item.color">
                                        <span :style="{'background': item.color}"></span>
                                        <CountUp :end-val="item.value" :duration="1"></CountUp> %
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="data-item height-50">
                    <div class="item-title margin-top-20"><i class="left-line"></i><span>温度图</span><i class="right-line"></i></div>
                    <div  class="charts-box k-line-box">
                        <kLine  ref="kLineBox" :data="temperatureAllData" :dataConfig="temperatureConfig"></kLine>
                    </div>
                    <div class="item-title margin-top-20"><i class="left-line"></i><span>湿度图</span><i class="right-line"></i></div>
                    <div  class="charts-box k-line-box">
                        <kLine  ref="kLineBox1" :data="humidityAllData" :dataConfig="humidityConfig"></kLine>
                    </div>
                </div>
            </div>
            <div class="center">
                <div class="page-title">气象站</div>
                <div class="map-chart-box">
                    <mapCharts ref="mapChartsBox" :data="series"></mapCharts>
                </div>
                <div class="map-footer"></div>
            </div>
            <div class="right">
                <div class="statistics-detail-box">
                    <div class="detail-item">
                        <div><span class="site-item-title">测试站点</span><span class="site-name">LP-COUNTY </span></div>
                        <div><span class="site-item-title">测试日期</span> 2017-08-06</div>
                        <div><span class="site-item-title">站点 ID</span> 1921210001</div>
                        <div><span class="site-item-title">测试时间</span><span class="site-name">70 </span> 天</div>
                    </div>
                    <div class="detail-item">
                        <div><span class="site-item-title">室内最大温度</span><span class="temperature-data">70℃</span></div>
                        <div><span class="site-item-title">露点</span> 21℃</div>
                        <div><span class="site-item-title">风寒</span> 21℃</div>
                        <div><span class="site-item-title">热指数</span>21℃</div>
                    </div>
                </div>
                <div class="data-item height-40">
                    <div class="item-title margin-top-20"><i class="left-line"></i><span>风指数</span><i class="right-line"></i></div>
                    <div class="wind-box">
                        <div class="charts-box rander-box">
                            <rander ref="randerBox" :data="randerArr"></rander>
                        </div>
                        <div class="wind-speed-data">
                            <div class="params-item height-40">
                                <div class="params-item-title">风速</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前风速
                                        <span><i class="number-value">12.2</i> m/s</span>
                                    </div>
                                    <div class="params-content-item">
                                        当前风速
                                        <span><i class="number-value">12.8</i> m/s</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="wind-speed-animate"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="params-item height-40">
                                <div class="params-item-title">阵风</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前风速
                                        <span><i class="number-value">2.8</i> m/s</span>
                                    </div>
                                    <div class="params-content-item">
                                        当前风速
                                        <span><i class="number-value">4.3</i> m/s</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="wind-speed-animate"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="data-item height-46">
                    <div class="item-title"><i class="left-line"></i><span>降雨量</span><i class="right-line"></i></div>
                    <div class="wind-box rain-box">
                        <div class="wind-speed-data">
                            <div class="params-item height-45">
                                <div class="params-item-title">日数据</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前参数
                                        <span><i class="number-value">23</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        最高参数
                                        <span><i class="number-value">46</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="rain-data-chart">
                                            <liquidFill></liquidFill>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="params-item height-45">
                                <div class="params-item-title">周数据</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前参数
                                        <span><i class="number-value">23</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        最高参数
                                        <span><i class="number-value">46</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="rain-data-chart">
                                            <liquidFill></liquidFill>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wind-speed-data">
                            <div class="params-item height-45">
                                <div class="params-item-title">月数据</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前参数
                                        <span><i class="number-value">23</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        最高参数
                                        <span><i class="number-value">46</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="rain-data-chart">
                                            <liquidFill></liquidFill>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="params-item height-45">
                                <div class="params-item-title">年度数据</div>
                                <div class="params-content">
                                    <div class="params-content-item">
                                        当前参数
                                        <span><i class="number-value">23</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        最高参数
                                        <span><i class="number-value">46</i> mm</span>
                                    </div>
                                    <div class="params-content-item">
                                        <div class="rain-data-chart">
                                            <liquidFill></liquidFill>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import CountUp from "vue-countup-v3";
import gauge from "./components/gauge.vue";
import kLine from "./components/kLine.vue";
import rander from "./components/rander.vue";
import liquidFill from "./components/liquidFill.vue"
import mapCharts from "./components/mapCharts.vue";

import dayjs from "dayjs"
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
const gaugeBox = ref()
const gaugeBox1 = ref()
const kLineBox = ref()
const kLineBox1 = ref()

const list = ref([{value: 1200}, {value: 800}, {value: 990}, {value: 1800}])
const pressureStatus = ref('relative')
const relativePressure = ref(64)
const absolutePressure = ref(42)
const startDate = ref('2010-01-01')
const temperature = ref([{name: '室内', value: 66, color: "#B0CC35"}, {name: '室外', value: 88, color: "#FF0000"}])
const temperatureAllData = ref([])
const temperatureConfig = ref({name: "气温", unit: "℃", color: ["#B0CC35", "#FF0000"]})
const humidity = ref([{name: '室内', value: 33, color: "#B0CC35"}, {name: '室外', value: 55, color: "#FF0000"}])
const humidityAllData = ref([])
const humidityConfig = ref({name: "湿度", unit: "%", color: ["#B0CC35", "#FF0000"]})
const randerArr = ref([2.8, 5.3, 7.1, 5.4, 10.6, 8.5, 5.1, 2.1, 2.9, 4.0, 9.4, 6.3, 3.5, 0.9, 1, 0.9])
onMounted(() => {
    Array.from({length: 10}, (item => {
        startDate.value = dayjs(startDate.value).subtract(-1, 'day').format('YYYY-MM-DD');
        let startTemperature = Math.ceil(Math.random() * 50)
        let endTemperature = Math.ceil(Math.random() * 50)
        temperatureAllData.value.push([startDate.value, startTemperature, endTemperature, startTemperature, endTemperature])

        let startHumidity = Math.ceil(Math.random() * 70)
        let endHumidity = Math.ceil(Math.random() * 70)
        humidityAllData.value.push([startDate.value, startHumidity, endHumidity, startHumidity, endHumidity])
    }))
    kLineBox.value.refreshCharts()
    kLineBox1.value.refreshCharts()
})
const Timer = ref(0)
setInterval(()=> {
    relativePressure.value = Math.ceil(Math.random() * 100)
    absolutePressure.value = Math.ceil(Math.random() * 100)
    pressureStatus.value = (relativePressure.value + absolutePressure.value) % 2 === 0 ? 'relative' : 'absolute';
    temperature.value[0].value = Math.ceil(Math.random() * 100)
    temperature.value[1].value = Math.ceil(Math.random() * 100)
    humidity.value[0].value = Math.ceil(Math.random() * 100)
    humidity.value[1].value = Math.ceil(Math.random() * 100)
    gaugeBox.value.refreshCharts()
    gaugeBox1.value.refreshCharts()
    if (Timer.value % 5 === 0) {
        startDate.value = dayjs(startDate.value).subtract(-1, 'day').format('YYYY-MM-DD');

        let startTemperature = Math.ceil(Math.random() * 50)
        let endTemperature = Math.ceil(Math.random() * 50)
        let temperatureDay = [startDate.value, startTemperature, endTemperature, startTemperature, endTemperature]
        temperatureAllData.value.push(temperatureDay)
        kLineBox.value.refreshCharts()

        let startHumidity = Math.ceil(Math.random() * 70)
        let endHumidity = Math.ceil(Math.random() * 70)
        let humidityDay = [startDate.value, startHumidity, endHumidity, startHumidity, endHumidity]
        humidityAllData.value.push(humidityDay)
        kLineBox1.value.refreshCharts()
    }
    Timer.value++;
}, 3000)
</script>
<style lang="less" scoped>
@GreenColor: #B0CC35;
@RedColor: #ff0000;
@TextColor: #AEA7A3;
@LineColor: #6e655f88;
.page6{
    width: 100%;
    height: 100%;
    background: url(./images/bg.png) no-repeat center ;
    background-size: 100% 100%;
    color: #fff;
    font-size: 0.13rem;
    .page-content{
        height: 90vh;
        padding: 5vh 0;
        display: flex;
        .left, .right{
            width: 29vw;
            height: calc(100% - 2vh);
            margin-top: 1.5vh;
            margin-bottom: 0.5vh;
        }
        .left{
            margin-left: 3vw;
            margin-right: 1vw;
        }
        .right{
            margin-right: 2vw;
            margin-left: 1.3vw;
        }
        .center{
            width: 34%;
            height: 100%;
            .page-title{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: numfont;
                color: @GreenColor;
                height: 4vh;
                width: 100%;
                font-size: 0.2rem;
            }
            .map-chart-box{
                height: 85%;
            }
            .map-footer{
                width: 94%;
                height: 6vh;
                margin: 0 auto;
                background: url(./images/animate.png) no-repeat center;
                background-size:  100% auto; 
            }

        }
        .data-item{
            width: 100%;
            &.height-50{
                height: 50%;
            }
            &.height-40{
                height: 38%;
            }
            &.height-46{
                height: 44%;
            }
            .item-title{
                display: flex;
                align-items: center;
                height: 0.24rem;
                // background: url(./images/line.png) no-repeat center;
                font-size: 0.14rem;
                justify-content: center;
                background-size: 90% auto;
                color: #fff;
                font-weight: bold;
                &.margin-top-20{
                    margin-top: 0.2rem;
                }
                .left-line, .right-line{
                    position: relative;
                    width: 35%;
                    height: 1px;
                    background: @LineColor;
                }
                .left-line{
                    &::before,&::after{
                        content: '';
                        position: absolute;
                        top: 0;
                        width: 1px;
                        height: 1px;
                        background: #fff;
                        border-radius: 1px;
                    }
                    &::before{
                        left: 0;
                    }
                    &::after{
                        right: 0;
                    }
                }
                
                .right-line{
                    &::after, &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        width: 1px;
                        height: 1px;
                        background: #fff;
                        border-radius: 1px;
                    }
                    &::before{
                        left: 0;
                    }
                    &::after{
                        right: 0;
                    }
                }
                span {
                    display: flex;
                    width: calc(30% - 0.08rem);
                    justify-content: center;
                    align-items: center;
                    color: #ACA5A1;
                    font-weight: bold;
                    margin: 0 0.04rem;
                    border: 1px solid @LineColor;
                    font-size: 0.1rem;
                    padding: 0.02rem 0;
                    box-shadow: 1px 1px 5px #ffffff33,-1px -1px 5px #ffffff33;
                }
            }
            .item-content-box{
                height: calc(20% - 0.5vh - 0.12rem);
                display: flex;
                font-family: 'numfont';
                margin-bottom: 0.5vh;
                position: relative;
                .current-status{
                    position: absolute;
                    top: 20%;
                    left: 0;
                    height: 60%;
                    transition: all 0.25s;
                    width: 0.15rem;
                    &.relative{
                        background: url(./images/barfootActive.png) no-repeat center;
                    }
                    &.absolute{
                        background: url(./images/barfoot0.png) no-repeat center;
                    }
                }
                .data-title{
                    display: flex;
                    flex-flow: column;
                    font-size: 0.13rem;
                    width: 15%;
                    text-align: center;
                    height: 100%;
                    .title-num{
                        font-size: 0.3rem;
                        margin-bottom: 0.05rem;
                    }
                }
                .item-process{
                    width: 70%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span{
                        width: 2%;
                        height: 60%;
                        transition: all 0.5s;
                        &.relative{
                            background: url(./images/bartop1.png) no-repeat center;
                            &.active{
                                background: url(./images/barfootActive.png) no-repeat center;
                            }
                        }
                        &.absolute{
                            background: url(./images/barfoot1.png) no-repeat center;
                            &.active{
                                background: url(./images/barfoot0.png) no-repeat center;
                            }
                        }
                        
                    }
                }
                .item-unit{
                    font-size: 0.16rem;
                    width: 15%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            .wind-box{
                display: flex;
                height: calc(100% - 0.44rem); 
                .wind-speed-data{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                    justify-content: space-evenly;
                }
                &.rain-box{
                    height: calc(100% - 0.24rem); 
                    .params-item {
                        height: calc(50% - 0.2rem); 
                        margin-top: 0.2rem;
                    }
                }
            }
            .charts-box{
                height: 55%;
                display: flex;
                margin-top: 1vh;
                &.k-line-box{
                    height: calc(50% - 1vh - 0.4rem);
                }
                &.rander-box{
                    width: 50%;
                    height: 100%;
                    margin-top: 0;
                }
                .charts-box-item{
                    width: 50%;
                    height: 100%;
                    background: url(./images/leftline.png) no-repeat left;
                    background-size:  auto 100%;
                    .charts-item-title{
                        background: @GreenColor;
                        width: 60%;
                        height: 0.24rem;
                        line-height: 0.24rem;
                        color: #000;
                        font-size: 0.12rem;
                        font-weight: bold;
                        margin: 0 auto;
                        text-align: center;
                    }
                    .chart-content{
                        width: 80%;
                        margin: 0 auto;
                        height: calc(100% - 0.48rem);
                        .data-legend{
                            width: 100%;
                            display: flex;
                            font-size: 0.13rem;
                            justify-content: center;
                            height: 0.24rem;
                            align-content: center;
                            .data-legend-item {
                                display: flex;
                                margin-right: 0.15rem;
                                align-items: center;
                                &>span{
                                    width: 0.05rem;
                                    height: 0.15rem;
                                    margin-right: 0.05rem;
                                }
                                &:last-child{
                                    margin-right: 0;   
                                }
                            }
                        }
                    }
                }
            }
        }
        .statistics-detail-box{
            height: 16%;
            display: flex;
            .detail-item{
                width: calc(50% - 0.4rem);
                height: calc(100% - 0.2rem);
                padding: 0.1rem 0.2rem;
                position: relative;
                color: @TextColor;
                font-size: 0.12rem;
                display: flex;
                flex-flow: column;
                justify-content: space-evenly;
                background: url(./images/line1.png) no-repeat left;
                background-size: 90% 100%;
              
                .site-name {
                    font-size: 0.24rem;
                    color: @GreenColor;
                    font-family: 'numfont';
                    margin-right: 0.1rem;
                    text-align: right;
                }
                .temperature-data {
                    font-size: 0.24rem;
                    color: @RedColor;
                    font-family: 'numfont';
                    margin-right: 0.1rem;
                    text-align: right;
                }
                &>div{
                    display: flex;
                    align-items: center;
                    height: 22.5%;
                    .site-item-title{
                        width: 40%;
                    }
                }
            }
        }
        .params-item{
            width: 100%;
            height: 50%;
            position: relative;
            background: url(./images/line1.png) no-repeat left;
            background-size: 90% 100%;
            
            &.height-40{
                height: 40%;
            }
            &.height-45{
                height: 45%;
            }
            .params-item-title{
                background: @GreenColor;
                width: 35%;
                height: 0.2rem;
                line-height: 0.2rem;
                color: #000;
                font-size: 0.12rem;
                font-weight: bold;
                margin: 0 auto;
                text-align: center;
                transform: translateY(-50%);
            }
            .params-content{
                display: flex;
                height: calc(100% - 0.3rem);
                width: 94%;
                margin: 0 auto;
                justify-content: space-evenly;
                .params-content-item{
                    width: 33%;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                    color: @TextColor;
                    font-size: 0.1rem;
                    justify-content: center;
                    span{
                        margin-top: 0.1rem;
                    }
                    i.number-value{
                        color: @GreenColor;
                        font-size: 0.3rem;
                        font-family: 'numfont';
                    }
                    .wind-speed-animate{
                        width: 6vmin;
                        height: 6vmin;
                        border: 2px solid @GreenColor;
                        border-radius: 6vmin;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        &::after{
                            content: '';
                            width: 65%;
                            height: 65%;
                            background: url(./images/wind1.png) no-repeat center;
                            background-size: 100%;
                            animation: wind-rotate 0.5s linear infinite;
                        }
                    }
                    .rain-data-chart{
                        width: 6vmin;
                        height: 6vmin;
                        border: 2px solid @GreenColor;
                        border-radius: 6vmin;
                    }
                }
            }
        }
    }
}
@keyframes wind-rotate {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
}
</style>