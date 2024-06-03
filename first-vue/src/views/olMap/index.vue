<template>
<div class="ol-map-container" id="ol-map-container" ref="olMapBox">
    <div class="custom-control-box" ref="customControlBox">
        <draw-tool-bar @openInfoDrawer="openInfoDrawer"></draw-tool-bar>
        <measureToolBar></measureToolBar>
    </div>
</div>
<businessModule1 @openInfoDrawer="openInfoDrawer"></businessModule1>
<feature-config-drawer ref="featureConfig"></feature-config-drawer>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue"
import {useCommonParamsStore} from "@/store/index"
import { iconTextZoom } from "@/olMapUtils/handleLayerAndFeature.js"
import useOlMap from "./useOlMap"
import drawToolBar from "./drawTool/drawToolBar.vue"
import measureToolBar from "./measureTool/measureToolBar.vue"
import businessModule1 from "./businessModule1/businessModule.vue"

import featureConfigDrawer from './featureDrawer/featureParamsConfigDialog.vue'
const featureConfig = ref()
const olMapBox = ref()
const olMap = ref()
const customControlBox = ref()
const commonParams = useCommonParamsStore()

onMounted(() => {
    const mapConfig = {
        target: 'ol-map-container',
        center: [104.88925, 34.02372],
        zoom: 5,
        layerName: 'ARCGIS_YXT',
        customControlBox: customControlBox.value
    }
    olMap.value = useOlMap(mapConfig);
    olMap.value.on("singleclick", mapSingleClick);
    olMap.value.on("dblclick", mapDobuleClick);
    olMap.value.on("moveend", mapMoveEnd);
    olMap.value.on("pointermove", mapPointerMove);
})

const mapSingleClick = (event) => {
    let feature = olMap.value.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    });
    if (feature && feature.values_ && feature.values_.dataType === 'basic_draw_tool') {
        openInfoDrawer(feature, 'singleClick')
    }
}

const mapDobuleClick = (event) => {
    let feature = olMap.value.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    });
    if (feature && feature.values_ && feature.values_.dataType === 'basic_draw_tool') {
        console.log(feature)

        openInfoDrawer(feature, 'dobuleClick')
    }
}

// 地图缩放，绘制图层的icon也随着地图缩放，只是图层默认，feature单独设置了icon的要单独处理，
const mapMoveEnd = (event) => {
    let zoom = olMap.value.getView().getZoom()
    let basicDrawingLayer = commonParams.allBusinessLayers.basicDrawLayer;
    iconTextZoom(basicDrawingLayer, zoom / 2)
}

const mapPointerMove = (event) => {
    let feature = olMap.value.forEachFeatureAtPixel(event.pixel, function (feature) {
        return feature;
    });
    if (feature) {
        olMap.value.getTargetElement().style.cursor = "pointer"
    } else {
        olMap.value.getTargetElement().style.cursor = "default"
    }
}

const openInfoDrawer = (feature, handleType) => {
    featureConfig.value.openInfoDrawer(feature, handleType)
}

</script>
<style lang="less" scoped>
.ol-map-container{
    width: 100%;
    height: 100%;
    position: relative;
}
</style>