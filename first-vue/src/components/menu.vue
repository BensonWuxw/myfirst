<template>
  <div style="width: 100%">
    <a-menu v-model:selectedKeys="state.selectedKeys" :open-keys="state.openKeys" :mode="mode" :theme="theme" @click="jumpPage">

      <a-menu-item key="logicflow">
        <desktop-outlined />
        <span>{{$t('Flow')}}</span>
      </a-menu-item>
      <a-menu-item key="testPage">
        <file-outlined />
        <span>{{$t('CustomeSwitchAntTheme')}}</span>
      </a-menu-item>
      <a-menu-item key="subject">
        <file-outlined />
        <span>科目</span>
      </a-menu-item>
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
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>图表</span>
          </span>
        </template>
        <a-menu-item key="testPageLess">echarts组件</a-menu-item>
        <a-menu-item key="studyPage">学习</a-menu-item>
        <a-menu-item key="training">锻炼</a-menu-item>
        <a-menu-item key="olMap">地图操作</a-menu-item>

      </a-sub-menu>
    
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
  openKeys: ['sub1', 'sub2'],
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