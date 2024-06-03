
<template>
  <a-config-provider :locale="antLocale">
    <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <menuList />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        
        <a-tag color="#2db7f5" @click="switchLan">{{currentLanguage === 'en' ? 'english' : '简体中文'}}</a-tag>
        <header-info></header-info>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <breadCrumbVue />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </a-config-provider>
</template>
<script setup lang="ts">
import menuList from './components/menu.vue'
import headerInfo from './components/headerInfo.vue'
import breadCrumbVue from './components/breadCrumb.vue'
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import { nextTick, ref, provide } from 'vue';

/**
 * 自定义国际化切换
 */
import { useI18n } from "vue-i18n"
const {locale} = useI18n()
provide("test", {test: 123})
const antLocale = ref(zhCN); // antd国际化切换
const currentLanguage = ref("zh")
const collapsed = ref(false)
const switchLan  = () => {
  if (currentLanguage.value === 'en') {
    currentLanguage.value = 'zh'
    antLocale.value = zhCN
    locale.value = 'zh'
  } else {
    currentLanguage.value = 'en'
    antLocale.value = enUS;
    locale.value = 'en'
  }
}


</script>





