
import { createBussinessLayer } from "@/olMapUtils/handleLayerAndFeature.js"
import { createLayerOrFeatureStyle } from "@/olMapUtils/settingStyle.js"

import pointIcon from '@/assets/svgIcons/point_map.svg'

// 图层要素默认样式
const defaultStyle = {
   iconConfig: {
       src: pointIcon,
       scale: 1,
       showIcon: true,
   },
   strokeConfig: {
       width: 2,
       color: '#00ffff'
   },
   fillConfig: {
       color: '#00ffff'
   }
}

// 图层配置
const businessLayerConfig = {
    className: 'business-module-1',
    opacity: 1,
    zIndex: 10,
    minZoom: 1,
    maxZoom: 20,
    background: 'transparent',
    style: createLayerOrFeatureStyle(defaultStyle),
    properties: {name: '业务模块1图层', layerType: 'business'},
}

export const businessLayer = createBussinessLayer(businessLayerConfig)