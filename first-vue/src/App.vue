
<template>
  <a-config-provider :locale="locale">
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
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </a-config-provider>
</template>
<script setup lang="ts">
import menuList from './components/menu.vue'
import headerInfo from './components/headerInfo.vue'
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import { nextTick, ref, provide } from 'vue';

const locale = ref(zhCN)
const currentLanguage = ref("zh")
const collapsed = ref(false)
const switchLan  = () => {
  if (currentLanguage.value === 'en') {
    currentLanguage.value = 'zh'
    locale.value = zhCN
  } else {
    currentLanguage.value = 'en'
    locale.value = enUS
  }
}


</script>





