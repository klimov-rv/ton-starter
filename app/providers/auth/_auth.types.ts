export interface AuthUser {
  id: number;
  email: string;
}

export interface AuthProvider {
  login(credentials: { email: string; password: string }): Promise<AuthUser>;
  logout(): Promise<void>;
  check(): Promise<AuthUser>;
}

export interface AuthProviderConstructor {
  new (config?: AuthProviderConfig): AuthProvider;
}

interface CookieConfig {
  name: string;
  secure: boolean;
  sameSite: 'lax' | 'strict' | 'none';
  maxAge: number;
  path: string;
}

export interface AuthProviderConfig {
  baseURL: string;
  endpoints: {
    login: string;
    logout: string;
    checkAuth: string;
  };
  cookies: {
    auth: CookieConfig;
    session: CookieConfig;
  };
  redirects: {
    login: string;
    logout: string;
    home: string;
  };
}
