import React, { PureComponent } from 'react';
import {
  Container,
  Dropdown,
  Name,
  ProfileContainer,
  AvatarWrapper,
} from './elements';
import { ProfileDropdownContent } from '../../atoms/ProfileDropdownContent';
import Avatar from './Avatar';

type Props = {
  label?: string;
  imageSource?: string;
  name?: string;
  onClick?: () => void;
};

class ProfileIcon extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { label, imageSource, name, onClick } = this.props;

    return (
      <Container onClick={onClick}>
        <ProfileContainer>
          <AvatarWrapper>
            <Avatar imageSource={imageSource} label={label}>
              <Dropdown>
                <ProfileDropdownContent theme="profile" />
              </Dropdown>
            </Avatar>
          </AvatarWrapper>
          <Name>{name}</Name>
        </ProfileContainer>
      </Container>
    );
  };
}

export default ProfileIcon;
