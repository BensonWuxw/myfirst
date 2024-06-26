import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/less/index.less'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.variable.min.css';
import 'ol/ol.css'
import router from "./router/index";
import i18n from './i18n';
import 'virtual:svg-icons-register' 
import SvgIcon from "./components/svg-icon/index.vue"
import "ol/ol.css"
import "ol-ext/dist/ol-ext.css"
const pinia = createPinia()
const app = createApp(App)
.use(Antd)
.use(router)
.use(pinia)
.use(i18n)
app.component('SvgIcon', SvgIcon)
app.mount('#app');
