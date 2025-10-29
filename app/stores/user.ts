// Стора АВС для импорта чего-то готового

export interface User {
  id: number | string;
  email: string;
  avatar?: {
    path: string;
  };
  legal: {
    first_name: string;
    last_name: string;
    middle_name: string;
    second_name: string;
    nikname: string;
    created_at: string;
    about: string;
    banner?: string;
    website: string;
  };
  username: string;
  phone: string; 
  socials: { id: number; key: string; social: { url: string }[] }[];
}

export interface EditUserPayload {
  first_name: string;
  last_name: string;
  middle_name: string;
  nikname: string;
  about: string;
  phone: string;
  socials: {
    youtube: { social_id: 1; url: string };
    vk: { social_id: 2; url: string };
    odnoklassniki: { social_id: 3; url: string };
    telegram: { social_id: 4; url: string };
  };
  website: string;
  avatar: string;
  banner: string;
}

export const useAuthStore = defineStore('User', {
  state: () => ({
    user: null as User | null,
    storage: {} as { [key: string]: any },
    isAuth: false,
    isCheckUser: false,
  }),

  hydrate(storeState) {
    const key =
      storeState.user && storeState.isAuth
        ? storeState.user.id.toString()
        : 'anon';
    storeState.storage = JSON.parse(localStorage.getItem(key) || '{}');
  },

  actions: {
    setStorage(key: string, data: any) {
      this.storage[key] = data;
      const storageKey =
        this.user && this.isAuth ? this.user.id.toString() : 'anon';
      localStorage.setItem(storageKey, JSON.stringify(this.storage));
      return this.storage;
    },
    getStorage(key: string) {
      return this.storage[key];
    },
    async checkUser() {
      this.isCheckUser = false;
      const headers = useRequestHeaders(['cookie']);
      if (headers.cookie) this.isAuth = headers.cookie.includes('user_auth');
      this.user = await this.getProfile();
      this.isCheckUser = true;
      return this.user;
    },
    async getProfile() {
      try {
        const apiFetch = useApiFetch();
        const res = await apiFetch.raw<User>('/account', {
          ignoreResponseError: true,
        });
        if (res.status < 300) {
          this.isAuth = true;
          return res._data as User;
        } else {
          this.isAuth = false;
          return null;
        }
      } catch (error) {
        this.isAuth = false;
        console.error('Failed isAuth', error);
        return null;
      }
    },
    async login(email: string, password: string) {
      const apiFetch = useApiFetch();
      const data = await apiFetch<User>('/login', {
        method: 'POST',
        body: { email, password },
      });
      this.isAuth = true;
      return data;
    },
    async logout() {
      const apiFetch = useApiFetch();
      await apiFetch('/logout', { method: 'POST' });
      this.isAuth = false;
      return this.user;
    },
    async register(data: any) {
      const apiFetch = useApiFetch();
      return await apiFetch<User>('/register', {
        method: 'POST',
        body: data,
      });
    },
    async update(payload: EditUserPayload) {
      console.log(payload);
      const formatPayload = new FormData();
      let key: keyof typeof payload;
      for (key in payload) {
        if (payload[key]) formatPayload.set(key, payload[key]);
      }
      if (payload.socials)
        formatPayload.set('socials', JSON.stringify(payload.socials));
      if (payload.avatar)
        formatPayload.set(
          'avatar',
          await fetch(payload.avatar).then((res) => res.blob()),
        );
      if (payload.banner)
        formatPayload.set(
          'banner',
          await fetch(payload.banner).then((res) => res.blob()),
        );
      const apiFetch = useApiFetch();
      await apiFetch('/account/update', {
        method: 'POST',
        body: formatPayload,
      });
      // await axios.post<User>("/account/update", formatPayload);
      this.user = await this.getProfile();
      return this.user;
    },
    async recoveryPassword(email: string) {
      const apiFetch = useApiFetch();
      await apiFetch('/restore', {
        method: 'POST',
        body: { email },
      });
    },
    async getUser(id: User['id']) {
      const apiFetch = useApiFetch();
      return await apiFetch<User>('/user/' + id);
    },
  },
});
