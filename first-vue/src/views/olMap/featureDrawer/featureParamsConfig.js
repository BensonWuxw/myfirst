import pointIcon from '@/assets/svgIcons/point_map.svg'
import point1Icon from '@/assets/svgIcons/position.svg'
import safeIcon from '@/assets/svgIcons/safe.svg'
import point2Icon from '@/assets/svgIcons/point.svg'

// icon选择列表配置
export const incoListArray = [
    pointIcon,
    point1Icon,
    safeIcon,
    point2Icon,
]

// 标注文字可选字体类型配置
export const fontFamilyArray = [
    { value: '微软雅黑', label: '微软雅黑' },
    { value: 'Sans-serif', label: 'Sans-serif' },
    { value: '宋体隶书', label: '宋体隶书' },
    { value: '宋体', label: '宋体' },
]

// 填充类型配置
export const fillTypeArray = [
    { value: 'color', label: '固定颜色' },
    { value: 'image', label: '重复图片' }
]