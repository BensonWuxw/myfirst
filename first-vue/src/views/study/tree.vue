<template>
    <tree-item v-for="(item,index) in treeData" :data="item" :key="index"></tree-item>
</template>
<script setup>
import {getTreeJson} from "@/api/study"
import {ref} from "vue"
import treeItem from "./treeItem.vue"

const treeData = ref([])
const treeData1 = ref([])
const treeDataObj = ref({})
const originData = ref()
getTreeJson().then(res => {
    if (res && res.length > 0) {
        originData.value = res;
        treeDataObj.value = groupByParent(res);
        findParent()
    }
    Object.keys(treeDataObj.value).forEach(k => {
        findChildren(k)     
    })
    console.log(treeDataObj.value)
    treeData.value = Object.values(treeDataObj.value)
})

const findChildren = (k) => {
    let children = treeDataObj.value[k]
    if (children && children.length > 0) {
        children.map(childrenNode => {
            if (treeDataObj.value[childrenNode.id]) {
                childrenNode.children = treeDataObj.value[childrenNode.id]
                findChildren(childrenNode.id)
                delete treeDataObj.value[childrenNode.id]
            } 
        })
    }
}

const groupByParent = (data) => {
    let item = {}
    data.forEach(node => {
        let parentId = node.parentId ? node.parentId : 'root'
        if (!item[parentId]) {
            item[parentId] = []
        }
        item[parentId].push(node)
    });
    return item;
}

const findParent = () => {
    let rootId = '';
    let parentIds = Object.keys(treeDataObj.value)
    let allNodeIds = originData.value.map(item => item.id)
    let rootIds = parentIds.filter(item => {
        return !allNodeIds.includes(Number(item))
    })
    console.log(parentIds, rootIds)
    originData.value.forEach(item => {
        if (item.parentId in treeDataObj.value && !(item.id in treeDataObj.value)) {
        }
        if (item.parentId in treeDataObj.value && !(item.id in treeDataObj.value)) {
           console.log(item)
        }
    })
}
</script>