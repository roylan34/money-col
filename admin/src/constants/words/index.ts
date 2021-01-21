import en from './en';
import ja from './ja';

const isDev = true;

const words = {
  en,
  ja,
};

export default words[isDev ? 'ja' : 'en'];
