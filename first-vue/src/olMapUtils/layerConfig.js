
/**
 * 地图底图图层配置
 * */ 
export  const underLayersConfig = {
  "TDT_XZT": {
    url: [
      "http://t4.tianditu.com/DataServer?T=vec_w&tk=4a76fd399e76e3e984e82953755c3410&x={x}&y={y}&l={z}",
      "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f3b09308331cb96af67a77339edfca1a"//天地图标注
    ],
    visible: false,
    layer: '',
    title: '天地图行政图',
    name: "行政图",
    type: 'TDT',
  },
  "TDT_YXT": {
    url: [
      "http://t3.tianditu.com/DataServer?T=img_w&tk=4a76fd399e76e3e984e82953755c3410&x={x}&y={y}&l={z}",
      "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f3b09308331cb96af67a77339edfca1a"//天地图标注
    ],
    visible: false,
    layer: '',
    title: '天地图影像图',
    name: "影像图",
    type: 'TDT',
  },
  "TDT_DXT": {
    url: [
      "http://t4.tianditu.com/DataServer?T=ter_w&tk=4a76fd399e76e3e984e82953755c3410&x={x}&y={y}&l={z}",
      "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f3b09308331cb96af67a77339edfca1a"//天地图标注
    ],
    visible: false,
    layer: '',
    title: '天地图地形图',
    name: "地形图",
    type: 'TDT',
  },
  "ARCGIS_YXT": {
    url: [
      "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      "http://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=f3b09308331cb96af67a77339edfca1a"//天地图标注
    ],
    visible: false,
    layer: '',
    title: 'ARCGIS影像',
    name: "影像图",
    type: 'ARCGIS',
  },
  "GD_XZT": {
    url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
    visible: false,
    layer: '',
    title: '高德行政图',
    name: "行政图",
    type: 'GD',
  },
  "GD_DXT": {
    url: "http://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    visible: false,
    layer: '',
    title: '高德影像图',
    name: "影像图",
    type: 'GD',
  },
  "BING_XZT": {
    url: "At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML",
    visible: false,
    layer: 'RoadOnDemand',
    title: 'BING行政图',
    name: "行政图",
    type: 'BING',
  },
  "BING_YXT": {
    url: "At0AC5clqqASpeFYI62kMtfRYAlAWKodmuMnyQj9ZzR-F_qHEMeIQALDng0tH7ML",
    visible: false,
    layer: 'AerialWithLabelsOnDemand',
    title: 'BING影像图',
    name: "影像图",
    type: 'BING',
  }
}

export default { underLayersConfig};
  