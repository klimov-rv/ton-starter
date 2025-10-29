export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    // Пробуем установить в заголовки тему для SSR-рендеринга
  }
});
