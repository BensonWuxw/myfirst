import { Fill, Stroke, Text, Icon, Style } from 'ol/style';
import CircleStyle from 'ol/style/Circle.js';

import pointIcon from '@/assets/svgIcons/point_map.svg'
import point1Icon from '@/assets/svgIcons/position.svg'
import safeIcon from '@/assets/svgIcons/safe.svg'
import point2Icon from '@/assets/svgIcons/point.svg'

const fillDefaultColor = '#000000'
const strokeDefaultColor = '#ff0000'
const textDefaultColor = '#ffff00'


// 线条类型配置
export const lineTypeArray = [
    { label: '——————————', value: 0, lineDash: [0, 0] },
    { label: '-------------------------', value: 1, lineDash: [5, 5, 5, 5] },
    { label: '—— —— —— —— —', value: 2, lineDash: [40, 5, 40, 5] },
    { label: '——  -  ——  -  ——  -  —', value: 3, lineDash: [40, 5, 5, 5] },
]

// 默认样式
export const featureDefaultStyle = {
    strokeConfig: {
        color: strokeDefaultColor,
        width: 1,
        lineDash: 0
    },
    fillConfig: {
        color: fillDefaultColor,
        fillType: 'color',
        src: point2Icon,
        imageSpacing: 50,
    },
    circleConfig: {
        fill: fillDefaultColor,
        radius: 8,
        scale: 1,
        strokeConfig: {
            color: strokeDefaultColor,
            width: 1,
        },
    },
    textConfig: {
        showText: false,
        fontSize: 10,
        fontFamily: '宋体',
        fontWeight: 'bold',
        scale: 1,
        rotateWithView: true,
        rotation: 0,
        text: '',
        padding: [0, 0, 0, 0],
        fill: textDefaultColor,
        placement: 'point',
        strokeConfig: {
            color: strokeDefaultColor,
            width: 1,
        },
    },
    iconConfig: {
        showIcon: true,
        src: pointIcon,
        scale: 1,
        rotateWithView: true,
        rotation: 0,
    }
}


// 弧度转角度
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// 角度转弧度
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * 设置填充
 * @params color 填充的颜色
 * */
const setFill = (color) => {
    return new Fill({
        color: color || fillDefaultColor
    })
}

/**
 * 设置轮廓属性
 * @params color 边框颜色
 * @params lineCap 线段两端的样式，可以设置成butt，round，square
 * @params lineJoin 线条连接处的样式，可以设置成bevel，round，miter
 * @params lineDash 虚线 [10 10]
 * @params lineDashOffset 虚线偏移值
 * @params miterLimit 连接处的限制值
 * @params width 轮廓的宽度
 * */
const setStroke = (params) => {
    let strokeConfig = params || featureDefaultStyle.strokeConfig;
    let lineDash = strokeConfig.lineDash ? lineTypeArray[strokeConfig.lineDash].lineDash : lineTypeArray[0].lineDash
    return new Stroke({
        color: strokeConfig.color || strokeDefaultColor,
        lineCap: strokeConfig.lineCap || 'round',   //线条帽样式：butt, round, or square.
        lineDash: lineDash,
        lineDashOffset: strokeConfig.lineDashOffset || 0,
        miterLimit: strokeConfig.miterLimit || 10,
        width: strokeConfig.width || 1
    })
}

/**
 * 设置圆行样式
 * @params fill 填充的颜色
 * @params radius 圆的半径
 * @params stroke 轮廓样式
 * @params scale 缩放系数
 * 
 * */
const setCircleStyle = (params) => {
    let circleConfig = params || featureDefaultStyle.circleConfig
    let strokeConfig = circleConfig && circleConfig.strokeConfig || featureDefaultStyle.strokeConfig
    return new CircleStyle({
        fill: setFill(circleConfig.fill),
        radius: circleConfig.radius || 8,
        stroke: setStroke(strokeConfig),
        scale: circleConfig.scale || 1
    })
}

