import React, { PureComponent } from 'react';
import { LeftSideBarItem } from '../../atoms/LeftSidebarItem';
import { Container, ContentContainer, ItemContainer, Header } from './elements';
import words from '../../../constants/words';

const ITEMS = Object.entries(words.leftSideBarLinks);

type Props = {
  logOut: () => void;
  isInstructor?: boolean;
};

class LeftSidebar extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { logOut, isInstructor = false } = this.props;

    return (
      <Container>
        <ContentContainer>
          <Header>{words.leftSideBarHeader}</Header>
          <ItemContainer>
            {ITEMS.map(data => (
              <LeftSideBarItem
                key={data[0]}
                tab={data[0]}
                logOut={logOut}
                isInstructor={isInstructor}
              />
            ))}
          </ItemContainer>
        </ContentContainer>
      </Container>
    );
  };
}

export default LeftSidebar;
