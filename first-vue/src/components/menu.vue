<template>
  <div style="width: 100%">
    <a-menu v-model:selectedKeys="state.selectedKeys" :mode="mode" :theme="theme" @click="jumpPage">
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
        <span class="activeBG">测试主题切换</span>
      </a-menu-item>
      <a-menu-item key="testShopping">
        <desktop-outlined />
        <span>测试插件</span>
      </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="logicflow">
        <desktop-outlined />
        <span>流程图</span>
      </a-menu-item>
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
import { ref, reactive, watch, computed, onMounted } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { useCommonParamsStore } from "../store/index"
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
 const commonParams = useCommonParamsStore()
 const mode = computed(() => commonParams.mode)
 const theme = computed(() => commonParams.theme)
 const state = reactive<any>({
  collapsed: false,
  selectedKeys: ["testLan"],
  rootSubmenuKeys: ["testLan", "testTheme"],
  openKeys: ['sub1'],
});

watch(() => route.name, (newV,oldV)=> {
  if (!newV) {
    state.selectedKeys = ["testLan"]
  } else {
    state.selectedKeys = [newV]
  }
  
})

watch(() => commonParams.mode, (newV,oldV)=> {
  console.log(newV,oldV)
})

onMounted(() => {
  state.selectedKeys = ["testLan"]
})

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed;
};

const jumpPage = (item: any) => {
  router.push({path: item.key})
  state.selectedKeys = [item.key]
}

const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };

</script>