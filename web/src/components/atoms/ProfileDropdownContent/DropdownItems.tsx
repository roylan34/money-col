import React, { PureComponent } from 'react';
import { ItemContainer, Item, Label, Separator, LinkWrapper } from './elements';
import { paths } from '../../../constants/routes/urls';
import { words } from '../../../constants';

type Props = {
  dropdownEntries: [string, string][];
};

class DropdownItems extends PureComponent<Props> {
  render = (): Array<React.ReactElement> => {
    const { dropdownEntries } = this.props;

    return dropdownEntries.map((data, index) =>
      data[1] === words.userDropdown.manuals.articles ? (
        <ItemContainer key={data[0]} isBackItem={false}>
          <LinkWrapper
            to={{
              pathname: paths.contents,
              state: {
                defaultContentType: 'manualList',
              },
            }}>
            <Item isBackItem={false}>
              <Label>{data[1]}</Label>
            </Item>
          </LinkWrapper>
        </ItemContainer>
      ) : (
        <ItemContainer key={data[0]} isBackItem={false}>
          <LinkWrapper
            to={paths[data[0]]}
            target={
              data[0] === 'privacyPolicy' || data[0] === 'termsOfServices'
                ? '_blank'
                : '_self'
            }>
            <Item isBackItem={false}>
              <Label>{data[1]}</Label>
            </Item>
            {index < dropdownEntries.length - 1 && <Separator />}
          </LinkWrapper>
        </ItemContainer>
      ),
    );
  };
}

export default DropdownItems;
