import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"


import testLanguage from "../components/test/testLanguage.vue"
import testTheme from "../components/test/testTheme.vue"
import testShopping from "../components/test/testShopping.vue"

import logicflow from "../views/logicflow/logicflow.vue"

import testPage from "../views/testPage/testPage.vue"
import testPageLess from "../views/testPage/testPageLess.vue"
import pluginLibrary from "../views/testPage/pluginLibrary.vue"
import record from "../views/testPage/record.vue"

import studyPage from "../views/study/index.vue"
import olMapPage from "../views/olMap/index.vue"
import training from "@/views/training/index.vue"

import dashborad1 from "@/views/dashboard/page1/index.vue"
import dashborad2 from "@/views/dashboard/page2/index.vue"

import dashborad3 from "@/views/dashboard/page3/index.vue"
import dashborad4 from "@/views/dashboard/page4/index.vue"
import dashborad5 from "@/views/dashboard/page5/index.vue"
import dashborad6 from "@/views/dashboard/page6/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        name: '',
        path: '/',
        meta: {title: "首页", menu:true},
        component: dashborad5
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
        meta: {title: "测试插件", menu:true,},
        component: testPageLess
    },
    {
        name: 'pluginLibrary',
        path: '/pluginLibrary',
        meta: {title: "样式", menu:true,},
        component: pluginLibrary
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
    {
        name: 'dashborad1',
        path: '/dashborad1',
        meta: {title: "dashborad1", menu:true,},
        component: dashborad1
    },
    {
        name: 'dashborad2',
        path: '/dashborad2',
        meta: {title: "dashborad2", menu:true,},
        component: dashborad2
    },
    {
        name: 'dashborad3',
        path: '/dashborad3',
        meta: {title: "dashborad3", menu:true,},
        component: dashborad3
    },
    {
        name: 'dashborad4',
        path: '/dashborad4',
        meta: {title: "dashborad4", menu:true,},
        component: dashborad4
    },
    {
        name: 'dashborad5',
        path: '/dashborad5',
        meta: {title: "dashborad5", menu:true,},
        component: dashborad5
    },
    {
        name: 'dashborad6',
        path: '/dashborad6',
        meta: {title: "dashborad6", menu:true,},
        component: dashborad6
    },
    
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
router.beforeEach((to, from) => {
    
})
export default router