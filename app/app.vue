<script lang="ts" setup></script>

<template>
  <Html lang="ru">
    <Body class="main-app-block">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style>
.main-app-block {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
