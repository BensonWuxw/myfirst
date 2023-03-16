

<template>
<span>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      <img src="/vite.svg">
    </a>
    <template #overlay>
      <a-menu @click="clickUserInfo">
        <a-menu-item key="settting">
          界面设置
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="loginout">退出登录</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <a-drawer title="界面设置" v-model:visible="drawerVisible">
    <template #footer>
      <a-button style="margin-right: 8px" @click="drawerVisible = false">关闭</a-button>
      <a-button type="primary" @click="switchTheme">确定</a-button>
    </template>
    <color-picker isWidget v-model:pureColor="pureColor" v-model:gradientColor="gradientColor" @update:pureColor="switchTheme"  @gradientColorChange="switchTheme"/>
  </a-drawer>
</span>
</template>
<script setup lang="ts">
  import { SettingOutlined } from '@ant-design/icons-vue';
  import { ref, nextTick } from 'vue';
  import { ConfigProvider, message } from 'ant-design-vue';
  const drawerVisible = ref(false)
  const pureColor = ref()
  const gradientColor = ref()
  const clickUserInfo = (e:any) => {
    if (e.key === "settting") {
      drawerVisible.value = true;
    }
  }
  const switchTheme = () => {
    nextTick(() => {
      message.success("切换成功")
      ConfigProvider.config({
      theme: {
        primaryColor: pureColor.value,
        successColor:  pureColor.value,
        errorColor: pureColor.value,
        warningColor: pureColor.value,
      },
    })
  });
  }
</script>



