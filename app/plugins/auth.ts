// import { useAuthStore } from '../components/features/auth/model/auth.store.ts';
export default defineNuxtPlugin({
  name: 'init-auth',
  dependsOn: ['app-fetch'],
  parallel: true,
  async setup(_app) {
    // const { $mainResources } = useNuxtApp();
    // const authStore = useAuthStore();

    if (import.meta.browser) {
      /*return await $mainResources.auth.check().then((response) => {
        console.log(response);
        console.log(authStore.openModal('login'));
      });*/
    }

    // if (import.meta.browser) {
    //   $mainResources.auth
    //     .check()
    //     .then((response) => {
    //       authStore.setUser(response.auth ? response.user : null);
    //     })
    //     .catch((e) => {
    //       authStore.setUser(null);
    //     });

    //   app.hook('app:suspense:resolve', function () {
    //     authStore.setIsHydrated();
    //   });
    // } else {
    //   authStore.setUser(null);
    // }
  },
});
