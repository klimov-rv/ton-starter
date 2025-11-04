<script setup lang="ts">
declare const __BUILD_TIME__: string | undefined;

const buildTime = __BUILD_TIME__ || 'date err';
</script>

<template>
  <div class="build-timestamp mt-1-rem mb-1-rem p-1-rem" aria-hidden="true">
    assembly stamp: {{ buildTime }}
  </div>
</template>

<style lang="scss">
.build-timestamp {
  display: flex;
  opacity: 0.15;
}
</style>
