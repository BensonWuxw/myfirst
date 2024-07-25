<template>
<div class="page5">
    <div class="site-top">
        <div class="site-top-left">
            <div class="decoration-item item1"></div>
            <div class="decoration-item item2"></div>
            <div class="decoration-item item3"></div>
            <div class="decoration-item item4"></div>
        </div>
        <div class="site-title">数据可视化显示系统</div>
        <div class="site-top-right">
            <div class="decoration-item item1"></div>
            <div class="decoration-item item2"></div>
            <div class="decoration-item item3"></div>
            <div class="decoration-item item4"></div>
        </div>
    </div>
    <div class="site-content">
        <div class="site-content-left">
            <div class="site-content-left-top">
                <div class="data-item">
                    <div class="num">
                      <span>完成率</span>
                      <div style="display: flex"><CountUp :end-val="num" :duration="1"></CountUp>%</div>
                    </div>
                </div>
            </div>
            <div class="site-content-left-center">
                <div class="decoration-el-item">
                    <div class="lightning-box">
                        <lightning></lightning>
                    </div>
                    <ul class="circle-list">
                        <li v-for="item in 8" :key="item"></li>
                    </ul>
                </div>
                <div class="decoration-el-item">
                    <div class="lightning-box">
                        <lightning></lightning>
                    </div>
                    <ul class="circle-list">
                        <li v-for="item in 8" :key="item"></li>
                    </ul>
                </div>
            </div>
            <div class="site-content-left-bottom">
                <div class="sort-item" v-for="(item, index) in sortList1To3" :key="item.storeId">
                    <div class="sort-item-content" >
                        <span class="sort-No">NO.{{index + 1}}</span>
                        <span  class="displayFlex"><CountUp :end-val="num" :duration="1"></CountUp>%</span>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-content-center">
            <div class="an-box">
                <div class="pink-roll">
                    <div class="scroll-box">
                        <ul>
                            <li v-for="item in 20" :key="item" :style="{'opacity':  item % 10 !== 0 ? item % 10 * 0.1 : 1}"></li>
                        </ul>
                    </div>
                </div>
                <div class="box-middle">
                    <div class="arrow-border">
                        <div class="arrow-left">
                            <div class="circle circle1"></div>
                            <div class="circle circle2"></div>
                        </div>
                        <div class="sale-num-box">
                            <div class="box-bg">
                                <div class="num-box">
                                    销售额
                                    <CountUp :end-val="saleTotal" :duration="1"></CountUp>
                                </div>
                            </div>
                        </div>
                        <div class="arrow-right">
                            <div class="circle circle1"></div>
                            <div class="circle circle2"></div>
                        </div>
                    </div>
                </div>
                <div class="pink-roll">
                    <div class="scroll-box">
                        <ul>
                            <li v-for="item in 20" :key="item" :style="{'opacity':  item % 10 !== 0 ? item % 10 * 0.1 : 1}"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-content-right">
            <div class="site-content-right-top">
                <div class="data-item">
                    <div class="num">
                      <span>同比</span>
                      <div class="displayFlex"><CountUp :end-val="num" :duration="1"></CountUp>%</div>
                    </div>
                </div>
            </div>
             <div class="site-content-right-center">
                <div class="decoration-el-item">
                    <div class="lightning-box">
                        <lightning></lightning>
                    </div>
                    <ul class="circle-list">
                        <li v-for="item in 8" :key="item"></li>
                    </ul>
                </div>
                <div class="decoration-el-item">
                    <div class="lightning-box">
                        <lightning></lightning>
                    </div>
                    <ul class="circle-list">
                        <li v-for="item in 8" :key="item"></li>
                    </ul>
                </div>
            </div>
            <div class="site-content-right-bottom">
                <div class="sort-item" v-for="(item, index) in sortList4To6" :key="item.storeId">
                    <div class="sort-item-content" >
                        <span class="sort-No">NO.{{index + 4}}</span>
                        <span  class="displayFlex"><CountUp :end-val="num" :duration="1"></CountUp>%</span>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="site-bottom">
        <div class="site-bottom-content">
            <div v-for="item in classSaleDetails" :key="item.classId" class="site-bottom-item">
            <div class="bottom-item-content">
                <div class="bottom-item-content-left">
                    <div class="content-item-title">完成率</div>
                    <div class="content-data-item bottom-10">
                        <div class="item-icon completion-icon"></div>
                        {{item.completion_rate}}%
                    </div>
                    <div class="content-item-title">售罄率</div>
                    <div class="content-data-item">
                        <div class="item-icon selling-out-icon"></div>
                        {{item.selling_out_rate}}%
                    </div>
                </div>
                <div class="bottom-item-content-mid">
                    {{item.name}}
                    <CountUp :end-val="item.sale_num" :duration="1"></CountUp>
                </div>
                <div class="bottom-item-content-right">
                    <div class="content-item-title">折扣率</div>
                    <div class="content-data-item bottom-10">
                        <div class="item-icon discount-rate-icon"></div>
                        {{item.discount_rate}}%
                    </div>
                    <div class="content-item-title">同比</div>
                    <div class="content-data-item">
                        <div class="item-icon YoY-icon"></div>
                        {{item.YoY}}%
                    </div>
                </div>
            </div>
        </div>
         <div v-for="item in classSaleDetails" :key="item.classId" class="site-bottom-item">
            <div class="bottom-item-content">
                <div class="bottom-item-content-left">
                    <div class="content-item-title">完成率</div>
                    <div class="content-data-item bottom-10">
                        <div class="item-icon completion-icon"></div>
                        {{item.completion_rate}}%
                    </div>
                    <div class="content-item-title">售罄率</div>
                    <div class="content-data-item">
                        <div class="item-icon selling-out-icon"></div>
                        {{item.selling_out_rate}}%
                    </div>
                </div>
                <div class="bottom-item-content-mid">
                    {{item.name}}
                    <CountUp :end-val="item.sale_num" :duration="1"></CountUp>
                </div>
                <div class="bottom-item-content-right">
                    <div class="content-item-title">折扣率</div>
                    <div class="content-data-item bottom-10">
                        <div class="item-icon discount-rate-icon"></div>
                        {{item.discount_rate}}%
                    </div>
                    <div class="content-item-title">同比</div>
                    <div class="content-data-item">
                        <div class="item-icon YoY-icon"></div>
                        {{item.YoY}}%
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
</div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, reactive } from "vue"
import lightning from "./lightning.vue"
import CountUp from "vue-countup-v3";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const getPercent = () => Math.ceil(Math.random() * 100)

