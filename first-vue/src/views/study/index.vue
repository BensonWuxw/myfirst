<template>
    <AsyncComp></AsyncComp>
    <a-button type="primary" @click="fangdou(clickBtn, 2000)">测试防抖</a-button>
    <treeVue></treeVue>
    <processVue></processVue>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

import treeVue from "./tree.vue";
import processVue from "../projectProgress/index.vue"
const consoleLogS = (slot) => {
    console.log(slot)
}
const AsyncComp = defineAsyncComponent(() =>
  import('./item1.vue')
)

let timer = null;
const fangdou = function(fn, times){
    if(timer) {
        clearTimeout(timer)
    } 
    timer = setTimeout(() => {
        fn();
        timer = null
    }, times)

}

const clickBtn = () => {
    console.log(23234)
}
</script>
<style scoped>

</style>