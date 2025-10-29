<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const { error } = defineProps({
  error: Object as () => NuxtError,
});

const isDev = import.meta.dev;
const errCode = JSON.stringify(error, null, 2);
</script>

<template>
  <Html lang="ru">
    <Body class="main-app-block">
      <NuxtLayout>
        <div id="error">
          <div v-if="isDev" class="container">
            <el-alert :title="error?.message" type="error">
              <pre v-html="errCode"></pre>
            </el-alert>
          </div>
          <div v-if="error?.statusCode === 404" class="err_info">
            <div class="err_message">
              <h2 class="err_status">404</h2>
              Кажется, что-то пошло не так. Страница, которую вы запрашиваете,
              не существует. Она могла устареть или была удалена. Возможно, в
              адресной строке браузера введен неверный адрес.
            </div>
            <img class="err_img" src="/img/error/404.png" alt="" />
            <NuxtLink to="/">Начните с главной</NuxtLink>
          </div>
          <div v-else-if="error?.statusCode === 500" class="err_info">
            <div class="err_message">
              <h2 class="err_status">500</h2>
              Кажется, что-то пошло не так. Cервер не может обработать запрос к
              сайту, на странице которого вы находитесь.
            </div>
            <img class="err_img" src="/img/error/500.png" alt="" />
            <NuxtLink to="/">Начните с главной</NuxtLink>
          </div>
          <div v-else>Временная ошибка системы, ремонтируем</div>
        </div>
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="scss">
#error {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px; 

  .n-alert-body__content {
    overflow: auto;
  }

  .err {
    &_status {
      font-size: 64px;
      line-height: 78px;
      margin-bottom: 10px; 
    }

    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &_message {
      max-width: 870px;
      font-family: 'Montserrat', serif;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      margin-bottom: 30px;
    }

    &_img {
      width: 100%;
      height: 265px;
    }
  }
}
</style>
