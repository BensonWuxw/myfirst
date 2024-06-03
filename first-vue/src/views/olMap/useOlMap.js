import Map from 'ol/Map';
import View from 'ol/View';
import { createMapUnderLayer, createBussinessLayer } from "@/olMapUtils/handleLayerAndFeature"
import mapControlTool, { addCustomControl } from "@/olMapUtils/mapControlTool"
import { ref } from "vue"
import {useCommonParamsStore} from "@/store/index"
/**
 * 初始化地图
 * @params mapConfig 地图配置信息对象，包括target及view参数配置
 * @params mapConfig.target 地图渲染的容器id名
 * @params mapConfig.layerName 地图底图服务名，切换地图服务修改此配置即可，可选择'TDT_XZT', 'TDT_YXT', 'TDT_DXT', 'ARCGIS_YXT', 'GD_XZT', 'GD_DXT', 'BING_XZT', 'BING_YXT'
 * @params mapConfig.customControlBox 地图自定义控件容器，element元素，未设置时不触发自定义控件操作
 * @params mapConfig.center 地图初始化中心点坐标
 * @params mapConfig.zoom 地图初始化缩放级别
 * @params mapConfig.maxZoom 地图最大放大级别
 * @params mapConfig.minZoom 地图最小缩放级别
 * @params mapConfig.projection 地图坐标类型 默认经纬度 'EPSG:4326'  可选EPSG:3857 墨卡托投影（伪墨卡托投影）
 * */ 
const useOlMap =  (mapConfig) => {
    let allLayers = createMapUnderLayer(mapConfig.layerName)
    mapConfig.customControlBox ? mapControlTool.push(addCustomControl(mapConfig.customControlBox)) : ''
    let olMap = new Map({
        target: mapConfig.target,
        layers: allLayers,
        view: new View({
            center: mapConfig.center,
            zoom: mapConfig.zoom,
            maxZoom: mapConfig.maxZoom || 15,
            minZoom: mapConfig.minZoom || 2,
            projection: mapConfig.projection || 'EPSG:4326',
            // extent: mapConfig.extent || [], // 锁定在此区域内
        }),
        controls: mapControlTool,
    });
    window.olMap = olMap;
    window.allUnderLayers = createMapUnderLayer(mapConfig.layerName);
    const commonParams = useCommonParamsStore()
    commonParams.setOlMap(olMap)
    commonParams.setAllUnderLayers(createMapUnderLayer(mapConfig.layerName))
    return olMap
}

export default useOlMap