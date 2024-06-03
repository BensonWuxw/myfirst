<template>
  <a-form ref="featureStyleForm" name="custom-validation" :model="featureStyleFormState">
    <template v-if="['point', 'Point', 'multipoint', 'MultiPoint'].includes(featureType)">
      <a-form-item label="显示图标" :name="['iconConfig', 'showIcon']">
        <a-switch v-model:checked="featureStyleFormState.iconConfig['showIcon']">
          <template #checkedChildren><check-outlined /></template>
          <template #unCheckedChildren><close-outlined /></template>
        </a-switch>
      </a-form-item>
      <template v-if="featureStyleFormState.iconConfig['showIcon']">
        <a-form-item label="当前图标" :name="['iconConfig', 'src']">
          <a-popover title="修改图标" trigger="hover">
            <template #content>
              <img class="icon-item" v-for="item in iconList" :key="item" :src="item" @click="modifyIconSrc(item, 'iconConfig')" />
            </template>
            <img :src="featureStyleFormState.iconConfig['src']" />
          </a-popover>
        </a-form-item>
        <a-form-item label="缩放系数" :name="['iconConfig', 'scale']">
          <a-input-number v-model:value="featureStyleFormState.iconConfig['scale']" allowClear :min="0" :max="5" :step="0.1">
            <template #addonAfter>倍</template>
          </a-input-number>
        </a-form-item>
        <a-form-item label="旋转图标" :name="['iconConfig', 'rotateWithView']">
          <a-switch v-model:checked="featureStyleFormState.iconConfig['rotateWithView']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </a-form-item>
        <a-form-item v-if="featureStyleFormState.iconConfig['rotateWithView']" label="旋转角度" :name="['iconConfig', 'rotation']">
          <a-input-number v-model:value="featureStyleFormState.iconConfig['rotation']" :min="-360" :max="360" allowClear>
            <template #addonAfter>°</template>
          </a-input-number>
        </a-form-item>
      </template>
    </template>
    <template v-if="['LineString', 'MultiLineString', 'Polygon', 'MultiPolygon', 'Circle'].includes(featureType)">
      <a-form-item label="线条颜色" :name="['strokeConfig', 'color']">
        <a-input type="color" v-model:value="featureStyleFormState.strokeConfig['color']" allowClear />
      </a-form-item>
      <a-form-item label="线条宽度" :name="['strokeConfig', 'width']">
        <a-input-number v-model:value="featureStyleFormState.strokeConfig['width']" allowClear :min="0" :max="20">
          <template #addonAfter>px</template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="线条类型" :name="['strokeConfig', 'lineDash']">
        <a-select v-model:value="featureStyleFormState.strokeConfig['lineDash']" :options="lineTypeOptions" allowClear></a-select>
      </a-form-item>
    </template>
    <template v-if="['Polygon', 'MultiPolygon', 'Circle'].includes(featureType)">
      <a-form-item label="填充类型" :name="['fillConfig', 'fillType']">
        <a-select v-model:value="featureStyleFormState.fillConfig['fillType']" :options="fillTypeOptions" allowClear></a-select>
      </a-form-item>
      <a-form-item v-if="featureStyleFormState.fillConfig['fillType'] === 'color'" label="填充颜色" :name="['fillConfig', 'color']">
        <a-input type="color" v-model:value="featureStyleFormState.fillConfig['color']" allowClear />
      </a-form-item>
      <a-form-item v-if="featureStyleFormState.fillConfig['fillType'] === 'image'" label="填充图片" :name="['fillConfig', 'src']">
        <a-popover title="修改图标" trigger="hover">
          <template #content>
            <img class="icon-item" v-for="item in iconList" :key="item" :src="item" @click="modifyIconSrc(item, 'fillConfig')" />
          </template>
          <img :src="featureStyleFormState.fillConfig['src']" />
        </a-popover>
      </a-form-item>
      <a-form-item v-if="featureStyleFormState.fillConfig['fillType'] === 'image'" label="图片间距" :name="['fillConfig', 'imageSpacing']">
        <a-input-number v-model:value="featureStyleFormState.fillConfig['imageSpacing']" allowClear :min="0">
          <template #addonAfter>px</template>
        </a-input-number>
      </a-form-item>
    </template>
    <a-form-item label="显示标注" :name="['textConfig', 'showText']">
      <a-switch v-model:checked="featureStyleFormState.textConfig['showText']">
        <template #checkedChildren><check-outlined /></template>
        <template #unCheckedChildren><close-outlined /></template>
      </a-switch>
    </a-form-item>
    <template v-if="featureStyleFormState.textConfig['showText']">
      <a-form-item :name="['textConfig', 'text']" label="标注文字" :rules="[{ required: true, message: '必填!' }]">
        <a-input v-model:value="featureStyleFormState.textConfig['text']" allowClear showCount placeholder="请输入标注文字" />
      </a-form-item>
      <a-form-item label="字体大小" :name="['textConfig', 'fontSize']">
        <a-input-number v-model:value="featureStyleFormState.textConfig['fontSize']" allowClear :min="10" :max="50">
          <template #addonAfter>px</template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="字体颜色" :name="['textConfig', 'fill']">
        <a-input type="color" v-model:value="featureStyleFormState.textConfig['fill']" allowClear />
      </a-form-item>
      <a-form-item label="字体系列" :name="['textConfig', 'fontFamily']">
        <a-select v-model:value="featureStyleFormState.textConfig['fontFamily']" :options="fontFamilyOptions" allowClear></a-select>
      </a-form-item>
      <a-form-item label="字体轮廓" :name="['textConfig', 'strokeConfig', 'color']" :rules="[{ required: true, message: '必填!' }]">
        <a-input type="color" v-model:value="featureStyleFormState.textConfig.strokeConfig['color']" allowClear></a-input>
      </a-form-item>
      <a-form-item label="轮廓宽度" :name="['textConfig', 'strokeConfig', 'width']">
        <a-input-number v-model:value="featureStyleFormState.textConfig.strokeConfig['width']" :min="0" :max="20" allowClear>
          <template #addonAfter>px</template>
        </a-input-number>
      </a-form-item>
      <a-form-item label="旋转标注" :name="['textConfig', 'rotateWithView']">
        <a-switch v-model:checked="featureStyleFormState.textConfig['rotateWithView']">
          <template #checkedChildren><check-outlined /></template>
          <template #unCheckedChildren><close-outlined /></template>
        </a-switch>
      </a-form-item>
      <a-form-item v-if="featureStyleFormState.textConfig['rotateWithView']" label="旋转角度" :name="['textConfig', 'rotation']">
        <a-input-number v-model:value="featureStyleFormState.textConfig['rotation']" :min="-360" :max="360" allowClear>
          <template #addonAfter>°</template>
        </a-input-number>
      </a-form-item>
    </template>
  </a-form>
