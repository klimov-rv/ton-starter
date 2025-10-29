// AVS reference..

// export default function (type: 'client' | 'server' = 'server') {
//   const userStore = useUser();
//   const appStore = useApp();
//   const runtime = useRuntimeConfig();
//   const headers = useRequestHeaders(['cookie']);
//   return $fetch.create({
//     baseURL: type === 'client' ? runtime.public.apiBase : '/api',
//     headers,
//     onResponseError({ request, response, options }) {
//       console.error('Response Error', response);
//       if (response) {
//         switch (response.status) {
//           case 404:
//             navigateTo('/404');
//             break;
//           case 500:
//             navigateTo('/500');
//             break;
//           case 401:
//             userStore.user = null;
//             userStore.isAuth = false;
//             appStore.handleModal('auth');
//             break;
//           // Можно добавить еще особые ошибки для перехода
//         }
//       }
//     },
//   });
// }

import type { UseFetchOptions } from 'nuxt/app';

export function useAppFetch<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$appFetch as typeof globalThis.$fetch,
  });
}