/**
 * 设置文本属性
 * @params font 字体样式
 * @params maxAngle 当placement 设置为line时,允许相邻字符之间有最大角度。期望值以弧度为单位,默认值为45°(Math.PI/4)
 * @params offsetX：水平偏移值
 * @params offsetY：垂直偏移值。
 * @params overflow：是否允许溢出。
 * @params placement：文本放置方向 {'point'} {'line'}。
 * @params scale：缩放比例。
 * @params repeat: 重复间隔。设置后，文本将以该间隔重复，该间隔以像素为单位指定两个文本锚点之间的距离。仅当放置设置为“线”时可用。覆盖“textAlign”。
 * @params rotateWithView：是否随视图旋转形状。
 * @params rotation：弧度旋转。
 * @params text：文本信息。
 * @params textAlign： 文本对齐方式。left, right, center, end , start。
 * @params fill：填充样式。
 * @params stroke：轮廓样式
 * @params backgroundFill：背景填充样式。
 * @params backgroundStroke：背景边框样式。
 * @params padding：内边距。
 * @params declutterMode： 
 * 
 * */
const setText = (params) => {
    let textConfig = params || featureDefaultStyle.textConfig;
    if (textConfig.showText) {
        let fontSize = textConfig.fontSize || 10;
        let fontFamily = textConfig.fontFamily || '宋体';
        let fontWeight = textConfig.fontWeight || 'bold';
        let font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        let rotation = textConfig.rotateWithView && textConfig.rotation && textConfig.rotation > 0 ? degreesToRadians(textConfig.rotation) : 0
        return new Text({
            font: font,
            maxAngle: textConfig.maxAngle || Math.PI / 4,
            offsetX: textConfig.offsetX || 0,
            offsetY: textConfig.offsetY || 0,
            overflow: textConfig.overflow || false,
            placement: textConfig.placement || 'line',
            repeat: textConfig.repeat || undefined,
            scale: textConfig.scale || undefined,
            rotateWithView: textConfig.rotateWithView || false,
            rotation: rotation,
            text: textConfig.text || '',
            textAlign: textConfig.textAlign || '',
            textBaseline: textConfig.textBaseline || 'middle',
            padding: textConfig.padding || [0, 0, 0, 0],
            fill: setFill(textConfig.fill),
            stroke: setStroke(textConfig.strokeConfig),
        })
    } else {
        return null;
    }

}

/**
 * 设置icon属性
 * @params anchor：设置图标的锚点，默认为图形的中心点，[0.5, 0.5]
 * @params anchorOrigin：描点偏移的位置，包括bottom-left, bottom-right, top-left , top-right。
 * @params anchorXUnits：指定锚点X的单位，默认为百分比，也可以使用px。
 * @params anchorYUnits：指定锚点Y的单位，默认为百分比，也可以使用px。
 * @params color：为图标设置颜色，如果没指定，将保持原有的颜色。
 * @params crossOrigin：跨域属性，如果是为canvas渲染器来加载图像，必需设置该属性。
 * @params img：设置Image对象，如果没有设置src必须为已加载的Image对象，并且需要指定size值  |HTMLImageElement | HTMLCanvasElement | ImageBitmap | undefined。
 * @params offset：设定图片的偏移值。
 * @params displacement：变形值。
 * @params offsetOrigin：设置原点偏移，bottom-left, bottom-right, top-left,top-right。
 * @params opacity：设置透明度。
 * @params scale：设置缩放值。
 * @params rotateWithView：是否随视图旋转形状。
 * @params rotation：旋转角度。
 * @params size：图标尺寸。
 * @params imgSize：Image `对象的尺寸。
 * @params src：图片地址。 
 * 
 * */
