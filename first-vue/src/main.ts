import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.variable.min.css';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import router from "./router/index";
const pinia = createPinia()
createApp(App)
.use(Antd)
.use(router)
.use(pinia)
.use(Vue3ColorPicker)
.mount('#app')
