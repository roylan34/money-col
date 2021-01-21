import * as Yup from 'yup';
import words from '../../../constants/words';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(`${words.emailIsRequired}`),
  password: Yup.string()
    .matches(/^[a-zA-Z\d]+$/, words.passwordContainsInvalidChars)
    .min(8, words.passwordIsInvalid)
    .required(words.passwordIsRequired),
  saveLoginStatus: Yup.string(),
});
