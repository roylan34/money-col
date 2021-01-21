import React, { PureComponent } from 'react';
import { greaterThanArrow } from '../../../assets/icons';
import { Container, Wrapper, Date, Title, RightArrow } from './elements';

type Props = {
  date: string;
  title: string;
  link: string;
};

class NewsItem extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { date, title, link } = this.props;

    return (
      <Container href={link} target="_blank">
        <Wrapper>
          <Date>{date}</Date>
          <Title>{title}</Title>
        </Wrapper>
        <RightArrow src={greaterThanArrow} alt="Right Arrow" />
      </Container>
    );
  };
}

export default NewsItem;
