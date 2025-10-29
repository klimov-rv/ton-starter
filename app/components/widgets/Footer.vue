<script setup lang="ts">
const linksColumns = ref([ 
  {
    title: 'Документы',
    links: [
      {
        name: 'Оферта',
        url: '/articles/dogovor-oferta-polzovatelya-nft-platformy',
      },
      { name: 'Процесс оплаты', url: '/articles/informatsiya-ob-oplate' },
      {
        name: 'Правила сервиса',
        url: '/articles/pravila-ispolzovaniya-sayta',
      },
      {
        name: 'Обработка данных',
        url: '/articles/obrabotka-personalnykh-dannykh',
      },
    ],
  },
  {
    title: 'О компании',
    links: [
      { name: 'Партнеры', url: '/#partners' },
      { name: 'Пресса о нас', url: '/#press' },
    ],
  },
]);
const buildTime = __BUILD_TIME__;
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="row is-grid footer__first-block">
        <div class="cell-4 cell-12-sm col">
          <NuxtLink to="/">
            <img
              class="footer__logo--dekstop"
              src="/img/logo/logo-footer.svg"
              alt="Demo Logo"
            />
          </NuxtLink>
          <div class="footer-social-network-logos-second hide-sm">
            <div class="social-items">
              <a
                class="telegram-logo"
                target="_blank"
                href="https://t.me/demo"
              >
                <Icon
                  name="telegram"
                  folder="general/soc-icons"
                  :size="18"
                  color="#fff"
                />
              </a>
              <a
                class="vk-logo"
                target="_blank"
                href="https://vk.com/demo_official"
              >
                <Icon
                  name="vk-white"
                  folder="general/soc-icons"
                  :size="20"
                  color="#fff"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="cell-8 cell-12-sm footer__link-lists">
          <div class="row is-grid">
            <div
              v-for="(column, index) in linksColumns"
              :key="index"
              class="cell-3 cell-6-md mb-30"
            >
              <strong class="list-title">{{ column.title }}</strong>
              <ul class="list">
                <li
                  v-for="(link, i) in column.links"
                  :key="i"
                  class="list-item"
                >
                  <NuxtLink v-if="link.url.startsWith('/')" :to="link.url">
                    {{ link.name }}
                  </NuxtLink>
                  <a v-else :href="link.url" target="_blank">
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row is-grid footer__second-block">
        <div class="cards cell-4 cell-12-sm">
          <img src="/img/general/payment-icons/Visa.svg" alt="Visa" />
          <img
            src="/img/general/payment-icons/Mastercard.svg"
            alt="Mastercard"
          />
          <img src="/img/general/payment-icons/Mir.svg" alt="Mir" />
        </div>
        <div class="footer__info cell-8 cell-12-sm">
          <p>ООО «Demo» (ИНН 7842177770, ОГРН 1167777776230)</p>
          <p>190000, Санкт-Петербург, Исаакиевская пл., 4, лит. А,</p>
          <div class="build-timestamp" aria-hidden="true">
            assembly ver: {{ buildTime }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss"  >
.footer { }
</style>
