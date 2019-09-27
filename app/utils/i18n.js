import I18n from 'i18n-js';
// import * as RNLocalize from 'react-native-localize'

import en from './locales/en';
import es from './locales/es';

// const locales = RNLocalize.getLocales()

I18n.locale = 'es';

I18n.fallbacks = true;
I18n.translations = {
  en,
  es,
};

export default I18n;
