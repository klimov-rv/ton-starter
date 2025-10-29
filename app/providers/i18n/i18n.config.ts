export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['ru', 'en'],
  messages: {
    ru: {
      welcome: 'Добро пожаловать в TON Starter Kit',
    },
    en: {
      welcome: 'Welcome to the TON Starter Kit',
    },
  },
}));
