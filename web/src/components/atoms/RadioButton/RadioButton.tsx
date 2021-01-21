import React, { PureComponent } from 'react';
import { Container, OuterCircle, InnerCircle } from './elements';

type Props = {
  children?: React.ReactNode;
  onClickRadioButton: (isSelected: boolean) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isSelected: false as boolean,
};

class RadioButton extends PureComponent<Props & DefaultProps> {
  render = (): React.ReactElement => {
    const { children, isSelected, onClickRadioButton } = this.props;

    return (
      <Container onClick={() => onClickRadioButton(isSelected)}>
        <OuterCircle>{isSelected && <InnerCircle />}</OuterCircle>
        {children}
      </Container>
    );
  };
}

export default RadioButton;
