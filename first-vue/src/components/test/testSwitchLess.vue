<template>
    <div class="component-style">asdasd</div>
  </template>
  
  <script setup lang="ts">
    import {ref, onUpdated, nextTick, defineProps} from "vue"
    const props = defineProps<{lessNmae: string}>()
    const lessName = ref("theme1.less")
    onUpdated(() => {
      nextTick(() => {
      const link = document.querySelector(`link[href*="${lessName.value}"]`);
        if (!link) {
          const newLink = document.createElement('link');
          newLink.rel = 'stylesheet/less';
          newLink.href = require(`./src/assets/less/${lessName.value}`);
          document.head.appendChild(newLink);
         
        } 
    })
    })
   
  </script>
  <style lang="less">
    
  </style>