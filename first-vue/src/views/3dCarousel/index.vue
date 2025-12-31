<template>
  <div class="dashboard-container">
    <!-- 主内容区 -->
    <main class="dashboard-content">
      <div class="three-dimensional-carousel">
        <div class="carousel-container" ref="carouselContainer">
          <div v-for="(item, index) in images" :key="item.id" class="carousel-item" 
            :class="['curItem'+item.id, { 'back-item': getItemPosition(index) < 0 }]"
            :style="[getItemStyle(index), { boxShadow: item.boxShadow, background: item.background, hoverBg: item.hoverBg }]"
            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <router-link :to="(getItemPosition(index) < 0) ? '' : item.url">
              <div>
                <img :src="item.icon" :alt="`Image ${index + 1}`" />
              </div>
              <div class="tabtext" :style="{ background: currentIndex == index ? item.textBgcolor : 'none' }">{{ item.title }}</div>
            </router-link>
          </div>
        </div>
        <div class="carousel-controls">
            <div @click="rotate(-1)" class="control-btn prev"></div>
            <div @click="rotate(1)" class="control-btn next"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup name="Index">
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = ref([
  {
    id: 1,
    title: "数字看板",
    subtitle: "Digital Kanban",
    color: "#1D61FF",
    background: 'linear-gradient(180deg, #FF4F00 0%, #FF953F 111.56%)',
    boxShadow: '4px 2px 0px 0px #FFAD6B inset',
    textBgcolor: 'linear-gradient(254.98deg, #FF4F00 9.48%, #FF953F 97.28%)',
    icon: new URL('@/assets/homepageimage/1.png', import.meta.url).href, // Vite项目适用
    url: "/DigitalDashboard",
  },
  {
    id: 2,
    title: "数字团队",
    subtitle: "Digital Team",
    color: "#78689F",
    background: 'linear-gradient(180deg, #0B37C5 0%, #09A7FD 100%)',
    boxShadow: '4px 2px 0px 0px #88A0FF inset',
    textBgcolor: 'linear-gradient(254.98deg, #0B37C5 9.48%, #09A7FD 97.28%)',
    icon: new URL('@/assets/homepageimage/3.png', import.meta.url).href, // Vite项目适用
    url: "/team/teamList",
  },
  {
    id: 3,
    title: "数字仓储",
    subtitle: "Digital Repository",
    color: "#1D61FF",
    background: 'linear-gradient(180deg, #07A947 0%, #48EDB6 100%)',
    boxShadow: '4px 2px 0px 0px #48F590 inset',
    textBgcolor: 'linear-gradient(254.98deg, #07A947 9.48%, #48EDB6 97.28%)',
    icon: new URL('@/assets/homepageimage/6.png', import.meta.url).href, // Vite项目适用
    url: "/warehousingAndStorageActivities/warehouseManagement",
  },
  {
    id: 4,
    title: "数字车辆",
    subtitle: "Digital Vehicle",
    color: "#9E5D2F",
    background: 'linear-gradient(180deg, #FF4F00 0%, #FF953F 111.56%)',
    boxShadow: '4px 2px 0px 0px #FFAD6B inset',
    textBgcolor: 'linear-gradient(254.98deg, #FF4F00 9.48%, #FF953F 97.28%)',
    icon: new URL('@/assets/homepageimage/4.png', import.meta.url).href, // Vite项目适用
    url: "/car/vehicle",
  },
  {
    id: 5,
    title: "数字设备",
    subtitle: "Digital Devices",
    color: "#23DCA7",
    background: 'linear-gradient(180deg, #0B37C5 0%, #09A7FD 100%)',
    boxShadow: '4px 2px 0px 0px #88A0FF inset',
    textBgcolor: 'linear-gradient(254.98deg, #0B37C5 9.48%, #09A7FD 97.28%)',
    icon: new URL('@/assets/homepageimage/5.png', import.meta.url).href, // Vite项目适用
    url: "/equipment/equipmentInfo",
  },
  {
    id: 6,
    title: "数字安全",
    subtitle: "Digital Security",
    color: "#D43C7E",
    background: 'linear-gradient(180deg, #07A947 0%, #48EDB6 100%)',
    boxShadow: '4px 2px 0px 0px #48F590 inset',
    textBgcolor: 'linear-gradient(254.98deg, #07A947 9.48%, #48EDB6 97.28%)',
    icon: new URL('@/assets/homepageimage/7.png', import.meta.url).href, // Vite项目适用
    url: "/safety/inspectionPlan",
  },
  {
    id: 7,
    title: "系统设置",
    subtitle: "Digital Fracturing",
    color: "#578A90",
    background: 'linear-gradient(180deg, #FF4F00 0%, #FF953F 111.56%)',
    boxShadow: '4px 2px 0px 0px #FFAD6B inset',
    textBgcolor: 'linear-gradient(254.98deg, #FF4F00 9.48%, #FF953F 97.28%)',
    icon: new URL('@/assets/homepageimage/9.png', import.meta.url).href, // Vite项目适用
    url: "/system/organization/tenant",
  },
  {
    id: 8,
    title: "数字压裂",
    subtitle: "Digital Fracturing",
    color: "#578A90",
    background: 'linear-gradient(180deg, #0B37C5 0%, #09A7FD 100%)',
    boxShadow: '4px 2px 0px 0px #88A0FF inset',
    textBgcolor: 'linear-gradient(254.98deg, #0B37C5 9.48%, #09A7FD 97.28%)',
    icon: new URL('@/assets/homepageimage/8.png', import.meta.url).href, // Vite项目适用
    url: "/fracture/datacollection",
  },
  {
    id: 9,
    title: "数字项目",
    subtitle: "Digital Project",
    color: "#578A90",
    background: 'linear-gradient(180deg, #07A947 0%, #48EDB6 100%)',
    boxShadow: '4px 2px 0px 0px #48F590 inset',
    textBgcolor: 'linear-gradient(254.98deg, #07A947 9.48%, #48EDB6 97.28%)',
    icon: new URL('@/assets/homepageimage/2.png', import.meta.url).href, // Vite项目适用
    url: "/itemManagement/ProjectOverview",
  }
]);

