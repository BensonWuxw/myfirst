<template>
    <div class="scene">
      <div class="orbit-container" :style="{ transform: `rotateY(${rotationY}deg)` }">
        <div v-for="(image, index) in images" :key="index" class="orbit-image" :style="getItemStyle(index)">
          <img :src="image" alt="Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const rotationY = ref(0);
      const images = [
        'https://via.placeholder.com/150/FF5733/FFFFFF?text=Image+1',
        'https://via.placeholder.com/150/33FF57/FFFFFF?text=Image+2',
        'https://via.placeholder.com/150/3357FF/FFFFFF?text=Image+3',
      ];

const testCode = ref()
      const getItemStyle = (index) => {
        const angle = (360 / images.length) * index; // 计算每个元素的角度
        return {
          transform: `rotateY(${angle}deg) translateZ(100px)`, // 根据角度和距离设置变换
        };
      };
  
      const startRotation = () => {
        rotationY.value += 1; // 控制旋转速度
        requestAnimationFrame(startRotation);
      };
  
      onMounted(() => {
        startRotation(); // 启动旋转
      });
  
      return {
        rotationY,
        images,
        getItemStyle,
      };
    },
  });
  </script>
  
  <style scoped>
  .scene {
    width: 300px;
    height: 300px;
    perspective: 600px; /* 透视效果 */
    margin: auto;
  }
  
  .orbit-container {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; /* 保持 3D 变换 */
    transition: transform 0.5s;
  }
  
  .orbit-image {
    position: absolute;
    width: 150px; /* 图片宽度 */
    height: 150px; /* 图片高度 */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .orbit-image img {
    width: 100%; /* 为了适应容器 */
    border-radius: 10px; /* 圆角效果 */
  }
  </style>
  