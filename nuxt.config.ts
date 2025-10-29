import { resolve } from 'path';
import appStamp from './app/buildTime.js';
import appSEO from './data/seo.json';

export default defineNuxtConfig({
  srcDir: './app',
  app: {
    head: appSEO,
  },

  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/global.scss',
    '@/assets/styles/fonts.scss',
  ],

  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n'],

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
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3030',
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
          @use "~/assets/styles/element.scss" as element;
          @use "~/assets/styles/_colors.scss" as *;
          `,
        },
      },
    },
    define: {
      __BUILD_TIME__: JSON.stringify(appStamp),
    },
  },

  i18n: {
    vueI18n: '~/providers/i18n/i18n.config.ts',
    defaultLocale: 'ru',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
});
