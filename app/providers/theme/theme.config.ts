export interface Theme {
  name: string;
  element: string;
  bodyClass: string;
  bgColor: string;
  textColor: string;
}

export const themeConfig = {
  defaultTheme: 'light',
  storageKey: 'app-theme',

  themes: {
    light: {
      name: 'light',
      element: '',
      bodyClass: 'theme-light',
      bgColor: '#ffffff',
      textColor: '#303133',
    },
    dark: {
      name: 'dark',
      element: 'dark',
      bodyClass: 'theme-dark',
      bgColor: '#0d0d0d',
      textColor: '#f2f2f2',
    },
  } as Record<string, Theme>,
};

export type ThemeKey = keyof typeof themeConfig.themes;
