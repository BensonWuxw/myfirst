<script setup lang="ts">
import { ref } from 'vue'
import menuList from "../components/menu.vue"
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
 
  <div class="cardsasd">
    <menuList />
    <h1>{{ msg }}</h1>
    <a-button type="primary">主题按钮</a-button>
    <a-button type="success" danger>主题按钮</a-button>
    <a-button type="default" success>主题按钮</a-button>
    <a-button type="warning" warning> 主题按钮</a-button>
    <a-button type="primary">主题按钮</a-button>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
