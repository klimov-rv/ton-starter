# Тайпскрипт

## "Щадящий" режим

- Для постепенного внедрения типизации в проект - убран тайпчек при сборке.
- Используйте `@ts-expect-error` для временного отключения проверки в сложных местах:
  ```typescript
  // @ts-expect-error
  const data = someUntypedFunction();
  ```

## Сбор и использование:

Для каталогизации типов и скорейшего использования автодополнений и подсказок в IDE необходимо:

- Собирать все респонсы из текущей апишки глобально в `app/types/global.d.ts`.
- Используем сервис: [JSON to TypeScript](https://transform.tools/json-to-typescript)
- Нейминг: дополняем имя типа словом `Response` (например, `<ArticleResponse>`)
- Это временное решение, которое поможет потом разнести по другим файлам.
- В случае получения типа с бэка заранее или при их самостоятельном создании - привыкаем заносить их для удобства разработки фич

---

## Рекомендуемые практики:

### Типизация API

#### Пример:

- Создайте интерфейс, для эндпоинта `/api/user`:

  ```typescript
  // types/api/articles.ts
  export interface ArticleResponse {
    id: number;
    title: string;
    content: string;
  }
  ```

- Использование:
  ```typescript
  const { data: article } = await useFetch<ArticleResponse>('/api/articles');
  // Теперь `user` будет иметь автодополнение для полей `id`, `title`, `content`.
  ```

---

### Типизация пропсов и событий в компонентах

#### Пример:

- Типизируем полученные из апи `res` или прокинутые `props` в компонентах:

  ```typescript
  <script setup lang="ts">
  interface Props {
    title: string;
    count?: number;
  }

  defineProps<Props>();
  const article = useAppFetch<ArticleResponse>(`/v1/articles/${id}`);
  </script>
  <template>
  <div>
    <h1>{{ article.title }}</h1>
    <div v-if="count">
    ...
  ```

- Типизируйте события:
  ```typescript
  <script setup lang="ts">
  defineEmits<{
    (event: 'update:title', value: string): void;
    (event: 'submit'): void;
  }>();
  </script>
  ```

---

### Типизация store

#### Пример:

- Создайте типизированный store:

  ```typescript
  // stores/user.ts
  import { defineStore } from 'pinia';

  interface UserState {
    name: string;
    email: string;
  }

  export const useUserStore = defineStore('user', {
    state: (): UserState => ({
      name: '',
      email: '',
    }),
    actions: {
      setUser(user: UserState) {
        this.name = user.name;
        this.email = user.email;
      },
    },
  });
  ```

- Используйте store с автодополнением:
  ```typescript
  const userStore = useUserStore();
  userStore.setUser({ name: 'John', email: 'john@example.com' });
  ```

---

### Типизация плагинов

#### Пример:

- Плагин:

  ```typescript
  // plugins/api.ts
  import type { NuxtApp } from 'nuxt/app';

  export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    const apiFetch = $fetch.create({
      baseURL: 'https://api.example.com',
    });

    nuxtApp.provide('apiFetch', apiFetch);
  });
  ```

- Использование:
  ```typescript
  const { $apiFetch } = useNuxtApp();
  const data = await $apiFetch('/endpoint');
  ```
