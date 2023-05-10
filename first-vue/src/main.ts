import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.less'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.variable.min.css';

import router from "./router/index";
const pinia = createPinia()
createApp(App)
.use(Antd)
.use(router)
.use(pinia)
.mount('#app')
