<script setup lang="ts">
import TonImg from '@/assets/img/logo/ton_symbol.svg';
</script>

<template>
  <div class="header-main">
    <h1 class="header-main__title text-center">
      <img :src="TonImg" alt="TON Logo" />
      <NuxtLink to="/">TON Starter Kit</NuxtLink>
    </h1>
    <p class="header-main__subtitle text-center">
      Ваш путеводитель в экосистеме The Open Network
    </p>
  </div>
</template>

<style lang="scss">
.header-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 56px;
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    a {
      color: black;
      text-decoration: none;
    }
    img {
      width: 1.3em;
    }
  }
  &__subtitle {
    color: #1f1f1f;
    font-size: 22px;
    width: 67%;
  }

  @media screen and (max-width: 768px) {
    &__title {
      font-size: 42px;
    }
    &__subtitle {
      font-size: 20px;
      width: 70%;
    }
  }

  @media screen and (max-width: 480px) {
    &__title {
      font-size: 32px;
    }
    &__subtitle {
      font-size: 16px;
      width: 73%;
    }
  }
}
</style>
