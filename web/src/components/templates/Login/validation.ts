import * as Yup from 'yup';
import { words } from '../../../constants';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(words.emailIsRequired),
  password: Yup.string().required(words.passwordIsRequired),
});
