<script setup lang="ts">
const navigationCards = [
  {
    icon: '🦉',
    title: 'С чего начать?',
    description: 'Базовые шаги для новичка',
    route: '/getting-started',
  },
  {
    icon: '💰',
    title: 'Купить TON',
    description: 'Способы покупки токена',
    route: '/buy-ton',
  },
  {
    icon: '🎁',
    title: 'Telegram Gifts',
    description: 'Что это и как использовать',
    route: '/telegram-gifts',
  },
  {
    icon: '🎮',
    title: 'Заработать TON',
    description: 'Активные и пассивные способы заработка',
    route: '/earn-ton',
  },
];
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <el-card
      v-for="card in navigationCards"
      :key="card.title"
      class="cursor-pointer hover:shadow-lg transition-shadow"
      @click="navigateTo(card.route)"
    >
      <template #header>
        <div class="flex items-center gap-2">
          <span class="text-xl">{{ card.icon }}</span>
          <h3 class="text-lg font-semibold">{{ card.title }}</h3>
        </div>
      </template>
      <p class="text-gray-600">{{ card.description }}</p>
    </el-card>
  </div>
</template>
