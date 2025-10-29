import { authConfig } from './config';
import type { AuthProvider } from './_auth.types';

export class SessionAuthProvider implements AuthProvider {
  constructor(private readonly config: AuthProviderConfig = authConfig) {}

  private setClientCookies() {
    if (process.client) {
      const authCookie = useCookie(this.config.cookies.auth.name, {
        secure: this.config.cookies.auth.secure,
        sameSite: this.config.cookies.auth.sameSite,
        maxAge: this.config.cookies.auth.maxAge,
        path: this.config.cookies.auth.path,
      });

      const sessionCookie = useCookie(this.config.cookies.session.name, {
        secure: this.config.cookies.session.secure,
        sameSite: this.config.cookies.session.sameSite,
        maxAge: this.config.cookies.session.maxAge,
        path: this.config.cookies.session.path,
      });

      // Симулируем установку кук, которые реально устанавливаются бэкендом
      authCookie.value = 'client-side-mock';
      sessionCookie.value = 'client-side-mock';
    }
  }

  async login(credentials: { email: string; password: string }) {
    const { data, error } = await useFetch(this.config.endpoints.login, {
      method: 'POST',
      baseURL: this.config.baseURL,
      body: credentials,
      credentials: 'include',
    });

    if (error.value) {
      throw new Error(error.value.data?.message || 'Login failed');
    }

    this.setClientCookies();
    return data.value;
  }

  async logout() {
    await useFetch(this.config.endpoints.logout, {
      method: 'POST',
      baseURL: this.config.baseURL,
      credentials: 'include',
    });

    // Очистка клиентских кук
    if (process.client) {
      useCookie(this.config.cookies.auth.name).value = null;
      useCookie(this.config.cookies.session.name).value = null;
    }
  }

  async check() {
    const headers = process.server ? useRequestHeaders(['cookie']) : undefined;

    const { data, error } = await useFetch(this.config.endpoints.checkAuth, {
      baseURL: this.config.baseURL,
      credentials: 'include',
      headers,
    });

    if (error.value) {
      throw new Error('Not authenticated');
    }

    return data.value;
  }
}
