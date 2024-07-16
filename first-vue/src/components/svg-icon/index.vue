<template>
  <icon class="svgIcon" :style="{ color: color, 'font-size': size + 'px' }">
      <template #component="svgProps">
        <svg aria-hidden="true" :style="{  width: size + 'px', height: size + 'px'}">
            <use :xlink:href="symbolId" fill="currentColor" v-bind="svgProps" />
        </svg>
      </template>
    </icon>
</template>
<script setup lang="ts">
import { computed } from "vue";
import Icon from '@ant-design/icons-vue';
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  size: {
    type: [Number, String],
    default: 14,
  },
});
const symbolId = computed(() => `#icon-${props.iconName}`);
</script>

​
<style scoped>

</style>