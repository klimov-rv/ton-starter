<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  folder: { type: String, default: '' },
  size: { type: Number, default: 24 },
  color: { type: String, default: 'currentColor' },
});

const imagePath = computed(() =>
  props.folder
    ? `/img/${props.folder}/${props.name}.svg`
    : `/img/${props.name}.svg`,
);
</script>
<template>
  <img
    class="icon"
    :src="imagePath"
    :width="size"
    :height="size"
    :style="{ color }"
    :alt="name"
  />
</template>

<style lang="scss">
.icon {
  display: flex;
  --color: v-bind(color);
}
.icon[src*='.svg'] {
  path {
    fill: var(--color);
    stroke: var(--color);
  }
}
</style>
