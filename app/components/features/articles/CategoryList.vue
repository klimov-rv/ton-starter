<script setup lang="ts">
import type { ArticleCategory } from './model/types';

interface Props {
  cat: ArticleCategory;
}

const { cat } = defineProps<Props>();

async function getArticles(cat: ArticleCategory) {
  const { $mainResources } = useNuxtApp();
  return await $mainResources.articles.getListByCategory(cat);
}
// Используем useAsyncData с ключом для кэширования
const { data: articles } = await useAsyncData(
  `article-${cat}`,
  async () => await getArticles(cat),
  { lazy: true },
);
</script>
<template>
  <h2 class="article__category-title">{{ cat }}</h2>
  <ArticlesListItem
    v-for="article in articles"
    :key="article.id"
    :article="article"
  />
</template>

<style lang="scss">
.article__category-title {
  color: $primary;
  background: $header_link_hover;
  grid-column: span 2;
}
</style>
