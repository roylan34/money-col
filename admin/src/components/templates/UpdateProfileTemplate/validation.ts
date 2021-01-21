import * as Yup from 'yup';
import { words } from '../../../constants';

const nameRegex = /[一-龠ぁ-ゔァ-ヴー\wａ-ｚＡ-Ｚ々〆〤]+/u;
const FILE_SIZE_LIMIT = 20000000;
const SUPPORTED_FILE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png'];

export const UpdateBasicInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email(words.emailIsInvalid)
    .required(`${words.emailIsRequired}`),
  lastName: Yup.string()
    .matches(nameRegex, words.lastNameIsInvalid)
    .required(words.lastNameIsRequired),
  firstName: Yup.string()
    .matches(nameRegex, words.firstNameIsInvalid)
    .required(words.firstNameIsRequired),
  photo: Yup.mixed()
    .test('fileSize', words.fileIsTooLarge, value =>
      value ? value.size <= FILE_SIZE_LIMIT : true,
    )
    .test('fileType', words.unsupportedFileFormat, value =>
      value ? SUPPORTED_FILE_FORMATS.includes(value.type) : true,
    ),
  password: Yup.string(),
});

export type BasicInfoFields = {
  lastName: string;
  firstName: string;
  email: string;
  isNotifyEmail: string;
  photo?: File;
};
