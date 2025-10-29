export default defineNuxtRouteMiddleware(async (to, _from) => {
  if (to.meta.auth) {
    const authStore = useAuthStore();
    await authStore.isReady;

    if (to.meta.auth && !authStore.user) {
      return navigateTo({ name: 'modal-login' });
    }
  }

  // const userStore = useUser();
  // if (!userStore.isAuth && userStore.isCheckUser) {
  //   if (from.path !== to.path)
  //     return navigateTo({
  //       ...from,
  //       ...{ query: { auth: 'open', target: to.path } },
  //     });
  //   else
  //     return navigateTo({
  //       path: '/',
  //       query: { auth: 'open', target: to.path },
  //     });
  // }
});
