import { paths } from '../../constants/routes/urls';
import { LoginContainer } from '../../components/pages/Login';
import { UpdatePasswordContainer } from '../../components/pages/UpdateDefPassword';

export default [
  {
    key: 'login',
    path: paths.login,
    component: LoginContainer,
  },
  {
    key: 'updatePassword',
    path: paths.updatePassword,
    component: UpdatePasswordContainer,
  },
];
