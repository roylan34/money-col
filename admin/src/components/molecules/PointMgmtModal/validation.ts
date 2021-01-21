import * as Yup from 'yup';

export const PointMgmtSchema = Yup.object().shape({
  points: Yup.number().required(),
  schedule: Yup.string().oneOf(['即時', '予約する']),
  date: Yup.string().when('schedule', {
    is: '予約する',
    then: Yup.string().required(),
  }),
  time: Yup.string().when('schedule', {
    is: '予約する',
    then: Yup.string().required(),
  }),
});
