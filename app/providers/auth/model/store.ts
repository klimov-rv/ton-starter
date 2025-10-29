import { defineStore } from 'pinia';
import { authApi } from '../api';
import type { AuthUser } from './types.ts';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as AuthUser | null,
    isAuthenticated: false,
  }),

  actions: {
    async login(credentials: { email: string; password: string }) {
      this.user = await authApi.login(credentials);
      this.isAuthenticated = true;
    },

    async check() {
      try {
        this.user = await authApi.check();
        this.isAuthenticated = true;
      } catch {
        this.logout();
      }
    },

    logout() {
      authApi.logout();
      this.$reset();
    },
  },
});
