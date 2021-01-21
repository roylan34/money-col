import React, { PureComponent } from 'react';
import {
  WebContainer,
  MobileContainer,
  Item,
  Separator,
  Label,
  BackItemContainer,
} from './elements';
import DropdownItems from './DropdownItems';
import { words } from '../../../constants';

const DROPDOWN_ENTRIES: { [key: string]: [string, string][] } = {
  profile: Object.entries(words.userDropdown.profile),
  manuals: Object.entries(words.userDropdown.manuals),
};

type Props = {
  onPressBackItem?: () => void;
  isVisible?: boolean;
  theme: 'profile' | 'manuals';
};

class ProfileDropdownContent extends PureComponent<Props> {
  renderWeb = (): React.ReactElement => {
    const { theme } = this.props;

    return (
      <WebContainer>
        <DropdownItems dropdownEntries={DROPDOWN_ENTRIES[theme]} />
      </WebContainer>
    );
  };

  renderMobile = (): React.ReactElement => {
    const { onPressBackItem, isVisible, theme } = this.props;
    const backItem = words.userDropdown.myPageMenu;
    return (
      <MobileContainer isVisible={isVisible}>
        <BackItemContainer onClick={onPressBackItem}>
          <Item isBackItem>
            <Label>{`<   ${backItem}`}</Label>
          </Item>
          <Separator />
        </BackItemContainer>
        <DropdownItems dropdownEntries={DROPDOWN_ENTRIES[theme]} />
      </MobileContainer>
    );
  };

  render = (): React.ReactElement => {
    return (
      <>
        {this.renderWeb()}
        {this.renderMobile()}
      </>
    );
  };
}

export default ProfileDropdownContent;
