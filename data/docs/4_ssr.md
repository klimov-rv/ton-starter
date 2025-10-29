# Server-Side-Rendering

**Основные подходы**

С учётом понимания концепции [Universal Rendering](https://nuxt.com/docs/guide/concepts/rendering#universal-rendering) разработка SSR разделяется на 2 основных направления

## Стратегия: "только на клиенте":

- **Part-Guarded**: для страниц, части контента которых зависят от состояния пользователя авторизован/гость. Такими являются страницы, где часть сущностей грузится только при авторизованном пользователе.
-
- **SSR: false**: для всех защищённых страниц просто отключаем пререндер

## Стратегия: "на клиенте и на сервере" или универсальный рендеринг (Universal Rendering)

- **SSR**: Выделяем данные критичные для SEO, рендерим на сервере (`/`, `/drops`, `/categories/**`).  
  Используем `useAsyncData` для контроля навигации и скорости загрузки страниц:

  ![useAsyncData](https://i.imgur.com/jvSA2md.png)

- **SWR**: Наслаиваем на SSR/SSG, обновляем кеш в фоне (`swr: 10`).

  ```js
  routeRules: {
    '/': { swr: 10 }, // Кешировать на 10 сек
  },
  ```

  Гидратируем отрендеренных страниц с помощью `SkeletonLoader` (токены, коллекции, `UserMenuPanel`).  
  Исключаем `hydration mismatch` через `initialCache: false` в `useAsyncData`.

- **SSG**: Для страниц без динамики (на примере разделов `/faq/**` и `/articles/**`.
  При сборке генерируем HTML: `prerender: true`.
  Не обновляем кеш, пока данные на backend не обновятся: `swr: true`.
  Данные кешируем через `useAsyncData` с уникальным ключом (`article-${slug}`).

## Деплой с учётом SSR

1. **Прокидываем env переменные**

```js
// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'DemoNuxt3',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      env: {
        NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
        NUXT_PUBLIC_API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL,
        NUXT_PUBLIC_WS_BASE_URL: process.env.NUXT_PUBLIC_WS_BASE_URL,
        NUXT_PUBLIC_DEFAULT_NETWORK: process.env.NUXT_PUBLIC_DEFAULT_NETWORK,
        NODE_ENV: 'dev',
      },
    },
  ],
};
```

2. **запуск и сохранение настроек PM2**

```bash
  pm2 start ecosystem.config.cjs
  pm2 save
  pm2 startup
```

## DX, отладка с учётом SSR

В процессе тестирования SSR необходим просмотр "статики" и полноценная продакшен-сборка, поэтому были добавлены 2 скрипта в `package.json`:

```json
{
  "scripts": {
    // для быстрого просмотра продакшен-сборки
    "ssr-preview": "nuxt build && nuxt preview",
    // при проблемах с обновлением кеша
    "preview:clean": "rm -rf .output .nuxt/cache && nuxt build && nuxt preview",
    ...
  }
}
```
