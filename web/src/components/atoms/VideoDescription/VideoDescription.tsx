import React, { PureComponent } from 'react';
import Interweave from 'interweave';
import { Title, Description, Container } from './elements';

type Props = {
  title: string;
  description: string;
};

export default class VideoDescription extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { title, description } = this.props;

    return (
      <Container>
        <Title>{title}</Title>
        <Description>
          <Interweave content={description} />
        </Description>
      </Container>
    );
  };
}
