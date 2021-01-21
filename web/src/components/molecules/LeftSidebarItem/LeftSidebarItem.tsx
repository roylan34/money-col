import React, { PureComponent } from 'react';
import {
  ItemContainer,
  Subtitle,
  Title,
  TextContainer,
  IconWrapper,
} from './elements';
import { Flag, DollarSign, UpwardChart, Manual } from '../../atoms/Icons';
import { SidebarContents } from './types';
import { words } from '../../../constants';

const Icons: { [key: string]: React.ReactElement } = {
  [words.sidebar[0].title]: (
    <IconWrapper width={30} height={26}>
      <Flag />
    </IconWrapper>
  ),
  [words.sidebar[1].title]: (
    <IconWrapper width={30} height={28}>
      <DollarSign />
    </IconWrapper>
  ),
  [words.sidebar[2].title]: (
    <IconWrapper width={30} height={20}>
      <UpwardChart />
    </IconWrapper>
  ),
};

type Props = SidebarContents;

class LeftSidebarItem extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { title, subTitle, link } = this.props;
    return (
      <ItemContainer href={link} target="_blank">
        {Icons[title] ? (
          Icons[title]
        ) : (
          <IconWrapper width={30} height={31}>
            <Manual />
          </IconWrapper>
        )}
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subTitle}</Subtitle>
        </TextContainer>
      </ItemContainer>
    );
  };
}

export default LeftSidebarItem;
