(function(t){function e(e){for(var r,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1307cce9":"0e135c70"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-1307cce9":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-1307cce9":"3fe37704"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"209e":function(t,e,a){"use strict";a("b95f")},2329:function(t,e,a){},"2a51":function(t,e,a){},"2b03":function(t,e,a){},"2e0d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],i=(a("ba9e"),a("2877")),s={},c=Object(i["a"])(s,n,o,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"map"}})},f=[],m=(a("5bc0"),a("fd0c"),a("5eee")),g=a("a2c7"),h=a("480c"),p=a("d0e9"),b=a("5831"),y=a("3e6b"),v=a("4cdf"),x=a("7a09"),w=a("5bc3"),C=a("f403"),S=a("6c77"),I=a("6cbf"),M=a("ebe6");let _=a("b71a");var k={data(){return{map:"",basicLayer:null,basicSource:null,imageLayer:null,imageSource:null,oxtTransform:"",currentFeature:null}},methods:{initMap(){let t=this;t.map=new m["a"]({view:new g["a"]({center:[106.51,36.55],zoom:5,projection:"EPSG:4326"}),layers:[new h["a"]({source:new p["a"]})],target:"map"})},addBasicLayer(){let t=this;t.basicSource=new b["a"],t.basicLayer=new y["a"]({name:"Vecteur",source:t.basicSource}),t.map.addLayer(t.basicLayer)},addImageLayer(){let t=this;t.imageSource=new b["a"],t.imageLayer=new y["a"]({name:"Vecteur",source:t.imageSource}),t.map.addLayer(t.imageLayer)},addTestFeatures(){let t=this;t.basicSource.addFeature(new v["a"](new x["a"]([[110,36],[108,26],[88,40]]))),t.basicSource.addFeature(new v["a"](new w["a"]([[[111,37],[109,27],[89,41]]])));let e=new v["a"](new C["a"]([106.51,36.55]));e.image_type="Image",t.imageSource.addFeature(e);let a=new S["c"]({image:new I["a"]({src:_,scale:.1})});e.setStyle(a)}},mounted(){let t=this;t.initMap(),t.addBasicLayer(),t.addImageLayer(),t.addTestFeatures(),t.oxtTransform=new M["a"]({layers:[t.imageLayer],enableRotatedTransform:!0,hitTolerance:2,translateFeature:!0,scale:!0,rotate:!0,keepAspectRatio:!1,keepRectangle:!0,translate:!0,stretch:!0,pointRadius:function(t){if("Image"==t.image_type){let e="object"==typeof t.getStyle()?t.getStyle():t.getStyle()(),a=e.getImage().getImage(),r=e.getImage().scaleArray_,n=t.get("radius")||[a.width*r[0]/2,a.height*r[1]/2];return t.set("radius",n),n}}});var e=0,a=10,r=[0,0],n=!1;t.oxtTransform.on(["select"],(function(e){if(e.feature){t.currentFeature=e.feature;let a="object"==typeof t.currentFeature.getStyle()?t.currentFeature.getStyle():t.currentFeature.getStyle()(),r=a.getImage();t.imgRotate=t.imgRotateIng=(180*r.getRotation()/Math.PI%360).toFixed(2)}else null!=t.currentFeature&&console.log("失去选中");n&&e.features&&e.features.getLength()&&t.oxtTransform.setCenter(e.features.getArray()[0].getGeometry().getFirstCoordinate())})),t.oxtTransform.on(["rotatestart","translatestart","scalestart"],(function(t){e=t.feature.get("angle")||0,a=t.feature.get("radius")||10,r=[0,0]})),t.oxtTransform.on("rotating",(function(a){t.imgRotate=Number(((180*(e-a.angle)/Math.PI-180)%360+180).toFixed(2)),a.feature.set("angle",e-a.angle);let r="object"==typeof a.feature.getStyle()?a.feature.getStyle():a.feature.getStyle()(),n=r.getImage().getImage();console.log(n.width,n.height);let o=e-a.angle;console.log(180*o/Math.PI),r.getImage().setRotation(o)})),t.oxtTransform.on("translating",(function(e){r[0]+=e.delta[0],r[1]+=e.delta[1],n&&t.oxtTransform.setCenter(e.features.getArray()[0].getGeometry().getFirstCoordinate())})),t.oxtTransform.on("scaling",(function(e){n&&t.oxtTransform.setCenter(e.features.getArray()[0].getGeometry().getFirstCoordinate());let r=a[0]*Math.abs(e.scale[0]),o=a[1]*Math.abs(e.scale[1]);if(r=0==r?.05:r,o=0==o?.05:o,1===e.features.getLength()){var i=e.features.item(0);i.set("radius",[r,o])}let s="object"==typeof e.feature.getStyle()?e.feature.getStyle():e.feature.getStyle()(),c=s.getImage().getImage(),l=[2*r/c.width,2*o/c.height],u=s.getImage().getRotation(),d=s.getImage().getSrc();e.feature.setStyle(new S["c"]({image:new I["a"]({src:d,scale:l,rotation:u})}))})),t.oxtTransform.on(["rotateend","translateend","scaleend"],(function(t){console.log("结束",t)})),t.map.addInteraction(t.oxtTransform),t.map.on("click",(function(e){t.Latitudelongitude=e.coordinate;let a=t.map.forEachFeatureAtPixel(e.pixel,(function(t){return t}));console.log(a,e.coordinate)}))}},T=k,L=(a("209e"),Object(i["a"])(T,d,f,!1,null,"2e735a2f",null)),O=L.exports,j=function(){var t=this,e=t._self._c;return e("div",{ref:"myChart",staticClass:"gzMap",attrs:{id:"myChart"}})},B=[],A=a("03d6"),F={name:"gz-map",data(){return{mTime:"",charts:"",index:-1,option:{grid:{show:!1,top:"-50%",bottom:"-50%",backgroundColor:"rgba(224, 17, 17, 1)",borderColor:"rgba(96, 67, 67, 1)"},tooltip:{backgroundColor:"rgba(0,0,0,0)",trigger:"item"},series:[{tooltip:{trigger:"item",formatter:function(t){var e="";return t&&t.data&&(e=`<div style="padding: .6rem .8rem;font-size: 1rem;color:#fff;border-radius:10%;background: linear-gradient(#cccecf, #cccecf) left top,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) left top,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) right top,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) right top,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) left bottom,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) left bottom,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) right bottom,\n\t\t\t\t\t\t\t\t\tlinear-gradient(#cccecf, #cccecf) right bottom;\n\t\t\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\t\t\tbackground-size: .08rem .3rem, .3rem .08rem;background-color:rgba(6, 79, 111,.6);">\n\t\t\t\t\t\t\t${t.data.name} <br>\n\t\t\t\t\t\t\t${t.data.station1.name}<span style="color:#f9eb59;font-size:.8rem">: ${t.data.station1.value}</span><br>\n\t\t\t\t\t\t\t${t.data.station2.name}<span style="color:#f9eb59;font-size:.8rem">: ${t.data.station2.value}</span><br>\n\t\t\t\t\t\t\t${t.data.station3.name}<span style="color:#f9eb59;font-size:.8rem">: ${t.data.station3.value}</span> \n\t\t\t\t\t\t\t</div>`),e},borderWidth:0},name:"china",type:"map",map:"china",zoom:.65,showLegendSymbol:!0,label:{show:!0,color:"#fff",fontSize:10},itemStyle:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{itemStyle:{areaColor:"#4adcf0",borderColor:"#404a59",borderWidth:1},label:{show:!0,color:"#fff",fontSize:10}},layoutCenter:["50%","50%"],layoutSize:"160%",markPoint:{symbol:"none"},data:""}]}}},components:{},computed:{},mounted(){this.setMyEchart()},created(){this.$echarts.registerMap("china",A),this.getJson()},methods:{setMyEchart(){const t=this.$refs.myChart;if(t){const e=this.$echarts.init(t);this.charts=e,this.mapActive(),this.mouseEvents();const a=this.option;e.setOption(a),window.addEventListener("resize",(function(){e.resize()}))}},mouseEvents(){this.charts.on("mouseover",()=>{clearInterval(this.mTime),this.mTime="",this.charts.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:this.index})}),this.charts.on("mouseout",()=>{this.mapActive()})},mapActive(){const t=A.features.length;this.mTime=setInterval(()=>{this.charts.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:this.index}),this.index++,this.charts.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:this.index}),this.charts.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:this.index}),this.index>t&&(this.index=0)},2e3)},getJson(){this.option.series[0].data=A.features.map(t=>({name:t.properties.name,station1:{name:"水电站",value:Math.ceil(1e3*Math.random())},station2:{name:"风电场",value:Math.ceil(1e3*Math.random())},station3:{name:"光伏电站",value:Math.ceil(1e3*Math.random())}}))}}},z=F,E=(a("d51f"),Object(i["a"])(z,j,B,!1,null,"6a3ddd9b",null)),P=E.exports,$=function(){var t=this,e=t._self._c;return e("dv-full-screen-container",[e("dv-border-box-11",{staticClass:"contentBox",attrs:{title:"西北院工程数据中心"}},[e("div",{staticClass:"baseInfoContent"},[e("div",{staticClass:"leftInfo"},[e("div",{staticClass:"data-item"},[e("dv-digital-flop",{staticStyle:{width:"200px",height:"50px"},attrs:{config:t.config}})],1),e("div",{staticClass:"data-item"},[e("dv-digital-flop",{staticStyle:{width:"200px",height:"50px"},attrs:{config:t.config1}})],1),e("div",{staticClass:"data-item"},[e("dv-digital-flop",{staticStyle:{width:"200px",height:"50px"},attrs:{config:t.config2}})],1),e("div",{staticClass:"data-item"},[e("dv-digital-flop",{staticStyle:{width:"200px",height:"50px"},attrs:{config:t.config3}})],1)]),e("dv-border-box-8",{staticClass:"mapInfo"},[e("chinaMap")],1),e("div",{staticClass:"rightInfo"},[e("dv-border-box-8",{staticStyle:{"padding-top":"10px",height:"calc(100% - 10px)"}},[e("dv-capsule-chart",{staticStyle:{height:"95%",width:"95%",margin:"0 auto"},attrs:{config:t.configOptions}})],1)],1)],1),e("div",{staticStyle:{width:"100%","margin-top":"10px",height:"calc(22%)"}},[e("dv-border-box-8",[e("ul",{staticClass:"map-menu"},[e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1),e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1),e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1),e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1),e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1),e("li",[e("router-link",{attrs:{to:"/measureContorl"}},[e("img",{attrs:{src:a("8b55")}}),e("span",[t._v("水电站概览")])])],1)])])],1)])],1)},R=[];function N(){return Math.ceil(100*Math.random())}var D={components:{chinaMap:P},data(){return{configOptions:{data:[{name:"电站数据",value:N()},{name:"招标政策",value:N()},{name:"人口经济",value:N()},{name:"资源数据",value:N()},{name:"水文资源",value:N()},{name:"电站数据1",value:N()},{name:"招标政策1",value:N()},{name:"人口经济1",value:N()},{name:"资源数据1",value:N()},{name:"水文资源1",value:N()}],colors:["#32c5e9","#32c5e9","#32c5e9","#32c5e9","#32c5e9","#32c5e9","#32c5e9","#32c5e9","#32c5e9"],unit:"条/项",showValue:!0},activities:[{content:"电站数据",timestamp:"2018-04-12 20:46",size:"large",type:"primary",icon:"el-icon-more"},{content:"招标政策",timestamp:"2018-04-03 20:46",color:"#0bbd87"},{content:"人口经济",timestamp:"2018-04-03 20:46",size:"large"},{content:"资源数据",timestamp:"2018-04-03 20:46"}],config:{number:[Math.ceil(1e3*Math.random())],content:"{nt}条"},config1:{number:[Math.ceil(1e3*Math.random())],content:"{nt}条"},config2:{number:[Math.ceil(1e3*Math.random())],content:"{nt}条"},config3:{number:[Math.ceil(1e3*Math.random())],content:"{nt}条"}}},methods:{format(t){return t>0?`增加${t}条`:0}},mounted(){}},G=D,J=(a("ac53"),Object(i["a"])(G,$,R,!1,null,"d0c967be",null)),V=J.exports,W=function(){var t=this,e=t._self._c;return e("div",[e("button",{on:{click:function(e){return t.getNum(100)}}},[t._v("机选")]),e("ul",{staticClass:"list"},t._l(t.list,(function(a,r){return e("li",{key:r},[t._l(a.red,(function(a){return e("button",{key:a,staticClass:"red"},[t._v(t._s(a))])})),e("button",{staticClass:"blue"},[t._v(t._s(a.blue))])],2)})),0)])},q=[],H=(a("14d9"),{data(){return{blueBall:"",redBalls:[],list:[],allReds:[]}},mounted(){for(let t=0;t<33;t++)this.allReds.push(t+1)},methods:{getBalls(){this.redBalls=[],this.blueBall="";for(let e=0;e<33;e++){let t=Math.ceil(33*Math.random());!this.redBalls.includes(t)&&this.redBalls.length<6&&(this.redBalls[e]=t)}this.blueBall=Math.ceil(15*Math.random());let t={red:this.redBalls,blue:this.blueBall};this.list.push(t)},getNum(t){for(let e=0;e<=t;e++)this.getBalls()}}}),K=H,U=(a("5843"),Object(i["a"])(K,W,q,!1,null,"26624bd9",null)),X=U.exports;r["default"].use(u["a"]);const Y=[{path:"/",name:"openlayersTutorial",component:()=>a.e("chunk-1307cce9").then(a.bind(null,"44df"))},{path:"/mapDraw",name:"mapDraw",component:O},{path:"/test",name:"test",component:P},{path:"/mapIndex",name:"mapIndex",component:V},{path:"/doubleColorBall",name:"doubleColorBall",component:X}],Q=new u["a"]({mode:"hash",base:"",routes:Y});var Z=Q,tt=a("313e"),et=a("6c29"),at=a("5c96"),rt=a.n(at);a("0fae"),a("2e0d");r["default"].use(rt.a),r["default"].prototype.$echarts=tt,r["default"].config.productionTip=!1,r["default"].use(et["a"]),new r["default"]({router:Z,render:t=>t(l)}).$mount("#app")},5843:function(t,e,a){"use strict";a("2329")},"8b55":function(t,e,a){t.exports=a.p+"img/map.3f9f74fb.png"},"90bd":function(t,e,a){},ac53:function(t,e,a){"use strict";a("2b03")},b71a:function(t,e,a){t.exports=a.p+"img/img.53d71e4b.svg"},b95f:function(t,e,a){},ba9e:function(t,e,a){"use strict";a("90bd")},d51f:function(t,e,a){"use strict";a("2a51")}});
//# sourceMappingURL=app.c3639769.js.map