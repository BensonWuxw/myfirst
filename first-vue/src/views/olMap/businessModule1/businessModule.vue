<template>
    <div></div>
</template>
<script setup>
import { reactive, ref, nextTick } from "vue"
import { useCommonParamsStore } from "@/store/index"
import { businessLayer, popup,  popup2} from "./businessModuleConfig"
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
    window.olMap.addOverlay(popup)
    window.olMap.addOverlay(popup2)
    getFeaturesList().then(res => {
        if (res) {
            let circleFeatures = []
            let geoJsonData = res.filter(item => {
                item.type = item.data.featureType.charAt(0).toUpperCase() + item.data.featureType.substring(1, item.data.featureType.length);
                item.coordinates = item.data.coordinates;
                if (item.type !== 'Circle') {
                    if (item?.data?.iconConfig?.src?.indexOf('.gif') > -1) {
                        let dd = createFeature(item, "gif")
                        businessModuleSource.value.addFeature(dd)
                    }
                    return item
                } else {
                    circleFeatures.push(createFeature(item))
                }
            })
            businessModuleSource.value.addFeatures(circleFeatures)
            businessModuleSource.value.addFeatures(createFeatureCollection(geoJsonData))
        }
    })
    window.olMap.on("singleclick", (evt) => {
        let feature = window.olMap.forEachFeatureAtPixel(evt.pixel, function (feature) 
        {console.log(evt.pixel)
            return feature;
        });
       if (feature) {
        let coordinate = feature.getGeometry().getFirstCoordinate();
        let htmlContent = `<div>12312313</div>`
        popup.show(coordinate, htmlContent)
       }
    })
})



</script>
<style lang="less" scoped>

</style>