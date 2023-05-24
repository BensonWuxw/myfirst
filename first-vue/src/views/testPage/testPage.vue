<template>
  <div class="myclass">
    {{ $t('welcomeMsg') }}
    <a-select v-model:value="currentTheme" style="width:200px" @change="changeStyleS">
      <a-select-option label="themeA" value="themeA"></a-select-option>
      <a-select-option label="themeB" value="themeB"></a-select-option>
      <a-select-option label="themeC" value="themeC"></a-select-option>
      <a-select-option label="themeD" value="themeD"></a-select-option>
    </a-select>
  </div>
</template>
<script lang="ts" setup>
import "../../assets/less/style.less"
import { changeStyle, getFixedFromatterTime } from "../../utils/index"
import { menusModel } from "../../utils/theme"
import {ref} from "vue";
const currentTheme = ref('themeA')
console.log(getFixedFromatterTime(1, '2023-05-23 11:16:11', -1))
const changeStyleS = () => {
  let obj = menusModel[currentTheme.value]

  for(let key in obj){
        document.getElementsByTagName('body')[0].style.setProperty(`--${key}`, obj[key]);
    }
}
</script>
<style lang="less">

@import "../../assets/less/theme1.less";

.myclass{
  color: var(--ssColor);
  font-weight: bold;
  font-size: 30px;
}
</style>

