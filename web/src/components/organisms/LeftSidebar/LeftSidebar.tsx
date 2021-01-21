import React, { PureComponent } from 'react';
import { Container } from './elements';
// import { Container, ButtonWrapper } from './elements';
// import { Button } from '../../atoms/Button';
import { LeftSidebarItem } from '../../molecules/LeftSidebarItem';
import { SidebarContents } from '../../molecules/LeftSidebarItem/types';
// import { words } from '../../../constants';

type Props = {
  sidebarContentsList: Array<SidebarContents>;
  onPressSeeMore: () => void;
};

class LeftSidebar extends PureComponent<Props> {
  renderSidebarItems = () => {
    const { sidebarContentsList = [] } = this.props;
    return sidebarContentsList.map(sidebarContents => (
      <LeftSidebarItem {...sidebarContents} key={sidebarContents.link} />
    ));
  };

  render = (): React.ReactElement => {
    // const { onPressSeeMore } = this.props;
    // TODO: Uncomment see more button
    return (
      <Container>
        {this.renderSidebarItems()}
        {/* <ButtonWrapper>
          <Button
            title={words.seeMore}
            textSize="14px"
            theme="inverse"
            onPress={onPressSeeMore}
          />
        </ButtonWrapper> */}
      </Container>
    );
  };
}

export default LeftSidebar;
