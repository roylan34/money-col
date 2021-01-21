import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { Container, TitleContainer, Divider, Title, Done } from './elements';
import { MailboxSettingsSchema } from './validation';
import { MailboxSetttingsValues } from './types';
import SettingsFormContent from './settingsFormContent/SettingsFormContent';
import { words } from '../../../constants';

type Props = {
  onPressDone: (values: MailboxSetttingsValues) => void;
  notifSettings: string;
  notifOfUsageSettings: string;
};

class MailboxSettingsContent extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onPressDone, notifSettings, notifOfUsageSettings } = this.props;
    const initialValues = {
      notifValue: notifSettings,
      notifOfUsageValue: notifOfUsageSettings,
    };

    return (
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={MailboxSettingsSchema}
          onSubmit={onPressDone}>
          {({ handleChange, handleSubmit, values }): React.ReactElement => {
            const { notifValue, notifOfUsageValue } = values;

            return (
              <>
                <TitleContainer>
                  <Title>{words.mailboxSettingsTitle}</Title>
                  <Done onClick={() => handleSubmit()}>
                    {words.mailboxSettingsDone}
                  </Done>
                  <Divider />
                </TitleContainer>
                <SettingsFormContent
                  notifValue={notifValue}
                  notifOfUsageValue={notifOfUsageValue}
                  onChangeNotifValue={handleChange('notifValue')}
                  onChangeNotifOfUsageValue={handleChange('notifOfUsageValue')}
                />
              </>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default MailboxSettingsContent;
