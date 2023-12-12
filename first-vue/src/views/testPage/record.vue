<template>
    <ul>
        <li v-for="item in 200" :key="'ss'+item" :class="{'success': recordsList.includes(item)}" @click="successItem(item)"><CheckOutlined /></li> 
    </ul>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { CheckOutlined } from '@ant-design/icons-vue';
const records = window.localStorage.getItem('records');
const recordsList = ref([])
console.log(records.split(","))
if (records) {
    recordsList.value = records.split(",").map(item => {
        return Number(item)
    })
}

const successItem = (item) => {
    if (recordsList.value.includes(item)) {
        let index = recordsList.value.indexOf(item);
         recordsList.value.splice(index, 1)
    } else {
       recordsList.value.push(item) 
    }
   const records = window.localStorage.setItem('records', recordsList.value);
}
</script>
<style lang="less" scoped>
ul{
    list-style: none;
    display: flex;
    flex-flow: wrap;
    padding: 50px;
    li{
        display: flex;
        width: 20px;
        height: 20px;
        margin: 5px;
        border: 1px solid gray;
        text-align: center;
        align-items: center;
        border-radius: 20px;
        justify-content: center;
        &.success{
            color: #fff;
            border: 1px solid #fff;
            background: #67C23A;
        }
    }
}
</style>
