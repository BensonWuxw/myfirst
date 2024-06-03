
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
const drawerLayerConfig = {
    className: 'basic-drawing-layer',
    opacity: 1,
    zIndex: 10,
    minZoom: 1,
    maxZoom: 20,
    background: 'transparent',
    style: createLayerOrFeatureStyle(defaultStyle),
    properties: {name: '基础绘图图层', layerType: 'business'},
}

// 当前图层绘制操作的样式
const drawingStyleConfig = {
    circleConfig: {
        radius: 8,
        fill: "red",
        strokeConfig: {
            width: 2,
            color: '#00ffff'
        }
    },
    strokeConfig: {
        width: 2,
        color: '#00ffff'
    }
}

 export const toolList = [
    {iconName: 'point', title: "绘制点", featureType: 'Point'},
    {iconName: 'line', title: "绘制线", featureType: 'LineString'},
    {iconName: 'polygon', title: "绘制面", featureType: 'Polygon'},
    {iconName: 'circle', title: "绘制圆", featureType: 'Circle'},
    {iconName: 'rectangle', title: "绘矩形", featureType: 'Square'},
    {iconName: 'clearup', title: "清空", featureType: 'clearup'},
]
export const drawingStyle = createLayerOrFeatureStyle(drawingStyleConfig)
export const drawerLayer = createBussinessLayer(drawerLayerConfig)