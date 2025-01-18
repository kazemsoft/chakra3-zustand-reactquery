type TAppStore = {
  locale: string;
  token: null | string;
  setTokens: (token: string) => void;
  changeLocale: (locale: string) => void;
  logout: () => void;
};
