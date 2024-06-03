export const basicStyleFrom = [
    {
        labelName: '标注文字',
        formType: 'text',
        maxLength: '',
        key: 'text',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'text'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '字体大小',
        formType: 'number',
        max: 50,
        min: 10,
        key: 'fontSize',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'fontSize'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '字体颜色',
        formType: 'color',
        key: 'fill',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'fill'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '字体类型',
        formType: 'select',
        key: 'fontFamily',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'fontFamily'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '字体轮廓颜色',
        formType: 'color',
        key: 'color',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'strokeConfig','color'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '字体轮廓宽度',
        formType: 'number',
        key: 'width',
        rules: null,
        disabled: false,
        formItemKey: ['textConfig', 'strokeConfig','width'],
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
    {
        labelName: '',
        formType: 'number',
        key: 'width',
        rules: null,
        disabled: false,
        configType: 'textConfig',
        subConfigType: 'strokeConfig',
        showType: ['point', 'multipoint', 'linestring', 'multilinestring', 'polygon', 'multipolygon']
    },
]