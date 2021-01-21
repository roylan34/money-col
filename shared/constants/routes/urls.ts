export const API_URL = 'https://money-college-dev.firebaseapp.com/';
export const STRIPE_URL = 'https://api.stripe.com/v1/';
0;
//TODO: needs to update url once at production
export const PRIVACY_POLICY_URL =
  'https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/userAgreements%2Fprivacy-policy.png?alt=media&token=71a1c301-8611-413f-9ec0-6a32456cac73';

export const PRIVACY_POLICY_URL_MOBILE =
  'https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/userAgreements%2Fprivacy-policy-mobile.png?alt=media&token=880e4a90-5110-44e5-8e92-7e36ca6b94b8';

export const TERMS_OF_SERVICES_URL =
  'https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/userAgreements%2FTerms%20of%20Service.png?alt=media&token=744b8c5a-300a-488c-8791-c311f2c54d0b';

export const TERMS_OF_SERVICES_URL_MOBILE =
  'https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/userAgreements%2FTerms%20of%20Service%20-%20Mobile.png?alt=media&token=7dedd659-7a0a-472b-ae30-d0b421706c2a';

export const paths: { [key: string]: string } = {
  root: '/',
  home: '/home',
  register: '/sign-up',
  login: '/login',
  logOut: '/logout',
  emailVerificationSent: '/verification-sent',
  verification: '/verification',
  resendVerification: '/resend-verification',
  basicInfo: '/update-profile',
  purchases: '/purchases',
  resetPasswordLink: '/get-reset-password-link',
  resetPassword: '/reset-password',
  resetPasswordLinkSent: '/reset-password-link-sent',
  verifyEmail: '/verify-email',
  recoverEmail: '/recover-email',
  contents: '/contents',
  wpManuals: '/wp-manuals',
  contentsView: '/contents/view',
  mailBox: '/mail',
  purchasePoints: '/purchase-points',
  paymentOptions: '/payment-options',
  paymentConfirmation: '/paymyent-confirmation',
  fx: '/fx',
  virtual: '/virtual',
  overseas: '/overseas',
  privacyPolicy: '/privacy-policy',
  termsOfServices: '/terms-of-services',
};

export const urls = {
  todo: {
    getTodos: `${API_URL}/todos`,
  },
};
