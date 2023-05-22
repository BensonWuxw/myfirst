<template>
  <div class="myclass">
    <a-button @click="switchLess">切换名称</a-button>
    <switchLessComponent :lessName="lessName"></switchLessComponent>
  </div>
</template>
<script lang="ts" setup>
import switchLessComponent from "../../components/test/testSwitchLess.vue"
import {ref} from "vue";
const lessName = ref('theme1.less')
const switchLess = () => {
  lessName.value = lessName.value === "theme1.less" ? "theme2.less" : "theme1.less"
}
</script>
<style lang="less">
// .myclass{
//   color: @sss;
// }


</style>

