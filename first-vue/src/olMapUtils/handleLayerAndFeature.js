import TileLayer from 'ol/layer/Tile'
import { XYZ, BingMaps } from 'ol/source';
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Feature from 'ol/Feature.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import {Polygon, Point, Circle, LineString} from 'ol/geom.js';
import mapConfig from "./layerConfig.js"
import { createLayerOrFeatureStyle, createGifImg } from "./settingStyle"

/**
 * 创建底图图层
 * @params showName 地图图层名称根据 showname的值设置图层的visible 是否可见 可选择'TDT_XZT', 'TDT_YXT', 'TDT_DXT', 'ARCGIS_YXT', 'GD_XZT', 'GD_DXT', 'BING_XZT', 'BING_YXT'
 * */
export function createMapUnderLayer(showName) {
    let allUnderLayers = [];
    if (mapConfig && mapConfig.underLayersConfig) {
        let layersConfigs = mapConfig.underLayersConfig;
        Object.keys(mapConfig.underLayersConfig).forEach(layerName => {
            let configOptions = layersConfigs[layerName]
            let layer0 = new TileLayer({
                className: `ol-${layerName}`,
                opacity: 1,
                visible: showName === layerName,
                zIndex: configOptions.zIndex ? configOptions.zIndex : 1,
                layerType: 'under-layer',
                layerName: layerName,

            })
            let layer1 = new TileLayer({
                className: `ol-${layerName}`,
                opacity: 1,
                visible: showName === layerName,
                zIndex: configOptions.zIndex ? configOptions.zIndex : 1,
                layerType: 'under-layer',
                layerName: layerName

            })
   
            if (configOptions.url instanceof Array) {
                let source0 = new XYZ({ crossOrigin: 'anonymous', url: configOptions.url[0]});
                let source1 = new XYZ({ crossOrigin: 'anonymous', url: configOptions.url[1]});
                layer0.setSource(source0)
                layer1.setSource(source1)
                allUnderLayers.push(layer0, layer1)
            } else {
                let source = configOptions.type === 'BING' ? 
                new BingMaps({ crossOrigin: 'anonymous', culture: 'zh-CN', key: configOptions.url, imagerySet: configOptions.layer }) :
                new XYZ({ crossOrigin: 'anonymous', url: configOptions.url })
                layer0.setSource(source)
                allUnderLayers.push(layer0)
            }
        })
    }
    return allUnderLayers
}

/**
 * 创建业务图层
 * 
 * */ 
export function createBussinessLayer(layerConfig) {
    if (typeof layerConfig !== 'object') return
    return new VectorLayer({
        ...layerConfig,
        source: new VectorSource({wrapX: false})
    })
}

/**
 * 切换地图底图服务
 * @params layerName 地图底图名称 可选择'TDT_XZT', 'TDT_YXT', 'TDT_DXT', 'ARCGIS_YXT', 'GD_XZT', 'GD_DXT', 'BING_XZT', 'BING_YXT'
 * */
export function switchMapUnderLayer(layerName) {
    if (layerName && window.olMap) {
        const allLayers = window.allUnderLayers || window.olMap.getLayers().getArray()
        allLayers.map(layer => layer.setVisible(layer.values_.layerType === 'under-layer' && layer.values_.layerName === layerName))
    } 
}

/**
 * 根据feature实例获取feature的类型，并转化为小写字符串
 * @param feature 当前操作的feature实例对象
 */ 
export const getFeatureType = (feature) => {
    let featureGeometry = feature && feature.getGeometry() ? feature.getGeometry() : null
    let featureType = featureGeometry && featureGeometry.getType() ? featureGeometry.getType() : ''
    return featureType
}

/**
 * 图层feature点数据为icon或者text时，地图缩放其大小不会跟随变化，修改scale可实现
 * */ 
export const iconTextZoom = (layer, scale) => {
    if (layer) {
        let layerStyle = layer.getStyle();
        if (layerStyle && layerStyle.getImage()) {
            layerStyle.getImage().setScale(scale);  //先获取图层样式，如果图层设置了icon默认的样式，修改图层默认icon的scale
        }
        let source = layer.getSource()
        let layerIncludesFeatures = source ? source.getFeatures() : '';
        layerIncludesFeatures.map(feature => {
            let featureType = getFeatureType(feature);
            if (['point', 'multipoint'].includes(featureType)){
                let featureStyle = feature.getStyle();
                featureStyle && featureStyle.getImage() ? featureStyle.getImage().setScale(scale) : ''
                featureStyle && featureStyle.getText() ? featureStyle.getText().setScale(scale) : ''
            }
        })
    } else {
        console.error(layer, scale)
    }
    
}

// 创建要素
export const createFeature = (data, type) => {
    let geometryData = null;
    console.error(data)

    if (!data) return null;
    if (['circle', 'Circle'].includes(data.type)) {
        if (data.coordinates.center instanceof Array && data.coordinates.radius) {
            geometryData = new Circle(data.coordinates.center, data.coordinates.radius)
        } else {
            console.error('圆数据不是标准数据')
            return null
        }
        
    } else {
        if (data.coordinates && data.coordinates instanceof Array) {
            let coordinatesData = {
                coordinates: data.coordinates
            }
            let geometry = null
            switch(data.data.featureType) {
                case 'Point':
                    geometry = new Point(data.coordinates) 
                    break;
                case "Polygon":
                    geometry = new Polygon(coordinatesData) 
                    break;
                case "LineString":
                    geometry = new LineString(coordinatesData) 
                    break;
            }
            geometryData = geometry
        } else {
            console.error('coordinates不是标准数据')
            return null
        }
    }
    
    let feature = new Feature({ geometry: geometryData });
    feature.set('name', data.name)
    feature.set('id', data.id)
    if (type === 'gif') {
        createGifImg(data.data.iconConfig, feature)
    } else {
        feature.setStyle(createLayerOrFeatureStyle(data.data, feature))
    }
    return feature
    
}

// 加载FeatureCollection
export const createFeatureCollection = (data, featureTypeKey, coordinatesKey) => {
    const geojsonObject = {
        'type': 'FeatureCollection',
        'crs': {
          'type': 'name',
          'properties': {
            'name': 'EPSG:3857',
          },
        },
        'features': []
    }
    geojsonObject.features = data.map(item => {
        return {
            'type': 'Feature', 
            'geometry': {
                'type': item[featureTypeKey] || item.type,
                'coordinates': item[coordinatesKey] || item.coordinates,
            },
            'properties': {
                data: item
            }
        }
    })
    let features = new GeoJSON().readFeatures(geojsonObject)
    features.map(featrue => {
        featrue.setStyle(createLayerOrFeatureStyle(featrue.values_.data.data))
    })
    return  features
}