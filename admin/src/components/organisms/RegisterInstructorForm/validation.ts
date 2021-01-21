import * as Yup from 'yup';
import words from '../../../constants/words';

const nameRegex = /[一-龠ぁ-ゔァ-ヴー\wａ-ｚＡ-Ｚ々〆〤]+/u;

export const InstructorFormSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(`${words.emailIsRequired}`),
  lastName: Yup.string()
    .matches(nameRegex, words.lastNameIsInvalid)
    .required(words.lastNameIsRequired),
  firstName: Yup.string()
    .matches(nameRegex, words.firstNameIsInvalid)
    .required(words.firstNameIsRequired),
});
