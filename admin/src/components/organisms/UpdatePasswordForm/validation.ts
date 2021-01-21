import * as Yup from 'yup';
import words from '../../../constants/words';

export const UpdateDefaultPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .matches(/^[a-zA-Z\d]+$/, words.passwordIsInvalid)
    .min(8, words.passwordIsInvalid)
    .required(words.passwordIsRequired),
  retypedNewPassword: Yup.string()
    .oneOf(['', null], words.retypedPasswordIsRequired)
    .oneOf([Yup.ref('newPassword')], words.passwordsMustMatch)
    .required(words.retypedPasswordIsRequired),
});
