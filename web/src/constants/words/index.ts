import en from './en';
import ja from './ja';

const isDev = true;

const lang = {
  en,
  ja,
};

export const words = lang[isDev ? 'en' : 'ja'];
