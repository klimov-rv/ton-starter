import { authConfig } from '../config';
import type { AuthApi } from './types';

export const authApi: AuthApi = {
  async login(credentials) {
    const { data, error } = await useFetch(authConfig.endpoints.login, {
      method: 'POST',
      body: credentials,
      credentials: 'include',
    });

    if (error.value) throw error.value;
    return data.value;
  },

  async logout() {
    await useFetch(authConfig.endpoints.logout, {
      method: 'POST',
      credentials: 'include',
    });
  },

  async check() {
    const { data, error } = await useFetch(authConfig.endpoints.checkAuth, {
      credentials: 'include',
      headers: process.server ? useRequestHeaders(['cookie']) : undefined,
    });

    if (error.value) throw error.value;
    return data.value;
  },
};
