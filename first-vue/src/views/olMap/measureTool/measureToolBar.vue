<template>
    <ul class="measure-tool-list">
        <a-tooltip v-for="item in measureList" :key="item.featureType" :title="item.title" placement="bottom">
            <li @click="drawMeasureFeature(item.featureType)"><svg-icon :iconName="item.iconName" :size="20" :color="'black'"></svg-icon></li>
        </a-tooltip>
    </ul> 
</template>
<script setup>
import { reactive, ref, nextTick } from "vue"
import { startBasicDrawing,  removeDrawing, modifyHandle, removeModify} from "@/olMapUtils/interaction"
import { useCommonParamsStore } from "@/store/index"
import { toolList, measureLayer, styleFunction, modifyStyle } from "./measureConfig"

const commonParams = useCommonParamsStore()

const measureList = reactive(toolList)
const measureDrawLayer = ref(null)
const measureSource = ref(null)
const featureType = ref()
const modify = ref(null)
const tip = ref('开始测量')

nextTick(() => {
    measureDrawLayer.value = measureLayer;
    measureSource.value = measureDrawLayer.value.getSource();
    window.olMap.addLayer(measureDrawLayer.value)
})

const currentDraw = ref(null)

const setDrawStyle = (feature) => {
    return styleFunction(feature, true, featureType.value, tip.value)
}
const drawMeasureFeature = (type) => {
    tip.value = `开始测量${type === 'LineString' ? '距离' :  '面积'}`
    if (type === 'clearup') {
        measureSource.value.clear();
        removeDrawing();
        removeModify();
        // modify.value.setActive(false)
    } else {
        featureType.value = type
        currentDraw.value = startBasicDrawing(measureSource.value, type, drawEnd, setDrawStyle)
        currentDraw.value.on("drawstart", (evt) => {
            tip.value = `双击结束测量${type === 'LineString' ? '距离' :  '面积'}`
            if (modify.value) {
                modify.value.setActive(false)
            }
        })
    }
}

const drawEnd = (evt) => {
    let feature = evt.feature
    feature.set('dataType', 'measure_tool')
    modify.value = modifyHandle(measureSource.value, modifyStyle)
    modify.value.setActive(true)
}


</script>
<style lang="less" scoped>
.measure-tool-list{
    position: absolute;
    left: 50%;
    top: 40px;
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