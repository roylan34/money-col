import React, { PureComponent } from 'react';
import { Container, RadioButtonsWrapper } from './dropdownElements';
import { RadioButtons } from '../../atoms/RadioButtonGroup';

type Props = {
  labels: Array<string>;
  value: string;
  onChange: (selected: string) => void;
  isVisible: boolean;
};

class DropdownItems extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { labels, onChange, isVisible, value } = this.props;

    return (
      <Container isVisible={isVisible}>
        <RadioButtonsWrapper>
          <RadioButtons
            labels={labels}
            value={value}
            onChange={onChange}
            hasIcon
          />
        </RadioButtonsWrapper>
      </Container>
    );
  };
}

export default DropdownItems;
