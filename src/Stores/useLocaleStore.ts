import { storage, STORAGE_KEYS } from '@/Storage';
import { create } from 'zustand';
interface ILocaleStore {
  locale: string;
  setLocale: (lang: string) => void;
}

export const useLocaleStore = create<ILocaleStore>(set => ({
  locale: storage.getString(STORAGE_KEYS.LOCALE) || 'en',
  setLocale: (lang: string) => set({ locale: lang }),
}));
