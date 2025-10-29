<script setup lang="ts">
const buildTime = __BUILD_TIME__;
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="container py-6">
        <h1 class="text-3xl font-bold text-center text-ton-primary">
          TON Starter Kit
        </h1>
        <p class="text-center text-gray-600 mt-2">
          Ваш путеводитель в экосистеме The Open Network
        </p>
      </div>
    </header>

    <main class="container py-8">
      <slot />
    </main>

    <footer class="bg-white border-t mt-auto py-6">
      <div class="container text-center text-gray-500 text-sm">
        assembly stamp: {{ buildTime }}
      </div>
    </footer>
  </div>
</template>

<style></style>
