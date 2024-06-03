<template>
    <ul class="draw-tool-list">
        <a-tooltip v-for="item in drawList" :key="item.featureType" :title="item.title" placement="bottom">
            <li @click="drawFeature(item.featureType)">
                <svg-icon :iconName="item.iconName" :size="20" :color="'black'"></svg-icon>
            </li>
        </a-tooltip>
    </ul> 
</template>
<script setup>
import { reactive, ref, nextTick } from "vue"
import { startBasicDrawing, removeDrawing } from "@/olMapUtils/interaction"
import { useCommonParamsStore } from "@/store/index"
import { drawerLayer, toolList, drawingStyle} from "./drawToolConfig"
const commonParams = useCommonParamsStore()
const emits = defineEmits(['openInfoDrawer'])
const drawList = reactive(toolList)

const basicDrawingLayer = ref(null)
const basicDrawingSource = ref(null)

nextTick(() => {
    basicDrawingLayer.value = drawerLayer;
    basicDrawingSource.value = basicDrawingLayer.value.getSource();
    window.olMap.addLayer(basicDrawingLayer.value)
    commonParams.setAllBusinessLayer('basicDrawLayer', drawerLayer)
})

const currentDraw = ref(null)
const drawFeature = (featureType) => {
    if (featureType !== 'clearup') {
        currentDraw.value = startBasicDrawing(basicDrawingSource.value, featureType, drawEnd, drawingStyle)
    } else {
        emits('openInfoDrawer', null, 'close')
        basicDrawingSource.value.clear()
        removeDrawing()
    }
}
const drawEnd = (evt) => {
    let feature = evt.feature;
    feature.set('dataType', 'basic_draw_tool')
    emits('openInfoDrawer', feature, 'draw')
}


</script>
<style lang="less" scoped>
.draw-tool-list{
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 100;
    display: flex;
    background: #fff;
    transform: translateX(-50%);
    li{
        width: 66px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            background: #f0f;
            color: #fff;
            span{
                color: #fff!important;
            }
        }
    }
}
</style>