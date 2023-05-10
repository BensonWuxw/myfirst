import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
import { defineStore } from "pinia"

import testLanguage from "../components/test/testLanguage.vue"
import testTheme from "../components/test/testTheme.vue"
import testShopping from "../components/test/testShopping.vue"

import logicflow from "../views/logicflow/logicflow.vue"
const routes: Array<RouteRecordRaw> = [
    {
        name: '',
        path: '/',
        meta: {title: "首页", menu:true},
        component: testLanguage
    },
    {
        name: 'testLan',
        path: '/testLan',
        meta: {title: "测试语言切换", menu:false, menuItemName: '测试'},
        component: testLanguage 
    },
    {
        name: 'testTheme',
        path: '/testTheme',
        meta: {title: "测试主题切换", menu:true, menuItemName: '测试'},
        component: testTheme
    }, {
        name: 'testShopping',
        path: '/testShopping',
        meta: {title: "测试购物功能", menu:true, menuItemName: '测试'},
        component: testShopping
    },
    {
        name: 'logicflow',
        path: '/logicflow',
        meta: {title: "流程图", menu:true,},
        component: logicflow
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
router.beforeEach((to, from) => {
    
})
export default router