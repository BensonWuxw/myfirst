

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
    <a-form>
      <a-form-item label="主题颜色">
        <input type="color" v-model="pureColor" @change="switchTheme">
      </a-form-item>
      <a-form-item label="菜单展示方向">
        <a-switch v-model:checked="modeStatus" checked-children="垂直" un-checked-children="水平" @change="changeMenuSetting(1)" />
      </a-form-item>
      <a-form-item label="菜单主题">
        <a-switch v-model:checked="themeStatus" checked-children="暗黑" un-checked-children="浅色" @change="changeMenuSetting(2)" />
      </a-form-item>

    </a-form>
  </a-drawer>
</span>
</template>
<script setup lang="ts">

  import { SettingOutlined } from '@ant-design/icons-vue';
  import { ref, nextTick } from 'vue';
  import { ConfigProvider, message  } from 'ant-design-vue';
import { useCommonParamsStore } from '../store';
  const commonParams = useCommonParamsStore()
  const modeStatus = ref(commonParams.mode === 'inline')
  const themeStatus = ref(commonParams.theme === 'dark')
  const drawerVisible = ref(false)
  const pureColor = ref()

  const clickUserInfo = (e:any) => {
    if (e.key === "settting") {
      drawerVisible.value = true;
    }
  }
  const switchTheme = () => {
    nextTick(() => {
      // message.success("切换成功")
      ConfigProvider.config({
        // prefixCls: 'dark',
      theme: {
        primaryColor: pureColor.value,
        successColor:  pureColor.value,
        errorColor: pureColor.value,
        warningColor: pureColor.value,
      },
    })
    drawerVisible.value = false;
  });
  }
  const changeMenuSetting = (type: number) => {
    if (type === 1) {
      commonParams.setMode(modeStatus.value ? "inline" : "vertical")
    } else {
      commonParams.setTheme(themeStatus.value ? "dark" : "light")
    }
  }

</script>



