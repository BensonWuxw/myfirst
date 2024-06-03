<template>
    <div>123123</div>
</template>
<script setup>
import { reactive, ref, nextTick } from "vue"
import { useCommonParamsStore } from "@/store/index"
import { businessLayer } from "./businessModuleConfig"
import { getFeaturesList } from "@/api/map.js"
import { createFeatureCollection, createFeature } from "@/olMapUtils/handleLayerAndFeature.js"

const commonParams = useCommonParamsStore()
const emits = defineEmits(['openInfoDrawer'])

const businessModuleLayer = ref(null)
const businessModuleSource = ref(null)

nextTick(() => {
    businessModuleLayer.value = businessLayer;
    businessModuleSource.value = businessModuleLayer.value.getSource();
    window.olMap.addLayer(businessModuleLayer.value)
    commonParams.setAllBusinessLayer('businessModuleLayer', businessLayer)
    getFeaturesList().then(res => {
        if (res) {
            let circleFeatures = []
            let geoJsonData = res.filter(item => {
                item.type = item.data.featureType.charAt(0).toUpperCase() + item.data.featureType.substring(1, item.data.featureType.length);
                item.coordinates = item.data.coordinates;
                if (item.type !== 'Circle') {
                    return item
                } else {
                    circleFeatures.push(createFeature(item))
                }
 
            })
            businessModuleSource.value.addFeatures(circleFeatures)
            businessModuleSource.value.addFeatures(createFeatureCollection(geoJsonData))
        }
    })
})



</script>
<style lang="less" scoped>

</style>