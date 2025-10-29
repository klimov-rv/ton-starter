<script setup lang="ts">
import type { Article } from './model/types';

interface Props {
  article: Article;
}

const { article } = defineProps<Props>();
</script>
<template>
  <div :key="article.id" class="articles-wrapper__article-item">
    <a :href="`/articles/${article.slug}`" class="article-read-next">
      <h3>{{ article.name }}</h3>
    </a>
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<style lang="scss">
.articles-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 20px;
  justify-content: center;
  padding: 30px 10px;

  &__article-item {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h2 {
      font-size: 18px;
      margin-bottom: 12px;
      color: #333;
    }

    .article-content {
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
