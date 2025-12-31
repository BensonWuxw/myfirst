<template>
  <div style="width: 100%">
    <a-menu v-model:selectedKeys="state.selectedKeys" :open-keys="state.openKeys" :mode="mode" :theme="theme" @click="jumpPage">
      <a-sub-menu key="dashborad">
        <template #title>
          <span>
            <DashboardOutlined />            
            <span>驾驶舱</span>
          </span>
        </template>
        <a-menu-item key="dashborad1">驾驶舱1</a-menu-item>
        <a-menu-item key="dashborad2">驾驶舱2</a-menu-item>
        <a-menu-item key="dashborad3">驾驶舱3</a-menu-item>
        <a-menu-item key="dashborad4">驾驶舱4</a-menu-item>
        <a-menu-item key="dashborad5">驾驶舱5</a-menu-item>
        <a-menu-item key="dashborad6">驾驶舱6</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="pluginLibrary">
        <file-outlined />
        <span>VUE3插件</span>
      </a-menu-item>
      <a-menu-item key="olMap">
        <svg-icon icon-name="map" style="margin-right: 0.1rem;"></svg-icon> openlayers 地图操作</a-menu-item>

      <a-menu-item key="logicflow">
        <desktop-outlined />
        <span>{{$t('Flow')}}</span>
      </a-menu-item>
      <a-menu-item key="testPage">
        <file-outlined />
        <span>{{$t('CustomeSwitchAntTheme')}}</span>
      </a-menu-item>
      <a-sub-menu key="palnMode">
        <template #title>
          <span>
            <file-outlined />         
            <span>功能组件</span>
          </span>
        </template>
        <a-menu-item key="palnMode1">仿甘特图</a-menu-item>
        <a-menu-item key="palnMode2">3D轮播</a-menu-item>
        <a-menu-item key="palnMode3">3D旋转</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <user-outlined />
            <span>{{$t('Test')}}</span>
          </span>
        </template>
        <a-menu-item key="testLan">
        <pie-chart-outlined />
        <span>{{$t('SwitchAntLang')}}</span>
      </a-menu-item>
      <a-menu-item key="testTheme">
        <desktop-outlined />
        <span class="activeBG">{{$t('SwitchAntTheme')}}</span>
      </a-menu-item>
      <a-menu-item key="testShopping">
        <desktop-outlined />
        <span>测试插件</span>
      </a-menu-item>
      <a-menu-item key="page404">
        <desktop-outlined />
        <span>404</span>
      </a-menu-item>
      <a-menu-item key="loading">
        <desktop-outlined />
        <span>loading</span>
      </a-menu-item>
      
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span>
            <team-outlined />
            <span>图表</span>
          </span>
        </template>
        <a-menu-item key="studyPage">学习</a-menu-item>
        <a-menu-item key="training">锻炼</a-menu-item>
        
      </a-sub-menu>
      
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { useCommonParamsStore } from "../store/index"
import {
  DashboardOutlined,
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
  openKeys: ['dashborad'],
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