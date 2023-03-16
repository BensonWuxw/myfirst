<template>
  <div style="width: 100%">
    <a-menu v-model:selectedKeys="state.selectedKeys" theme="dark" mode="inline" @click="jumpPage">
      
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>测试</span>
          </span>
        </template>
        <a-menu-item key="testLan">
        <pie-chart-outlined />
        <span>测试语言切换</span>
      </a-menu-item>
      <a-menu-item key="testTheme">
        <desktop-outlined />
        <span>测试主题切换</span>
      </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined
  } from '@ant-design/icons-vue';
  
 const router = useRouter()
 const route = useRoute()
console.log(route.name)
 const state = reactive({
  collapsed: false,
  selectedKeys: [route.name],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

watch(() => route.name, (newV,oldV)=> {
  state.selectedKeys = [newV]
})
  

  
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};

const jumpPage = (item: any) => {
  router.push({path: item.key})
  state.selectedKeys = [item.key]
}
</script>