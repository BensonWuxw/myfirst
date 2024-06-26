import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"


import testLanguage from "../components/test/testLanguage.vue"
import testTheme from "../components/test/testTheme.vue"
import testShopping from "../components/test/testShopping.vue"

import logicflow from "../views/logicflow/logicflow.vue"

import testPage from "../views/testPage/testPage.vue"
import testPageLess from "../views/testPage/testPageLess.vue"
import subject from "../views/testPage/subject.vue"
import record from "../views/testPage/record.vue"

import studyPage from "../views/study/index.vue"
import olMapPage from "../views/olMap/index.vue"
import training from "@/views/training/index.vue"

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
    },
    {
        name: 'testPage',
        path: '/testPage',
        meta: {title: "测试页面", menu:true,},
        component: testPage
    },
    {
        name: 'testPageLess',
        path: '/testPageLess',
        meta: {title: "测试页面", menu:true,},
        component: testPageLess
    },
    {
        name: 'subject',
        path: '/subject',
        meta: {title: "样式", menu:true,},
        component: subject
    },
    
    {
        name: 'record',
        path: '/record',
        meta: {title: "record", menu:true,},
        component: record
    },
    {
        name: 'studyPage',
        path: '/studyPage',
        meta: {title: "studyPage", menu:true,},
        component: studyPage
    },
    {
        name: 'olMap',
        path: '/olMap',
        meta: {title: "olMap", menu:true,},
        component: olMapPage
    },
    {
        name: 'training',
        path: '/training',
        meta: {title: "training", menu:true,},
        component: training
    },
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
router.beforeEach((to, from) => {
    
})
export default router