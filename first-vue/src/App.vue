<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ConfigProvider, message } from 'ant-design-vue';
import zhCN from "ant-design-vue"
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn.js'
import { nextTick, ref } from 'vue';
const locale = ref(zhCN)
dayjs.locale('zh-cn')
const current = ref("")

const switchTheme = () => {
  let s1 = Math.floor(Math.random() * 10)
  let s2 = Math.floor(Math.random() * 10)
  let s3 = Math.floor(Math.random() * 10)
  let s4 = Math.floor(Math.random() * 10)
  let s5 = Math.floor(Math.random() * 10)
  let s6 = Math.floor(Math.random() * 10)
  nextTick(() => {
    message.success("切换成功")
    ConfigProvider.config({
    theme: {
      primaryColor: current.value,
      successColor:  current.value,
    },
  })
  
});

  
  current.value = "#" + s1 + s2 + s3 + s4 + s5 + s6; 
  console.log(current.value)
}
</script>

<template>
  <a-config-provider :locale="locale">
    <a-button type="primary" @click="switchTheme()">随机主题</a-button>
    <a-alert message="Success Text" type="success" />
  <a-alert message="Info Text" type="info" />
  <a-alert message="Warning Text" type="warning" />
  <a-alert message="Error Text" type="error" />
    <HelloWorld msg="Vite + Vue" />
  </a-config-provider>
</template>


