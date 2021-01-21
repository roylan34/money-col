import { RouteComponentProps } from 'react-router-dom';
import { paths } from '../../constants/routes/urls';
import { SignUpContainer } from '../../components/pages/SignUp';
import { VerifyEmailPage } from '../../components/pages/VerifyEmail';
import { VerificationContainer } from '../../components/pages/Verification';
import { LoginContainer } from '../../components/pages/Login';
import { EmailResetPasswordContainer } from '../../components/pages/EmailResetPassword';
import { ResetPasswordContainer } from '../../components/pages/ResetPassword';
import { RecoverEmailContainer } from '../../components/pages/RecoverEmail';
import { EmailVerifiedContainer } from '../../components/pages/EmailVerified';
import { ResetPasswordEmailSentContainer } from '../../components/pages/ResetPasswordEmailSent';
import { UserAgreements } from '../../components/pages/UserAgreements';

const routes: Array<{
  key: string;
  path: string;
  component: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.ComponentType<RouteComponentProps<any>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | React.ComponentType<any>;
  access: 'public' | 'unauthenticated' | 'authenticated';
}> = [
  {
    key: 'login',
    path: paths.login,
    component: LoginContainer,
    access: 'unauthenticated',
  },
  {
    key: 'register',
    path: paths.register,
    component: SignUpContainer,
    access: 'unauthenticated',
  },
  {
    key: 'emailVerificationSent',
    path: paths.emailVerificationSent,
    component: VerifyEmailPage,
    access: 'public',
  },
  {
    key: 'verification',
    path: paths.verification,
    component: VerificationContainer,
    access: 'public',
  },
  {
    key: 'verifiyEmail',
    path: paths.verifyEmail,
    component: EmailVerifiedContainer,
    access: 'public',
  },
  {
    key: 'resetPasswordLink',
    path: paths.resetPasswordLink,
    component: EmailResetPasswordContainer,
    access: 'public',
  },
  {
    key: 'resetPasswordLinkSent',
    path: paths.resetPasswordLinkSent,
    component: ResetPasswordEmailSentContainer,
    access: 'public',
  },
  {
    key: 'resetPassword',
    path: paths.resetPassword,
    component: ResetPasswordContainer,
    access: 'public',
  },
  {
    key: 'recoverEmail',
    path: paths.recoverEmail,
    component: RecoverEmailContainer,
    access: 'public',
  },
  {
    key: 'privacyPolicy',
    path: paths.privacyPolicy,
    component: UserAgreements,
    access: 'public',
  },
  {
    key: 'termsOfServices',
    path: paths.termsOfServices,
    component: UserAgreements,
    access: 'public',
  },
];

export default routes;
