<script setup lang="ts">
import type { Article } from './model/types';

interface Props {
  initialArticle?: Article | null;
}
const { initialArticle } = defineProps<Props>();
</script>
<template>
  <div v-if="initialArticle" class="article-wrapper">
    <h1>
      {{ initialArticle.name }}
    </h1>
    <NuxtLink to="/articles/list">Весь список</NuxtLink>
    <div v-html="initialArticle.content"></div>
  </div>
  <p v-else>Статья не найдена.</p>
</template>
<style lang="scss">
.article {
  a {
    color: #3dabef;
    text-decoration: underline;
  }
}
</style>
