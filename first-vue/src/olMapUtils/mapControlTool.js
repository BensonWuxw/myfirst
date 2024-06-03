import {ScaleLine, Attribution, FullScreen, MousePosition, OverviewMap, ZoomSlider, Control} from 'ol/control';
import {createStringXY} from 'ol/coordinate.js';

/**
 * 比例尺
 * */ 
const ScaleLineControl = new ScaleLine({
    // className: 'scale-line-box',
    minWidth: 64,
    maxWidth: 200,
    units: 'metric', // Units{'degrees'} {'imperial'} {'nautical'} {'metric'} {'us'}
    bar: false,
    steps: 4,
    text: "",
    // dpi: 10000
})


const AttributionControl = new Attribution({
    // className: 'attri-bution-box',
    // collapsible: true,
    // collapsed: true,
    // tipLabel: 'test1',
    // collapseLabel: 'test2',
    label: 'test3'
})

/**
 * 全屏
 * */ 
const FullScreenControl = new FullScreen({
    // className: '',
    // label: '全屏',
    // labelActive: '取消',
    activeClassName: 'cancel',
    inactiveClassName: 'inactive',
    tipLabel: '全屏窗口',
})

/**
 * 鼠标位置
 * */ 
const MousePositionControl = new MousePosition({
    className: 'mouse-position-box',
    coordinateFormat: createStringXY(4),
    projection: '',
    target: ''
})

/**
 * 小地图
 * */ 
const OverviewMapControl = new OverviewMap({
    rotateWithView: true
})


/**
 * 缩放地图控制条
 * */ 
const ZoomSliderControl = new ZoomSlider({
    duration: 10000,
})

/**
 * 自定义控件
 * @params element 控件容器
 * */ 
export const addCustomControl = (element) => {
    return new Control({
        element: element,
    })
}

export default [ScaleLineControl, AttributionControl, FullScreenControl, MousePositionControl, ZoomSliderControl]