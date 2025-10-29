const isProduction = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'dev';

export const authConfig: AuthProviderConfig = {
  baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'https://demo.ru',
  endpoints: {
    login: '/v1/login',
    logout: '/v1/logout',
    checkAuth: '/v1/account',
  },
  cookies: {
    auth: {
      name: 'user_auth',
      secure: isProduction || isDev,
      sameSite: isProduction ? 'lax' : 'none',
      maxAge: 60 * 60 * 24 * 365 * 5, // 5 лет
      path: '/',
    },
    session: {
      name: 'october_session',
      secure: isProduction || isDev,
      sameSite: isProduction ? 'lax' : 'none',
      maxAge: 60 * 60 * 24 * 30, // 1 месяц
      path: '/',
    },
  },
  redirects: {
    login: '/login',
    logout: '/',
    home: '/',
  },
};
