import React, { PureComponent } from 'react';
import { Container } from './elements';

type Props = {
  isVisible?: boolean;
  children?: React.ReactElement | null;
};

class Modal extends PureComponent<Props> {
  static defaultProps = {
    isVisible: false,
    children: null,
  };

  render() {
    const { isVisible, children } = this.props;

    return <Container isVisible={isVisible}>{children}</Container>;
  }
}

export default Modal;
