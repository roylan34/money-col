import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import {
  Container,
  TitleContainer,
  Divider,
  Title,
  Done,
  LoadingWrapper,
} from './elements';
import { MailboxSettingsSchema } from './validation';
import { MailboxSetttingsValues } from './types';
import SettingsFormContent from './settingsFormContent/SettingsFormContent';
import { words } from '../../../constants';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';

type Props = {
  onPressDone: (values: MailboxSetttingsValues) => void;
  notifyRepliesWithEmail: string;
  displaySendConfirmation: string;
  isUpdatingMailboxSettings: boolean;
};

class MailboxSettingsContent extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressDone,
      notifyRepliesWithEmail,
      displaySendConfirmation,
      isUpdatingMailboxSettings,
    } = this.props;
    const initialValues = {
      notifyRepliesWithEmail,
      displaySendConfirmation,
    };

    return (
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={MailboxSettingsSchema}
          onSubmit={onPressDone}>
          {({ handleChange, handleSubmit, values }): React.ReactElement => {
            const { notifyRepliesWithEmail, displaySendConfirmation } = values;

            return (
              <>
                <TitleContainer>
                  <Title>{words.mailboxSettingsTitle}</Title>
                  {isUpdatingMailboxSettings ? (
                    <LoadingWrapper>
                      <LoadingIndicator />
                    </LoadingWrapper>
                  ) : (
                    <Done onClick={() => handleSubmit()}>
                      {words.mailboxSettingsDone}
                    </Done>
                  )}
                  <Divider />
                </TitleContainer>
                <SettingsFormContent
                  notifyRepliesWithEmail={notifyRepliesWithEmail}
                  displaySendConfirmation={displaySendConfirmation}
                  onChangeNotifyRepliesWithEmail={handleChange(
                    'notifyRepliesWithEmail',
                  )}
                  onChangeDisplaySendConfirmation={handleChange(
                    'displaySendConfirmation',
                  )}
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
