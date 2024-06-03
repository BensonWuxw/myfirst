import Draw, { createBox, createRegularPolygon } from 'ol/interaction/Draw.js';
import { Modify } from 'ol/interaction.js';
import { Polygon, LineString, Point, Circle } from 'ol/geom'

/**
 * 图层绘制方法
 * @ params drawingObj 保存draw和modify对象 始终保持只有地图上只有一个绘制或者修改操作，统一处理，避免连续点击多次绘制一起绘制要素
 * */ 
let drawingObj = null, modifyingObj = null;
export const startBasicDrawing  = (source, featureType, drawEnd, style) => {
    let draw = null;
    if (featureType !== 'clearup') {
        removeDrawing()
        // removeModify()
        let geometryFunction;
        if (featureType === 'Square') {
            featureType = 'Circle';
            geometryFunction = createRegularPolygon(4);
        } else if (featureType === 'Box') {
            featureType = 'Circle';
            geometryFunction = createBox();
        } 

        draw = new Draw({
            stopClick: true,
            source: source,
            type: featureType,
            style: style,
            geometryFunction: geometryFunction,
        });
        window.olMap.addInteraction(draw);
        drawingObj = draw
        draw.on('drawend', (evt) => {
            drawEnd(evt)
            removeDrawing()
        })
    } else {
        window.olMap.addInteraction(drawingObj); 
    }
    return draw
} 

export const modifyHandle = (source, style) => {
    removeModify()
    modifyingObj = new Modify({source: source, style: style}) 
    window.olMap.addInteraction(modifyingObj); 
    return modifyingObj
}

export const removeDrawing = (type) => {
    window.olMap.removeInteraction(drawingObj)
    drawingObj = null;
}

export const removeModify = () => {
    window.olMap.removeInteraction(modifyingObj)
    modifyingObj = null;
}