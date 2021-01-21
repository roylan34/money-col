import React, { PureComponent } from 'react';
import { ProfileIcon } from '../ProfileIcon';
import { ProfileDropdownContent } from '../../atoms/ProfileDropdownContent';
import { words } from '../../../constants';
import {
  Container,
  ProfileContainer,
  ItemWrapper,
  Item,
  ItemLink,
} from './elements';
import { paths } from '../../../constants/routes/urls';

type Props = {
  onPressHamburgerItem: (key: string) => void;
  label?: string;
  imageSource?: string;
  name?: string;
};

type State = {
  isProfileMenuVisibile: boolean;
  isProfileDropdownVisible: boolean;
  isManualMenuVisibile: boolean;
  isManualDropdownVisible: boolean;
};

const LABELS = Object.entries(words.topNavBarLabels);

class HamburgerContent extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isProfileMenuVisibile: true,
      isProfileDropdownVisible: false,
      isManualMenuVisibile: true,
      isManualDropdownVisible: false,
    };
  }

  toggleProfileMenu = () => {
    this.setState(prevState => ({
      isProfileMenuVisibile: !prevState.isProfileMenuVisibile,
      isProfileDropdownVisible: true,
      isManualMenuVisibile: false,
      isManualDropdownVisible: false,
    }));
  };

  toggleProfileDropdown = () => {
    this.setState(prevState => ({
      isProfileDropdownVisible: !prevState.isProfileDropdownVisible,
      isProfileMenuVisibile: true,
      isManualDropdownVisible: false,
      isManualMenuVisibile: true,
    }));
  };

  toggleManualMenu = () => {
    this.setState(prevState => ({
      isManualMenuVisibile: !prevState.isManualMenuVisibile,
      isManualDropdownVisible: true,
      isProfileMenuVisibile: false,
      isProfileDropdownVisible: false,
    }));
  };

  toggleManualDropdown = () => {
    this.setState(prevState => ({
      isManualDropdownVisible: !prevState.isManualDropdownVisible,
      isManualMenuVisibile: true,
      isProfileDropdownVisible: false,
      isProfileMenuVisibile: true,
    }));
  };

  toggleHamburgerButton = (isManualItem: boolean, data: string) => {
    const { onPressHamburgerItem } = this.props;

    if (!isManualItem) onPressHamburgerItem(data);
    else this.toggleManualMenu();
  };

  renderItems = (): Array<React.ReactElement> => {
    return LABELS.map((data, index) =>
      index === 0 ? (
        <ItemLink key={index} to={paths.home}>
          <Item>{data[1]}</Item>
        </ItemLink>
      ) : (
        <ItemWrapper
          key={index}
          onClick={() => this.toggleHamburgerButton(index === 1, data[0])}
          isManualItem={index === 1}>
          <Item>{data[1]}</Item>
        </ItemWrapper>
      ),
    );
  };

  render = (): React.ReactElement => {
    const { label, imageSource, name } = this.props;
    const {
      isProfileMenuVisibile,
      isProfileDropdownVisible,
      isManualDropdownVisible,
    } = this.state;

    return (
      <Container>
        <ProfileContainer isVisible={isProfileMenuVisibile}>
          <ProfileIcon
            label={label}
            name={name}
            imageSource={imageSource}
            onClick={this.toggleProfileMenu}
          />
          {this.renderItems()}
        </ProfileContainer>
        <ProfileDropdownContent
          onPressBackItem={this.toggleProfileDropdown}
          isVisible={isProfileDropdownVisible}
          theme="profile"
        />
        <ProfileDropdownContent
          onPressBackItem={this.toggleManualDropdown}
          isVisible={isManualDropdownVisible}
          theme="manuals"
        />
      </Container>
    );
  };
}

export default HamburgerContent;
