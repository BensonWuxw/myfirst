<template>
  <div class="menu">
    <div v-for="(item, index) in MENU_LIST" :key="index" class="menu-item" @click="linkTo(xxx)">
      {{item.name}}
    </div>
  </div>
</template>
    <script setup>
import { ref } from 'vue';
const MENU_LIST = ref([
  { name: '菜单1'},
  { name: '菜单2'},
  { name: '菜单3'}
])
    </script>  
    <style lang="less">
.menu {
  position: relative;
  width: 40%;
  height: 50%;
  left: 50%;
  transform: translateX(-50%);
  .menu-item {
    width: 200px;
    height: 200px;
    border: 1px solid #f0f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 33px 0;
    position: absolute;
    cursor: pointer;
    //3个卡片,x和y轴动画加起来是20s , 20s/3 约等于 6.667s
    //每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
    &:nth-child(1) {
      animation: animateX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
        animateY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
        scaleAnimate 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
    }
    &:nth-child(2) {
      animation: animateX 10s cubic-bezier(0.36, 0, 0.64, 1) -11.667s infinite alternate,
        animateY 10s cubic-bezier(0.36, 0, 0.64, 1) -6.667s infinite alternate,
        scaleAnimate 20s cubic-bezier(0.36, 0, 0.64, 1) -6.667s infinite alternate;
    }

    &:nth-child(3) {
      animation: animateX 10s cubic-bezier(0.36, 0, 0.64, 1) -18.334s infinite alternate,
        animateY 10s cubic-bezier(0.36, 0, 0.64, 1) -13.334s infinite alternate,
        scaleAnimate 20s cubic-bezier(0.36, 0, 0.64, 1) -13.334s infinite alternate;
    }
  }
}
@keyframes animateX {
  0% {
    left: -50px;
  }
  100% {
    left: 75%;
  }
}

@keyframes animateY {
  0% {
    top: -100px;
  }
  100% {
    top: 400px;
  }
}

@keyframes scaleAnimate {
  0% {
    transform: scale(0.6);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.6);
  }
}
</style>