</template>
<script setup>
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { reactive, ref } from "vue"
import { getFeatureType } from "@/olMapUtils/handleLayerAndFeature.js"
import { fontFamilyArray, incoListArray, fillTypeArray} from "./featureParamsConfig"
import { lineTypeArray, featureDefaultStyle, createLayerOrFeatureStyle, settingFillImage } from "@/olMapUtils/settingStyle.js"

const featureStyleForm = ref()
const currentFeature = ref()
const featureType = ref()

const fontFamilyOptions = reactive(fontFamilyArray)
const lineTypeOptions = reactive(lineTypeArray)
const fillTypeOptions = reactive(fillTypeArray)
const iconList = reactive(incoListArray)

const featureStyleFormState = reactive({ ...featureDefaultStyle })
const basicStyleFromStatus = ref(false)
const initializeStyleConfig = (feature, handleType) => {
  featureType.value = getFeatureType(feature)
  currentFeature.value = feature;
  if (handleType === "draw") {
    if (featureType.value === 'Point') {
      featureStyleFormState.strokeConfig = null;
      featureStyleFormState.fillConfig = null;
    }
  }
  console.log(handleType)
}

const modifyIconSrc = (src, configType) => {
  featureStyleFormState[configType].src = src
}

const submitStyleParams = async () => {
  await featureStyleForm.value.validateFields().then(res => {
    featureStyleFormState.textConfig.placement = featureType.value === 'Point' ? 'point' : 'line';
    if (['polygon', 'multipolygon', 'circle'].includes(featureType.value) && featureStyleFormState.fillConfig.fillType === 'image') {
      settingFillImage(featureStyleFormState, currentFeature.value, 50)
    } else {
      let style = createLayerOrFeatureStyle(featureStyleFormState)
      currentFeature.value.setStyle(style);
    }
    let geometry = currentFeature.value.getGeometry()
    let coordinates = geometry && featureType.value !== 'Circle' ? geometry.getCoordinates() : {center: geometry.getCenter(), radius: geometry.getRadius()}
    featureStyleFormState.coordinates = coordinates
    featureStyleFormState.featureType = featureType.value
    currentFeature.value.set("styleParams", featureStyleFormState);
    basicStyleFromStatus.value = true;
  }).catch((error) => {
    basicStyleFromStatus.value = false;
    console.log(error)
  })
  return basicStyleFromStatus.value ? featureStyleFormState : null
}
defineExpose({ initializeStyleConfig, submitStyleParams})

</script>
<style lang="less" scoped>
.icon-item {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
}
</style>