import React, { PureComponent } from 'react';
import {
  SettingsContainer,
  SettingsWrapper,
  Divider,
  Label,
  CheckboxContainer,
  CheckboxWrapper,
  CheckboxLabel,
} from './elements';
import { Checkbox } from '../../../atoms/Checkbox';
import { words } from '../../../../constants';

type Props = {
  notifyRepliesWithEmail: string;
  displaySendConfirmation: string;
  onChangeNotifyRepliesWithEmail: (notifyRepliesWithEmail: string) => void;
  onChangeDisplaySendConfirmation: (displaySendConfirmation: string) => void;
};

class SettingsFormContent extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      notifyRepliesWithEmail,
      displaySendConfirmation,
      onChangeNotifyRepliesWithEmail,
      onChangeDisplaySendConfirmation,
    } = this.props;

    return (
      <SettingsContainer>
        <SettingsWrapper>
          <Label>{words.mailboxNotifLabel}</Label>
          <CheckboxContainer>
            <CheckboxWrapper>
              <Checkbox
                value={notifyRepliesWithEmail}
                label=""
                onToggle={onChangeNotifyRepliesWithEmail}
                theme="settings"
              />
            </CheckboxWrapper>
            <CheckboxLabel>{words.mailboxNotifCheckboxLabel}</CheckboxLabel>
          </CheckboxContainer>
        </SettingsWrapper>
        <Divider />
        <SettingsWrapper>
          <Label>{words.mailboxNotifUsageLabel}</Label>
          <CheckboxContainer>
            <CheckboxWrapper>
              <Checkbox
                value={displaySendConfirmation}
                label=""
                onToggle={onChangeDisplaySendConfirmation}
                theme="settings"
              />
            </CheckboxWrapper>
            <CheckboxLabel>
              {words.mailboxNotifUsageCheckboxLabel}
            </CheckboxLabel>
          </CheckboxContainer>
        </SettingsWrapper>
      </SettingsContainer>
    );
  };
}

export default SettingsFormContent;
