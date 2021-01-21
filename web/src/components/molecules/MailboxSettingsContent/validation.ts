import * as Yup from 'yup';

export const MailboxSettingsSchema = Yup.object().shape({
  notifValue: Yup.string(),
  notifOfUsageValue: Yup.string(),
});
