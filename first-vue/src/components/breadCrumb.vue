<template>
    <a-breadcrumb style="margin: 16px 0" v-if="route.meta.menuItemName">
        <a-breadcrumb-item>{{route.meta.menuItemName}}</a-breadcrumb-item>
        <a-breadcrumb-item>{{route.meta.title}}</a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router"
const router = useRouter();
const route = useRoute();
console.log(route)
</script>