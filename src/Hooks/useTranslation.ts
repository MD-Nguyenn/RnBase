import { i18n } from '@/Locales';
import { useLocaleStore } from '@/Stores';
import React from 'react';

const useTranslation = () => {
  const locale = useLocaleStore(s => s.locale);
  const trans = React.useCallback(
    (key: string, params: any = {}) => {
      i18n.locale = locale;
      return i18n.t(key, params);
    },
    [locale],
  );

  return trans;
};

export default useTranslation;
