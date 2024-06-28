<template>
    <div style="margin-left: 50px;" v-for="item in props.data" :key="item.id">
        {{item.name}}
        <tree-item v-if="item.children && item.children.length > 0" :data="item.children"></tree-item>
    </div>
</template>
<script setup>

import {ref} from "vue"
const props = defineProps(['data'])
</script>