<script setup lang="ts"></script>

<template>
  <div class="main-app-block">
    <HeaderDefault />

    <main class="container">
      <slot />
    </main>

    <FooterDefault />
  </div>
</template>

<style>
.main-app-block {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  background-color: #fbfafa;
  background-image:
    linear-gradient(-45deg, #fafafa 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #fdfdfd 75%),
    linear-gradient(-45deg, transparent 75%, #fefefe 75%);
  background-size: 5px 5px;
}
</style>