// 自动播放状态
const autoPlaying = ref(true)
// 自动播放定时器
let autoPlayTimer = null
// 轮播容器
const carouselContainer = ref(null)
// 鼠标悬停状态
const isMouseOver = ref(false)
// 当前正面显示的图片的索引值
const currentIndex = ref(1);
// 旋转角度
const rotation = ref(0)

// 获取图片位置（用于判断正面还是背面）
const getItemPosition = (index) => {
  const angle = (index * 40) + rotation.value
  const radius = 500
  return Math.cos(angle * Math.PI / 180) * radius
}
// 计算每个图片的样式
const getItemStyle = (index) => {
  const baseAngle = (index * 40) + rotation.value;
  const radius = 500; // 增大半径使弧形更明显
  
  let angle = baseAngle % 360;
  if (angle < 0) angle += 360;
  let x = Math.sin(angle * Math.PI / 180) * radius;
  const z = Math.cos(angle * Math.PI / 180) * radius;
  let opacity, scale, rotateY, translateY;
  let top = 65;
  if (z > 0) {
    opacity = 1;
    translateY = 0;
    // 调整旋转角度和缩放比例，使正面显示5个卡片
    if (angle >= 0 && angle < 40) {
      // console.log('中间-image-index', images.value[index])
      // 中间一张 - 完全正面，更大的缩放
      rotateY = 0;
      scale = 1;
      currentIndex.value = index;
    } else if (angle >= 40 && angle < 80) {
      // console.log('左2-image-index', images.value[index])
      // 左侧第二张
      rotateY = 20;
      scale = 1;
      x = x - 80;
    } else if (angle >= 80 && angle < 120) {
      // console.log('左1-image-index', images.value[index])
      //左侧第一张 - 完全正面，更大的缩放
      rotateY = 25;
      scale = 1; // 增大中间卡片的缩放比例
      x = x + 50;
    } else if (angle >= 120 && angle < 160) {
      // console.log('右2-image-index', images.value[index])
      // 右侧第二张
      rotateY = 20;
      scale = 1;
    } else if (angle >= 160 && angle < 200) {
      // console.log('右1-image-index', images.value[index])
      // 右侧第一张
      rotateY = 25;
      scale = 0.9;
    } else {
      // console.log('其他正面-image-index', images.value[index])
      // 其他正面卡片
      rotateY = 0;
      scale = 0.7;
      // x += 200;
      // console.log('angle:', angle)
      if (angle === 320) {
        x = x + 80;
        scale = 1;
        rotateY = -20
      }
      if (angle === 280) {
        x = x - 50;
        rotateY = -25
        scale = 1;
      }
    }
  } else {
    // console.log('背面图片angle:', angle);
    // 背面图片
    opacity = 0.1;
    // scale = 0.8 + (Math.abs(z) / radius) * 0.1;
    rotateY = 0;
    switch(angle) {
      case 120:
        scale = 1.1
        translateY = -100;
        x = x + 150;
        break;
      case 160:
        scale = 1.6
        translateY = -150;
        x = x + 80
        break;
      case 200:
        scale = 1.6
        translateY = -150;
        x = x - 80
        break;
      case 240:
        scale = 1.1
        translateY = -100;
        x = x - 150;
        break;
      default: break;
    }
  }
  return {
    top: `${top}px`,
    transform: `translateX(${x}px) translateY(${translateY}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,  // translateY(${translateY}px) 
    opacity: opacity,
    zIndex: Math.round(z) // 根据z轴位置设置层级
  }
}

// 旋转轮播
const rotate = (direction) => {
  rotation.value += direction * 40
}

// 切换自动播放
const toggleAutoPlay = () => {
  autoPlaying.value = !autoPlaying.value
  if (autoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

// 处理鼠标进入事件
const handleMouseEnter = () => {
  isMouseOver.value = true
  stopAutoPlay()
}
// 处理鼠标离开事件
const handleMouseLeave = () => {
  isMouseOver.value = false
  if (autoPlaying.value) {
    startAutoPlay()
  }
}

// 开始自动播放
const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayTimer = setInterval(() => {
    rotate(1)
  }, 3000)
}
// 停止自动播放
const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

onMounted(() => {
  startAutoPlay()
});
// 组件卸载时
onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped lang="less">
/* 基础样式 */
.dashboard-container {
  background: url(@/assets/homepageimage/bg.png) no-repeat 100% 100%;
  color: #333;
  height: calc(100vh - 84px);
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.homepage-title{
  // background: url(@/assets/homepageimage/titlebg.png) no-repeat 100% 100% center center;
  color: #ffffff;
  box-sizing: border-box;
  padding-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  div {
    background-image: url(@/assets/homepageimage/titlebg.png);
    background-repeat: no-repeat;
    background-position: center;
    font-family: DingTalk JinBuTi;
    font-weight: 400;
    font-style: Regular;
    font-size: 45px;
    line-height: 76px;
    letter-spacing: 20px;
    text-align: center;
  }
}
// 轮播图
.three-dimensional-carousel {
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  width: 220px;
  height: 280px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  // transform: rotateX(-10deg);
}

/* 调整卡片样式 */
.carousel-item {
  position: absolute; 
  width: 190px;
  height: 220px;
  left: 12px;
  // top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  transition: transform 0.8s ease, opacity 0.8s ease, filter 0.8s ease, box-shadow 0.8s ease;
  border-radius: 4px; /* 添加圆角 */
  cursor: pointer;
  // border: 4px solid #FF6200;
  // box-shadow: 4px 2px 0px 0px #FF9466 inset;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain; /* 确保图标完整显示 */
    transition: all 0.8s ease;
    margin-top: -35px;
  }
  .tabtext {
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    width: calc(100% - 4px);
    line-height: 50px;
    // background: linear-gradient(254.98deg, #FF4F00 9.48%, #FF953F 97.28%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
.curItem1:hover, .curItem4:hover, .curItem7:hover {
  .tabtext {
    background: linear-gradient(254.98deg, #FF4F00 9.48%, #FF953F 97.28%) !important;
  }
}
.curItem2:hover, .curItem5:hover, .curItem8:hover {
  .tabtext {
    background: linear-gradient(254.98deg, #0B37C5 9.48%, #09A7FD 97.28%) !important;

  }
}
.curItem3:hover, .curItem6:hover, .curItem9:hover {
  .tabtext {
    background: linear-gradient(254.98deg, #07A947 9.48%, #48EDB6 97.28%) !important;

  }
}

/* 背面图片轮廓样式 */
.carousel-item.back-item {
  box-shadow: none; /* 移除背面图片的阴影 */
  // transform: rotateY(180deg);
  transform: translateY(40px);
  &:hover {
    cursor: default;
  }
  img {
    filter: brightness(0) invert(0.2) blur(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    opacity: 0.2; /* 降低透明度 */
  }
  /* 隐藏背面图片的标题 */
  .tabtext {
    opacity: 0;
  }
}

.carousel-controls {
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 78%;
  z-index: -10;
}

.control-btn {
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.control-btn.prev {
  background-image: url(@/assets/homepageimage/left.png);
}
.control-btn.next {
  background-image: url(@/assets/homepageimage/right.png);
}
.control-btn:hover {
  transform: scale(1.1);
}
</style>
