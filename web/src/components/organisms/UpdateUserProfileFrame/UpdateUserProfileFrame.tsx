import React, { PureComponent } from 'react';
import {
  Container,
  Avatar,
  AvatarLabel,
  UserSettingNav,
  SelectSettingsButton,
  AvatarImage,
  AvatarInitials,
  TitleContainer,
  FormContainer,
  Title,
} from './elements';
import { words } from '../../../constants';
import { FormOptionTitles, FormTypes } from './types';

const UserSettingsTitles: FormOptionTitles = {
  basicInfo: words.basicInfoTitle,
  paymentInfo: words.paymentInfoTitle,
};

type Props = {
  username: string;
  photoURL?: string;
  initials: string;
  formType: FormTypes;
  children: React.ReactNode;
  onPressSelectFormType: (formType: FormTypes) => void;
};

export default class extends PureComponent<Props> {
  renderButtons = (): Array<React.ReactNode> => {
    const { onPressSelectFormType, formType } = this.props;
    const options = Object.entries(UserSettingsTitles);

    return options.map((data, index) => {
      const isActive = formType === data[0];

      return (
        <SelectSettingsButton
          key={data[0]}
          isActive={isActive}
          hasBottomBorder={index === options.length - 1}
          onClick={() => onPressSelectFormType(data[0] as FormTypes)}>
          {data[1]}
        </SelectSettingsButton>
      );
    });
  };

  render = (): React.ReactElement => {
    const { username, children, photoURL, initials, formType } = this.props;

    return (
      <Container>
        <UserSettingNav>
          <Avatar>
            {photoURL ? (
              <AvatarImage src={photoURL} alt={initials} />
            ) : (
              <AvatarInitials>{initials}</AvatarInitials>
            )}
          </Avatar>
          <AvatarLabel>{username}</AvatarLabel>
          {this.renderButtons()}
        </UserSettingNav>
        <FormContainer>
          <TitleContainer>
            <Title>{UserSettingsTitles[formType]}</Title>
          </TitleContainer>
          {children}
        </FormContainer>
      </Container>
    );
  };
}
