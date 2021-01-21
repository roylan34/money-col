import en from './en';
import ja from './ja';

const isDev = false;

const words = {
  en,
  ja,
};

export default words[isDev ? 'en' : 'ja'];
