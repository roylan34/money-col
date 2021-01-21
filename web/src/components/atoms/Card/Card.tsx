import React, { PureComponent } from 'react';
import { ContainerCard } from './elements';

type Props = {
  children: React.ReactNode;
};

class Card extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { children } = this.props;
    return <ContainerCard>{children}</ContainerCard>;
  };
}

export default Card;
