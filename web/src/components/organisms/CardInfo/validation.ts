import * as Yup from 'yup';
import { words } from '../../../constants';

export const CardNameSchema = Yup.object().shape({
  cardHolderName: Yup.string().required(
    words.stripeLabels.errorMsgs.nameIsRequired,
  ),
});
