import { useLocaleStore } from '@/Stores';
import { I18n } from 'i18n-js';
import en from './en.json';

export const languageKey = {
  en: 'en',
  zhCN: 'zhCN',
  zhTW: 'zhTW',
  ja: 'ja',
};

export const i18n = new I18n({
  en,
});

export const t = (key: string, params: any = {}) => {
  const locale = useLocaleStore.getState().locale;
  i18n.locale = locale;
  return i18n.t(key, params);
};
