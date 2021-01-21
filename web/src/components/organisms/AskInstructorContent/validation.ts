import * as Yup from 'yup';
import { words } from '../../../constants';

export const AskInstructorSchema = Yup.object().shape({
  instructor: Yup.string().required(words.instructorIsRequired),
  title: Yup.string().required(words.titleIsRequired),
  description: Yup.string().required(words.descriptionIsRequired),
});
