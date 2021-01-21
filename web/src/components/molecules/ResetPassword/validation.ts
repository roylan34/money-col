import * as Yup from 'yup';
import { words } from '../../../constants';

export const SendEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(words.emailIsRequired),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/^[a-zA-Z\d]+$/, words.passwordIsInvalid)
    .min(8, words.passwordIsInvalid)
    .required(words.passwordIsRequired),
  retypedPassword: Yup.string()
    .oneOf(['', null], words.retypedPasswordIsRequired)
    .oneOf([Yup.ref('password')], words.passwordsMustMatch)
    .required(words.retypedPasswordIsRequired),
});
