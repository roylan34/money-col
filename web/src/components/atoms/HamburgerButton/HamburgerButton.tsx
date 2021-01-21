import React, { PureComponent } from 'react';
import { BurgerContainer, Burger, Label } from './elements';

type Props = {
  onToggle: Function;
};

type State = {
  isOpen: boolean;
};

class HamburgerButton extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleButton = () => {
    const { onToggle } = this.props;

    this.setState(
      prevState => ({
        isOpen: !prevState.isOpen,
      }),
      onToggle(!this.state.isOpen),
    );
  };

  render = (): React.ReactElement => {
    const { isOpen } = this.state;

    return (
      <BurgerContainer onClick={this.toggleButton}>
        <Burger isOpen={isOpen}>
          <div />
          <div />
          <div />
        </Burger>
        <Label>MENU</Label>
      </BurgerContainer>
    );
  };
}

export default HamburgerButton;
