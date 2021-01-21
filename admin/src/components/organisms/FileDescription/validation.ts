import * as Yup from 'yup';
import words from '../../../constants/words';
import { ChoicesValues } from '../../molecules/RecommendedDropdown/types';

const recommendedValues: Array<ChoicesValues | ''> = [
  '',
  '設定しない',
  'おすすめ1に表示する',
  'おすすめ2に表示する',
  'おすすめ3に表示する',
];

export const VideoDescSchema = Yup.object().shape({
  title: Yup.string().required(words.fileDescErrorMsgs.videoTitleIsRequired),
  desc: Yup.string().required(words.fileDescErrorMsgs.videoDescIsRequired),
  disclosure: Yup.string()
    .oneOf(words.disclosureValues)
    .required(),
  salesPlan: Yup.string()
    .oneOf(words.salesPlanValues)
    .required(),
  salePrice: Yup.string().when('salesPlan', {
    is: words.salesPlanValues[1],
    then: Yup.string().required(words.fileDescErrorMsgs.salesPriceIsRequired),
  }),
  publishSetting: Yup.string()
    .oneOf(words.publishDropdownValue)
    .required(),
  recommendedValue: Yup.string()
    .oneOf(recommendedValues)
    .required(words.recommendedPlaceholder),
});

export const ProjectDescSchema = Yup.object().shape({
  title: Yup.string().required(words.fileDescErrorMsgs.pdfTitleIsRequired),
  desc: Yup.string().required(words.fileDescErrorMsgs.pdfDescIsRequired),
  disclosure: Yup.string()
    .oneOf(words.disclosureValues)
    .required(),
  salesPlan: Yup.string()
    .oneOf(words.salesPlanValues)
    .required(),
  salePrice: Yup.string().when('salesPlan', {
    is: words.salesPlanValues[1],
    then: Yup.string().required(words.fileDescErrorMsgs.salesPriceIsRequired),
  }),
  publishSetting: Yup.string()
    .oneOf(words.publishDropdownValue)
    .required(),
  recommendedValue: Yup.string()
    .oneOf(recommendedValues)
    .required(words.recommendedPlaceholder),
});
