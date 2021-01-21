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
  notifValue: string;
  notifOfUsageValue: string;
  onChangeNotifValue: (notifValue: string) => void;
  onChangeNotifOfUsageValue: (notifOfUsageValue: string) => void;
};

class SettingsFormContent extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      notifValue,
      notifOfUsageValue,
      onChangeNotifOfUsageValue,
      onChangeNotifValue,
    } = this.props;

    return (
      <SettingsContainer>
        <SettingsWrapper>
          <Label>{words.mailboxNotifLabel}</Label>
          <CheckboxContainer>
            <CheckboxWrapper>
              <Checkbox
                value={notifValue}
                label=""
                onToggle={onChangeNotifValue}
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
                value={notifOfUsageValue}
                label=""
                onToggle={onChangeNotifOfUsageValue}
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
