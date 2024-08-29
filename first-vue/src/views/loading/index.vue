<template>
  <div class="content"  ref="leafContainer">
    <div class="beetle"></div>
    <div class="beetle beetle1"></div>
    <div class="beetle beetle2"></div>
    <div class="beetle beetle3"></div>
    <div class="beetle beetle4"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
const NUMBER_OF_LEAVES = 40;
const leafContainer = ref()
function init() {
  
  for (let i = 0; i < NUMBER_OF_LEAVES; i++) {

    leafContainer.value.appendChild(createALeaf());
  }
}



//返回设置的随机整数
function randomInteger(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}
//返回设置的随机浮点数
function randomFloat(low, high) {
  return low + Math.random() * (high - low);
}

function pixelValue(value) {
  return value + 'px';
}

function durationValue(value) {
  return value + 's';
}
function createALeaf() {
  // 创建萤火虫元素
  var leafDiv = document.createElement('div');
  leafDiv.className = 'beetle'
  // 萤火虫初始位置
  leafDiv.style.bottom = "100px";

  //萤火虫距页面左侧的距离
  leafDiv.style.left = pixelValue(randomInteger(0, 1500));

  // 随机得到正时针旋转并向右移动的动画、逆时针旋转并向左移动的动画；
  var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpin';
  // 给生成的萤火虫元素添加动画
  leafDiv.style.animationName = 'flicker,fade, up,' + spinAnimationName;
  // 随机设置动画时间
  var fadeAndDropDuration = durationValue(randomFloat(5, 11));
  var leafDelay = durationValue(randomFloat(0, 5));
  leafDiv.style.animationDelay = leafDelay;
  leafDiv.style.animationDuration = fadeAndDropDuration;

  return leafDiv;
}
onMounted(() => {
    init()
})

</script>
<style lang="less">
.content {
  width: 100%;
  height: 100%;
  background: url('https://bing.com/th?id=OHR.SynchronousFireflies_ZH-CN6323931412_800x480.jpg') no-repeat;
  background-position: center bottom;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}

.content:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.beetle {
  width: 7px;
  height: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  animation: flicker 4000ms ease infinite;
  position: relative;
  z-index: 88;
  top: 50%;
  left: 50%;
}

.beetle1 {
  top: 60%;
  left: 20%;
}

.beetle2 {
  top: 40%;
  left: 60%;
}

.beetle3 {
  top: 38%;
  left: 30%;
}

.beetle4 {
  top: 40%;
  left: 80%;
}

@keyframes flicker {

  0%,
  100% {
    background: #fefa01;
    box-shadow: 0 0 8px #fefa01, inset 0 0 0 0 rgba(14, 10, 10, 0.1);
  }

  30%,
  70% {
    background: #fffd99;
    box-shadow: 0 0 16px 8px #fefa01, inset 0 0 0 0 rgba(14, 10, 10, 0.1);
  }

  50% {
    box-shadow: 0 0 16px 8px rgba(254, 250, 1, 0.8), inset 0 0 0 0 rgba(14, 10, 10, 0.1);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes up {
  0% {
    transform: translate(0px, 10vh);
  }

  100% {
    transform: translate(0px, -90vh);
  }
}

@keyframes clockwiseSpin {
  0% {
    transform: translate(0, 10vh) rotate(-50deg);
  }

  30% {
    transform: translate(100px, -10vh) rotate(0deg);
  }

  100% {
    transform: translate(0, -90vh) rotate(50deg);
  }
}

@keyframes counterclockwiseSpin {
  0% {
    transform: translate(0, 10vh) rotate(50deg);
  }

  30% {
    transform: translate(-100px, -10vh) rotate(0deg);
  }

  100% {
    transform: translate(50px, -90vh) rotate(-50deg);
  }
}
</style>