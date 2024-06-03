<template>
    <span @click="alrt($slots)">学习1</span>
    <slot :msg="msg" :status="status"></slot>
    <input v-model="msg">
    <input v-model="status">
</template>
<script setup>
import { ref, inject } from "vue"
const msg = ref(23234)
const status = ref(55555555)
const ss = inject('ssss', 2133)
console.error(ss)
const alrt = (num) =>{
    console.log(num)
}
</script>
<style scoped>

</style>