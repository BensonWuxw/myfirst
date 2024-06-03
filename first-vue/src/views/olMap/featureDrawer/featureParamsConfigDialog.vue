<template>
  <a-drawer :visible="open" width="400px" class="feature-info-drawer" :mask="false" :title="title" placement="right" @after-open-change="afterOpenChange" @close="closeDrawer">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="basicStyle" tab="要素样式">
        <FeatureBasicStyle ref="basicStyle"></FeatureBasicStyle>
      </a-tab-pane>
      <a-tab-pane key="other1" tab="其他配置" force-render>其他配置</a-tab-pane>
      <a-tab-pane key="other2" tab="其他属性">其他属性</a-tab-pane>
    </a-tabs>
    <template #footer>
      <a-space>
        <a-button type="primary" @click="saveInfo">保存</a-button>
        <a-button type="default" @click="closeDrawer">取消</a-button>
      </a-space>
    </template>

  </a-drawer>
</template>
<script setup>
import { ref, nextTick } from "vue"
import { featureStyleByType } from "@/olMapUtils/settingStyle.js"
import point1Icon from '@/assets/svgIcons/position.svg'
import FeatureBasicStyle from "./featureBasicStyle.vue"

const open = ref(false)
const title = ref('要素信息配置')
const activeKey = ref('basicStyle')
const basicStyle = ref()
const afterOpenChange = (e) => {
    console.log(e)
}

const closeDrawer = () => {
  open.value = false;
}

const openInfoDrawer = (feature, handleType) => {
  open.value = handleType !== "close";
  if (handleType === "close") return
  nextTick(() =>{
    basicStyle.value.initializeStyleConfig(feature, handleType)
  })
}

const saveInfo = async () => {
  let featureStyleFormState = await basicStyle.value.submitStyleParams()
  open.value = !featureStyleFormState
  console.log(featureStyleFormState)
}

defineExpose({openInfoDrawer})
</script>
<style lang="less" scoped>

</style>