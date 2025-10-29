import { useAuthStore } from './model/store';
import { authUi } from './ui';

export const authProvider = {
  install() {
    return {
      store: useAuthStore(),
      ui: authUi,
    };
  },
};

declare module 'nuxt/app' {
  interface NuxtApp {
    $auth: ReturnType<typeof authProvider.install>;
  }
}
