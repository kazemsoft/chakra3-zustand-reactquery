import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const appStore = create<TAppStore>()(
  persist(
    immer<TAppStore>((set) => ({
      locale: "fa",
      token: null,
      setTokens: (token) =>
        set((state) => {
          state.token = token;
        }),
      logout: () =>
        set((state) => {
          state.token = null;
        }),
      changeLocale: (locale) => {
        set((state) => {
          state.locale = locale;
        });
      },
    })),
    {
      name: "@cheehome-app",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default appStore;
