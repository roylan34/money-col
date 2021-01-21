import themes from './themes/index';

const currentTheme = 'main';

export const theme = themes[currentTheme];

export const stripeKey = process.env.REACT_APP_STRIPE_API_KEY || '';
export const stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY || '';
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || '',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || '',
  databaseURL: process.env.REACT_APP_DATABASE_URL || '',
  projectId: process.env.REACT_APP_PROJECT_ID || '',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_APP_ID || '',
};
export const wpapiConfig = {
  endpoint: process.env.REACT_APP_WP_ENDPOINT,
  username: process.env.REACT_APP_WP_USERNAME,
  password: process.env.REACT_APP_WP_PASSWORD,
} as { endpoint: string; username: string; password: string };
export const paypalKey = process.env.REACT_APP_PAYPAL_API_KEY || '';
