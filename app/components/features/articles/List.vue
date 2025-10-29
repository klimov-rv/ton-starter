<script setup lang="ts">
import type { ArticleCategories } from './model/types';
const categories = ['know', 'support', 'footer'] as ArticleCategories;
</script>

<template>
  <div v-if="categories.length" class="articles-wrapper">
    <ArticlesCategoryList
      v-for="category in categories"
      :key="category"
      :cat="category"
    />
  </div>
  <p v-else>Статьи не найдены.</p>
</template>

<style lang="scss"></style>
