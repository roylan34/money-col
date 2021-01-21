import { paths } from '../../constants/routes/urls';
import { MyPage } from '../../components/pages/MyPage';
import { UpdateUserProfileContainer } from '../../components/pages/UpdateUserProfile';
import { ContentsContainer } from '../../components/pages/Contents';
import { WPManualsContainer } from '../../components/pages/WPManuals';
import { ContentViewContainer } from '../../components/pages/ContentView';
import { BoughtContentsContainer } from '../../components/pages/BoughtContents';
import { EmailResetPasswordContainer } from '../../components/pages/EmailResetPassword';
import { MailContainer } from '../../components/pages/Mail';
import { SelectPointsContainer } from '../../components/pages/SelectPoints';
import { SelectPaymentOptionContainer } from '../../components/pages/SelectPaymentOption';
import { PaymentConfirmation } from '../../components/pages/PaymentConfirmation';

export default [
  {
    key: 'home',
    path: paths.home,
    component: MyPage,
  },
  {
    key: 'updateUserProfile',
    path: paths.basicInfo,
    component: UpdateUserProfileContainer,
  },
  {
    key: 'contents',
    path: paths.contents,
    component: ContentsContainer,
  },
  {
    key: 'wpManuals',
    path: paths.wpManuals,
    component: WPManualsContainer,
  },
  {
    key: 'contentsView',
    path: paths.contentsView,
    component: ContentViewContainer,
  },
  {
    key: 'purchases',
    path: paths.purchases,
    component: BoughtContentsContainer,
  },
  {
    key: 'resetPasswordLink',
    path: paths.resetPasswordLink,
    component: EmailResetPasswordContainer,
  },
  {
    key: paths.mailBox,
    path: paths.mailBox,
    component: MailContainer,
  },
  {
    key: 'purchasePoints',
    path: paths.purchasePoints,
    component: SelectPointsContainer,
  },
  {
    key: 'paymentOptions',
    path: paths.paymentOptions,
    component: SelectPaymentOptionContainer,
  },
  {
    key: 'paymentConfirmation',
    path: paths.paymentConfirmation,
    component: PaymentConfirmation,
  },
];
