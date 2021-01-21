import * as Yup from 'yup';
import words from '../../../constants/words';

export const ArticleDescSchema = Yup.object().shape({
  title: Yup.string().required(words.fileDescErrorMsgs.pdfTitleIsRequired),
  disclosure: Yup.string()
    .oneOf(words.disclosureValues)
    .required(),
  publishSetting: Yup.string()
    .oneOf(words.publishDropdownValue)
    .required(),
});
