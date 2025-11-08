import { resolve } from 'path';
// import appStamp from './app/buildTime.js';
// import appStamp from './buildTime.js'; // путь изменился
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  srcDir: './app',
  rootDir: __dirname,

  app: {
    head: appSEO,
  },

  // Временный хак для добавления страницы 404
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: '404',
        path: '/:pathMatch(.*)*',
        file: '~/layouts/error.vue',
      });
    },
  },

  css: ['@/assets/styles/main.scss'],

  modules: [
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
  ],

  elementPlus: {
    importStyle: 'scss',
  },

  alias: {
    '@': resolve(__dirname, './app'),
    '~~': resolve(__dirname, './'),
  },

  components: [
    {
      path: '@/components/shared',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/entities',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/features',
      pattern: '**/*.vue',
      prefix: '',
    },
    {
      path: '@/components/widgets',
      pattern: '**/*.vue',
      prefix: '',
    },
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || '',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
    },
  },

  devServer: {
    port: 3030,
  },

  compatibilityDate: '2025-01-23',
  devtools: { enabled: true },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['./app/*'],
        },
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/global/element.scss" as element;
          @use "~/assets/styles/global/_colors.scss" as *;
          `,
        },
      },
    },
    define: {
      // __BUILD_TIME__: appStamp,
      __BUILD_TIME__: `${new Date().toISOString()}`,
    },
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // пререндер для статического хостинга github-pages
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/getting-started', '/404'],
    },
  },
});
