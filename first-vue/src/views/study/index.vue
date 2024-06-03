<template>
{{poats}}
    <Item1Vue class="ccc" v-bind="$attrs" @click="consoleLogS($slot)">
        <template v-slot="poats">{{poats.msg}}  {{poats.status}}</template>
    </Item1Vue>
    <AsyncComp></AsyncComp>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import Item1Vue from "./item1.vue";
const consoleLogS = (slot) => {
    console.log(slot)
}
const AsyncComp = defineAsyncComponent(() =>
  import('./item1.vue')
)
</script>
<style scoped>

</style>