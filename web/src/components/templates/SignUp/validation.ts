import * as Yup from 'yup';
import { words } from '../../../constants';

const nameRegex = /[一-龠ぁ-ゔァ-ヴー\wａ-ｚＡ-Ｚ々〆〤]+/u;

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(`${words.emailIsRequired}`),
  lastName: Yup.string()
    .matches(nameRegex, words.lastNameIsInvalid)
    .required(words.lastNameIsRequired),
  firstName: Yup.string()
    .matches(nameRegex, words.firstNameIsInvalid)
    .required(words.firstNameIsRequired),
  password: Yup.string()
    .matches(/^[a-zA-Z\d]+$/, words.passwordContainsInvalidChars)
    .min(8, words.passwordIsInvalid)
    .required(`${words.passwordIsRequired}`),
  retypedPassword: Yup.string()
    .oneOf(['', null], words.retypedPasswordIsRequired)
    .oneOf([Yup.ref('password')], words.passwordsMustMatch)
    .required(words.retypedPasswordIsRequired),
  joinMailingList: Yup.string(),
});

export type SignUpFieldsType = {
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  retypedPassword: string;
  joinMailingList: string;
};