const setIcon = (params) => {
    let iconConfig = params || featureDefaultStyle.iconConfig;
    if (iconConfig.showIcon) {
        let rotation = iconConfig.rotateWithView && iconConfig.rotation && iconConfig.rotation > 0 ? degreesToRadians(iconConfig.rotation) : 0
        return new Icon({
            anchor: iconConfig.anchor || [0.5, 0.5],
            anchorOrigin: iconConfig.anchorOrigin || 'top-left',
            img: iconConfig.img || undefined,
            opacity: iconConfig.opacity || 1,
            width: iconConfig.width || undefined,
            height: iconConfig.height || undefined,
            repeat: iconConfig.repeat || undefined,
            scale: iconConfig.scale || 1,
            rotateWithView: iconConfig.rotateWithView || false,
            rotation: rotation,
            src: iconConfig.src || '',
            size: iconConfig.size || undefined,
            textBaseline: iconConfig.textBaseline || 'middle',
            padding: iconConfig.padding || [0, 0, 0, 0],
        })
    } else {
        return null
    }
}

/**
 * 生成要素或图层通用样式
 * */
export const createLayerOrFeatureStyle = (styleConfig) => {
    let imageStyle = styleConfig.iconConfig ? setIcon(styleConfig.iconConfig) : setCircleStyle(styleConfig.circleConfig)
    if (styleConfig.iconConfig && styleConfig.iconConfig.showIcon === false && styleConfig.textConfig && styleConfig.textConfig.showText === false) {
        imageStyle = setCircleStyle(styleConfig.circleConfig)
    }
    let config = { image: imageStyle };
    styleConfig.fillConfig ? config.fill = setFill(styleConfig.fillConfig.color) : ''
    styleConfig.strokeConfig ? config.stroke = setStroke(styleConfig.strokeConfig) : ''
    styleConfig.textConfig ? config.text = setText(styleConfig.textConfig) : ''
    return new Style(config)
}

// 填充类型feature，使用图片填充样式设定
export const settingFillImage = (styleParams, feature) => {
    let cnv = document.createElement('canvas');
    let ctx = cnv.getContext('2d');
    let img = new Image();
    let spacing = styleParams.fillConfig.imageSpacing || 50;
    img.crossOrigin = 'anonymous';
    img.src = styleParams.fillConfig.src;
    img.onload = function () {
        // 创建一个新的 Canvas 用于绘制带有透明间隔的图案
        let patternCanvas = document.createElement('canvas');
        let patternCtx = patternCanvas.getContext('2d');

        // 设置 patternCanvas 的大小
        patternCanvas.width = img.width + spacing;
        patternCanvas.height = img.height + spacing;

        // 在 patternCanvas 上绘制原始图片
        patternCtx.drawImage(img, 0, 0, img.width, img.height);

        // 设置透明间隔
        patternCtx.fillStyle = 'rgba(0, 0, 0, 0)'; // 透明颜色
        patternCtx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

        // 使用 patternCanvas 创建图案填充

        let pattern = ctx.createPattern(patternCanvas, 'repeat');

        // 设置样式
       
        let styleConfig = {
            fillConfig: {
                color: pattern
            },
            strokeConfig: styleParams.strokeConfig
        }
        let style = createLayerOrFeatureStyle(styleConfig)

        // 设置样式到要素
        feature.setStyle(style);
    };
}


export const featureStyleByType = (type, styleConfig) => {
    if (type) {
        let featureType = type.toLowerCase()
        let featureStyleConfig = styleConfig ? styleConfig : {}
        if (['point', 'multipoint'].includes(featureType)) {
            featureStyleConfig = {
                iconConfig: {
                    showIcon: true,
                    src: point1Icon,
                    scale: 2,
                }
            }
        } else if (['linestring', 'multilinestring'].includes(featureType)) {
            featureStyleConfig = {
                strokeConfig: {
                    width: 2,
                    color: '#0ff'
                }
            }
        } else if (['polygon', 'multipolygon'].includes(featureType)) {
            featureStyleConfig = {
                strokeConfig: {
                    width: 2,
                    color: '#0ff'
                },
                fillConfig: {
                    color: 'red'
                }
            }
        }
        return createLayerOrFeatureStyle(featureStyleConfig)
    }

}