const sortList1To3 = reactive([
    {storeId: '1', name: "门店1", percentNum: 80, color: ''},
    {storeId: '2', name: "门店2", percentNum: 80, color: ''},
    {storeId: '3', name: "门店3", percentNum: 80, color: ''},
    
])
const sortList4To6 = reactive([
    {storeId: '4', name: "门店4", percentNum: 80, color: ''},
    {storeId: '5', name: "门店5", percentNum: 80, color: ''},
    {storeId: '6', name: "门店6", percentNum: 80, color: ''},
])
const num = ref(88)
const saleTotal = ref(8888888)
const classSaleDetails = reactive([
    {classId: '1', name: "配销售", sale_num: saleTotal.value, completion_rate: getPercent(), selling_out_rate: getPercent(), discount_rate: getPercent(),YoY: getPercent()},
    {classId: '2', name: "鞋销售", sale_num: saleTotal.value, completion_rate: getPercent(), selling_out_rate: getPercent(), discount_rate: getPercent(),YoY: getPercent()},
    {classId: '3', name: "服销售", sale_num: saleTotal.value, completion_rate: getPercent(), selling_out_rate: getPercent(), discount_rate: getPercent(),YoY: getPercent()},
])

let timeRange = 3;
const timer = setInterval(() => {
  if (timeRange === 3) {
    num.value = Math.ceil(Math.random() * 100);
    saleTotal.value += Math.ceil(Math.random() * 100);
    timeRange = 0
  } else {
    timeRange++;
  }
  
  
}, 1000);
onUnmounted(() => {
  clearTimeout(timer);
});
</script>
<style lang="less" scoped>
.displayFlex{
    display: flex;
}
.page5{
    width: 100%;
    height: 100%;
    background: url(./images/background.png) no-repeat center;
    background-size: 100% 100%;
    .site-top{
        height: 10%;
        display: flex;
        justify-content: center;
        .site-top-left, .site-top-right{
            width: 20%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .decoration-item{
            width: 20%;
            height: 0.2rem;
            background: #02b687;
            border-radius: 0.2rem;
            transition: all 0.5s;
            opacity: 0;
        }
        .site-top-left{
            .decoration-item{
                &:nth-child(1) {
                    animation: opacity1 0.5s linear forwards;
                }
                &:nth-child(2) {
                    animation: opacity2 0.5s linear forwards 0.2s;
                }
                &:nth-child(3) {
                    animation: opacity3 0.5s linear forwards 0.4s;
                }
                &:nth-child(4) {
                    animation: opacity4 0.5s linear forwards 0.6s;
                }
            }
        }
        .site-title{
            width: 38%; 
            opacity: 0;
            font-size: 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient( to top,  #02b687, #999 ); /* 设置水平渐变，从红色到绿色 */
            -webkit-background-clip: text; /* 将背景应用到文本上 */
            color: transparent; /* 设置文本颜色为透明，以显示背景渐变 */
            font-weight: bold;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            animation: titleShow 0.5s linear forwards 0.6s;
        }
        .site-top-right{
            .decoration-item{
                &:nth-child(1) {
                    animation: opacity4 0.5s linear forwards 0.6s;
                }
                &:nth-child(2) {
                    animation: opacity3 0.5s linear forwards 0.4s;
                }
                &:nth-child(3) {
                    animation: opacity2 0.5s linear forwards 0.2s;
                }
                &:nth-child(4) {
                    animation: opacity1 0.5s linear forwards ;
                }
            }
        }
       
    }
    .site-content{
        display: flex;
        height: 60%;
        .site-content-left{
            width: 25%;
            height: 100%;
            .site-content-left-top{
                width: 100%;
                height: 34%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .site-content-left-center{
                height: 33%;
                display: flex;
                flex-flow: column;
                justify-content: center;
            }
            .site-content-left-bottom{
                height: 33%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                .sort-item{
                    &:nth-child(1){
                        animation: sortShow1 0.5s linear forwards 6.8s;
                        .sort-No{
                            color: #ff7a9a
                        }
                        .sort-item-content{
                            border: 2px solid #ff7a9a;
                        }
                        &::after{
                            background: linear-gradient(#ff7a9a, #00000000);;
                        }
                    }
                    &:nth-child(2){
                        animation: sortShow2 0.5s linear forwards 6.9s;
                        .sort-No{
                            color: #03c794
                        }
                        .sort-item-content{
                            border: 2px solid #03c794;
                        }
                        &::after{
                            background: linear-gradient(#03c794, #00000000);;
                        }
                    }
                    &:nth-child(3){
                        animation: sortShow3 0.5s linear forwards 7s;
                        .sort-No{
                            color: #00e4c8
                        }
                        .sort-item-content{
                            border: 2px solid #00e4c8;
                        }
                        &::after{
                            background: linear-gradient(#00e4c8, #00000000);;
                        }
                    }
                }
            }
        }
        .site-content-center{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .an-box{
                width: 0;
                height: 0;
                opacity: 0;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                background: url(./images/border1.png) no-repeat left, url(./images/border2.png) no-repeat right;
                background-size: auto 100%, auto 100%;
                animation: centerNum 0.5s linear forwards 2.8s;
                .pink-roll{
                    width: 8%;
                    height: 0;
                    opacity: 0;
                    display: flex;
                    flex-flow: column;
                    justify-content: space-between;
                    align-items: center;
                    animation: pink-roll 0.5s linear forwards 2.85s;
                    
                    &::before{
                        content: '';
                        width: 0; 
                        height: 0;
                        border-width: 0.2rem;
                        border-style: solid;
                        border-color:#ff7a9a transparent transparent transparent;
                    }
                    &::after{
                        content: '';
                        width: 0; 
                        height: 0;
                        border-width: 0.2rem;
                        border-style: solid;
                        border-color: transparent transparent #ff7a9a transparent;
                    }
                    .scroll-box{
                        height: 80%;
                        position: relative;
                        overflow: hidden;
                        width: 0.1rem;
                        transform: rotateY(180deg);
                        ul{
                            height: 100%;
                            width: 0.1rem;
                            position: absolute;
                            top: -100%;
                            left: 0;
                            animation: top-0-100 1.5s linear infinite;
                            li{
                                width: 0.1rem;
                                height: calc(10% - 5px);
                                background: #ff7a9a;
                                margin-bottom: 5px;
                            }
                        }
                    }
                    
                }
                .box-middle{
                    width: 0;
                    height: 0;
                    opacity: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: url(./images/border3.png) no-repeat top, url(./images/border4.png) no-repeat bottom;
                    background-size: 70% auto, 70% auto;
                    animation: borderShow1 0.5s linear forwards 2.85s;
                    .arrow-border{
                        display: flex;
                        width: 0;
                        height: 100%;
                        opacity: 0;
                        background: url(./images/leftBorder.png) no-repeat left, url(./images/rightBorder.png) no-repeat right;
                        background-size: auto 66%, auto 66%;
                        
                        animation: width-0-100 0.5s linear forwards 3.3s;
                        justify-content: space-between;
                        .arrow-left, .arrow-right{
                            width: 15%;
                            height: 100%;
                            position: relative;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            opacity: 0;
                            .circle{
                                width: 0.25rem;
                                height: 0.25rem;
                                background: #00e4c8;
                                border-radius: 100%;
                            }
                            &::after{
                                content: '';
                                width: 0.2rem;
                                height: 0.2rem;
                                border: 0.1rem solid #00e4c8;
                                border-top: 0.1rem solid transparent;
                                border-left: 0.1rem solid transparent;
                                margin-left: -0.15rem;
                                // position: absolute;
                                // left: 0;
                                // top: calc(50% - 0.2rem);
                                transform: rotateZ(-45deg);
                            }
                        }
                        .arrow-left{
                            left: 0;
                            animation: transformShow 1.5s linear infinite 3.6s;
                        }
                        .arrow-right{
                            right: 0;
                            animation: transformShow1 1.5s linear infinite 3.6s;
                            transform: rotateY(180deg);
                        }
                        .sale-num-box{
                            width: 53%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .box-bg{
                                width: 100%;
                                height: 100%;
                                opacity: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                transform: scale(0) rotate(0);
                                background: url(./images/huan.png) no-repeat center;
                                background-size: 100% auto;
                                animation: rotate-width-height 3s linear forwards 3.8s;
                            }
                            .num-box{
                                width: 80%;
                                height: 80%;
                                opacity: 0;
                                display: flex;
                                flex-flow: column;
                                justify-content: center;
                                align-items: center;
                                font-size: 0.30rem;
                                color: #fff;
                                background: url(./images/cicle.png) no-repeat center;
                                background-size: 100% auto;
                                transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 5rem, 0);
                                animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                                animation: numshow 1.5s linear forwards 6.8s;
                            }
                        }
                        
                    }
                }
            } 
        }
        .site-content-right{
            width: 25%;
            height: 100%;
            .site-content-right-top{
                width: 100%;
                height: 34%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .site-content-right-center{
                height: 33%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                .decoration-el-item, .circle-list{
                    flex-direction: row-reverse
                }
                .lightning-box{
                    transform: rotateY(180deg);
                }
            }
            .site-content-right-bottom{
                height: 33%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                .sort-item{
                    &:nth-child(1){
                        animation: sortShow3 0.5s linear forwards 7.1s;
                        .sort-No{
                            color: #cab834
                        }
                        .sort-item-content{
                            border: 2px solid #cab834;
                        }
                        &::after{
                            background: linear-gradient(#cab834, #00000000);;
                        }
                    }
                    &:nth-child(2){
                        animation: sortShow2 0.5s linear forwards 7.2s;
                        .sort-No{
                            color: #03c794
                        }
                        .sort-item-content{
                            border: 2px solid #03c794;
                        }
                        &::after{
                            background: linear-gradient(#03c794, #00000000);;
                        }
                    }
                    &:nth-child(3){
                        animation: sortShow1 0.5s linear forwards 7.3s;
                        .sort-No{
                            color: #00e4c8
                        }
                        .sort-item-content{
                            border: 2px solid #00e4c8;
                        }
                        &::after{
                            background: linear-gradient(#00e4c8, #00000000);;
                        }
                    }
                }
            }
            .data-item{
                background: url(./images/item-bg-right.png) no-repeat center; 
                background-size: 100% 100%; 
            }
        }
        .data-item{
            width: 0;
            height: 0;
            opacity: 0;
            border-radius: 100%;
            background: url(./images/item-bg.png) no-repeat center;
            background-size: 100% 100%;
            animation: circleShow 0.5s linear forwards 7.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            .num{
                position: relative;
                font-size: 0.2rem;
                color: #fff;
                width: 55%;
                height: 55%;
                border-radius: 100%;
                margin-top: -3%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                background: url(./images/num-bg.png) no-repeat center;
                background-size: 100% 100%;
                animation: circleRotate 5s ease infinite 1s;
                animation-delay: 5s; 
            }
        }
        .decoration-el-item{
            display: flex;
            height: 50%;
            align-items: center;
            .lightning-box{
                width: 50%;
                height: 100%;
            }
            .circle-list{
                display: flex;
                width: 50%;
                justify-content: space-around;
                height: 100%;
                align-items: center;
                li{
                    width: 2.2vh;
                    height: 2.2vh;
                    border-radius: 1.1vh;
                    background: #00e4c8;
                    opacity: 0;
                    transition: all 0.5s;
                    &:nth-child(1){
                        width: 1.4vh;
                        height: 1.4vh;
                        animation: opacity4 0.5s linear forwards 2.5s;
                    }
                    &:nth-child(2){
                        width: 1.6vh;
                        height: 1.6vh;
                        animation: opacity4 0.5s linear forwards 2.54s;
                    }
                    &:nth-child(3){
                        width: 1.8vh;
                        height: 1.8vh;
                        animation: opacity4 0.5s linear forwards 2.58s;
                    }
                    &:nth-child(4){
                        width: 2vh;
                        height: 2vh;
                        animation: opacity4 0.5s linear forwards 2.62s;
                    }
                    &:nth-child(5){
                        width: 2.2vh;
                        height: 2.2vh;
                        animation: opacity4 0.5s linear forwards 2.66s;
                    }
                    &:nth-child(6){
                        width: 2.4vh;
                        height: 2.4vh;
                        animation: opacity4 0.5s linear forwards 2.7s;
                    }
                    &:nth-child(7){
                        width: 2.2vh;
                        height:60%;
                        animation: opacity4 0.5s linear forwards 2.76s;
                    }
                    &:nth-child(8){
                        width: 2vh;
                        height: 80%;
                        animation: opacity4 0.5s linear forwards 2.8s;
                    }
                }
            }
        }
        .sort-item{
            width: 30%;
            height: 0;
            opacity: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-flow: column;
            .sort-No{
                font-size: 0.14rem;
            }
            .sort-item-content{
                width: 8vh;
                height: 8vh;
                border-radius: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                font-size: 0.12rem;
                color: #fff;
            }
            &::after{
                content: '';
                width: 2px;
                height: calc(100% - 8vh);
            }
        }
    }
    .site-bottom{
        height: calc(30% - 0.4rem);
        padding: 0.2rem 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        .site-bottom-content{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            animation: translate-0-100 6s linear infinite 9s;

        }
        .site-bottom-item{
            width: 33%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background: url(./images/di.png) no-repeat center;
            background-size: auto 100%;
            margin-left: 0.25%;
            flex: none;
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 5rem, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            animation: numshow 0.5s linear forwards 7s;
            .bottom-item-content{
                width: 0;
                height: 13vh;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                background: url(./images/bg.png) no-repeat center;
                background-size: auto 100%;
                opacity: 0;
                animation: width-height-custom 0.5s linear forwards 7.5s;
                .bottom-item-content-left, .bottom-item-content-right{
                    width: 6vh;
                    height: 100%;
                    opacity: 0;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 0.13rem;
                    animation: opacity4 0.5s linear forwards 8s;
                    .bottom-10{
                        margin-bottom: 0.1rem;
                    }
                    .content-data-item{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                       
                        .completion-icon{
                            background: url(./images/wc.png) no-repeat center;
                        }
                        .selling-out-icon{
                            background: url(./images/sq.png) no-repeat center;
                        }
                        .discount-rate-icon{
                            background: url(./images/zc.png) no-repeat center;
                        }
                        .YoY-icon{
                            background: url(./images/tb.png) no-repeat center;
                        }
                        .item-icon{
                            width: 2.5vh;
                            height: 2.5vh;
                            background-size: 80% auto;
                        }
                    }
                }
                .bottom-item-content-mid{
                    width: 13vh; 
                    height: 13vh;
                    display: flex;
                    opacity: 0;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;       
                    background-size: auto 100%;
                    border-radius: 100%;
                    font-size: 0.20rem;
                    color: #fff;
                    animation: opacity4 0.5s linear forwards 8s;
                }
            }
        }
    }
}
.mid{
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
}
@keyframes translate-0-100 {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
@keyframes width-height-custom {
    0% {
        opacity: 0;
        width: 0;
    }
    100% {
        opacity: 1;
        width: 30.72vh;
    }
}
@keyframes width-0-100 {
    0% {
        opacity: 0;
        width: 0;
    }
    100% {
        opacity: 1;
        width: 100%;
    }
}
@keyframes top-0-100 {
    0% {
        top: 0;
    }
    100% {
        top: -100%;
    }
}
@keyframes opacity1 {
    from{
       opacity: 0;
    }
    to{
       opacity: 0.4;
    }
}
@keyframes opacity2 {
    from{
       opacity: 0;
    }
    to{
       opacity: 0.6;
    }
}
@keyframes opacity3 {
    from{
       opacity: 0;
    }
    to{
       opacity: 0.8;
    }
}

@keyframes opacity4 {
    from{
       opacity: 0;
    }
    to{
       opacity: 1;
    }
}
@keyframes titleShow {
    0% {
        opacity: 0;
        font-size: 0rem;
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
        opacity: 1;
        font-size: 0.36rem;
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
    100% {
        opacity: 1;
        font-size: 0.36rem;
        transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
}
@keyframes circleShow {
    from{
        opacity: 0;
        width: 0;
        height: 0;
    }
    to{
        opacity: 1;
        width: 20vh;
        height: 20vh;
    }
}
@keyframes circleRotate {
    0% {
        transform:  rotateY(0);
    }
    100% {
        transform:  rotateY(360deg);
    }
}
@keyframes sortShow1 {
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 90%;
    }
}
@keyframes sortShow2 {
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 80%;
    }
}
@keyframes sortShow3 {
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 70%;
    }
}
@keyframes centerNum {
    0% {
        opacity: 0;
        width: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        width: 100%;
        height: 100%;
    }
}
@keyframes pink-roll {
    0% {
        opacity: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        height: 56%;
    }
}
@keyframes borderShow1 {
    0% {
        opacity: 0;
        width: 0;
        height: 0;
    }
    100% {
        opacity: 1;
        width: 78%;
        height: 78%;
    }
}
@keyframes transformShow {
    from{
        opacity: 0;
        left: 0;
    }
    to{
        opacity: 1;
        left: 8%;
    }
}
@keyframes transformShow1 {
    from{
        opacity: 0;
        right: 0;
    }
    to{
        opacity: 1;
        right: 8%;
    }
}
@keyframes rotate-width-height {
    0% {
        opacity: 0;
        transform: scale(0) rotate(0);
    }
    40% {
        opacity: 1;
        transform: scale(0.8) rotate(360deg);
    }
    80% {
        opacity: 1;
        transform: scale(0.8) rotate(720deg);
    }
    100% {
        opacity: 1;
        transform: scale(1) rotate(720deg);
    }
}
@keyframes numshow {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 5rem, 0);
        transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 5rem, 0);
        -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
        opacity: 1;
        -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1) translate3d(0, 60px, 0);
        transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
        -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
    }
</style>
