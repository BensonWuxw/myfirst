<template>
{{poats}}
    <Item1Vue class="ccc" v-bind="$attrs" @click="consoleLogS($slot)">
        <template v-slot="poats">{{poats.msg}}  {{poats.status}}</template>
    </Item1Vue>
    <AsyncComp></AsyncComp>
    <a-button type="primary" @click="fangdou(clickBtn, 2000)">测试防抖</a-button>
    <treeVue></treeVue>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import Item1Vue from "./item1.vue";
import treeVue from "./tree.vue";

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