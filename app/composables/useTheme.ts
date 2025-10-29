import { themeConfig, type ThemeKey } from '~/providers/theme/theme.config.ts';

export const useTheme = () => {
  const theme = useState<ThemeKey>('theme', () => themeConfig.defaultTheme);

  const getCurrentTheme = () => themeConfig.themes[theme.value];

  const setTheme = (newTheme: ThemeKey) => {
    const { bodyClass, element, bgColor, textColor } =
      themeConfig.themes[newTheme];

    Object.values(themeConfig.themes).forEach((t) => {
      document.documentElement.classList.remove(t.bodyClass);
      if (t.element) document.documentElement.classList.remove(t.element);
    });

    document.documentElement.classList.add(bodyClass);
    if (element) document.documentElement.classList.add(element);

    theme.value = newTheme;

    localStorage.setItem(themeConfig.storageKey, newTheme);

    // Обновляем meta-теги для SSR
    useHead({
      htmlAttrs: {
        class: bodyClass,
      },
      bodyAttrs: {
        style: `background-color: ${bgColor}; color: ${textColor};`,
      },
    });
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem(
      themeConfig.storageKey,
    ) as ThemeKey | null;
    const preferDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const defaultTheme = preferDark ? 'dark' : themeConfig.defaultTheme;

    setTheme(savedTheme || defaultTheme);
  };

  const toggleTheme = () => {
    const currentIndex = Object.keys(themeConfig.themes).indexOf(theme.value);
    const nextIndex =
      (currentIndex + 1) % Object.keys(themeConfig.themes).length;
    const nextTheme = Object.keys(themeConfig.themes)[nextIndex] as ThemeKey;

    setTheme(nextTheme);
  };

  return {
    theme,
    themes: themeConfig.themes,
    currentTheme: getCurrentTheme,
    setTheme,
    initTheme,
    toggleTheme,
  };
};
