interface DemoErrorResponse {
  status: number;
  statusText?: string;

  [key: string]: any;
}

interface FetchHooksErrorParams {
  response: DemoErrorResponse;
}

// import { authAPI } from '../components/features/auth/api/auth.api';
import { articlesAPI } from '../components/features/articles/api/articles.api';

export default defineNuxtPlugin({
  name: 'app-fetch',
  parallel: true,
  async setup(nuxtApp) {
    const config = useRuntimeConfig();

    const appFetch = $fetch.create({
      baseURL: config.public.apiBaseUrl,
      headers: {
        Accept: 'application/json',
      },
      async onResponseError({ response }: FetchHooksErrorParams) {
        const { status, statusText } = response;

        if (status === 401) {
          nuxtApp.runWithContext(() => navigateTo('/modal-login-path'));
        }

        // 422, информативная ошибка
        if (status === 422) {
          console.error(statusText);
          nuxtApp.runWithContext(() => navigateTo('/modal-error-path'));
        }
      },
    });

    const mainResources = {
      // auth: authAPI(appFetch),
      articles: articlesAPI(appFetch),
    };

    return {
      provide: {
        appFetch,
        mainResources,
      },
    };
  },
});

declare module 'nuxt/app' {
  interface NuxtApp {
    $appFetch<T>(
      url: NitroFetchRequest,
      payload?: any,
      options?: NitroFetchOptions<'json'>,
    ): Promise<T>;

    $mainResources;
  }
}
