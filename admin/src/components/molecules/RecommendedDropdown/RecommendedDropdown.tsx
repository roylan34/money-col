import React, { PureComponent } from 'react';
import {
  Container,
  Value,
  DropdownContainer,
  ChoicesWrapper,
  Choices,
} from './elements';
import { ChoicesValues } from './types';
import words from '../../../constants/words';

type Props = {
  value: ChoicesValues | '';
  onChangeSelected: (selected: string) => void;
};

type State = {
  isDropdownVisible: boolean;
};

class RecommendedDropdown extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isDropdownVisible: false,
    };
  }

  onToggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };

  onSelectChoice = (selected: string) => {
    const { onChangeSelected } = this.props;

    onChangeSelected(selected);
  };

  renderDropdownChoices = (isVisible: boolean) => {
    const choices: Array<ChoicesValues> = [
      '設定しない',
      'おすすめ1に表示する',
      'おすすめ2に表示する',
      'おすすめ3に表示する',
    ];

    return (
      <DropdownContainer isVisible={isVisible}>
        {choices.map((val, index) => (
          <ChoicesWrapper key={index} onClick={() => this.onSelectChoice(val)}>
            <Choices>{val}</Choices>
          </ChoicesWrapper>
        ))}
      </DropdownContainer>
    );
  };

  render = (): React.ReactElement => {
    const { isDropdownVisible } = this.state;
    const { value } = this.props;

    return (
      <Container onClick={this.onToggleDropdown}>
        <Value>{value || words.recommendedPlaceholder}</Value>
        {this.renderDropdownChoices(isDropdownVisible)}
      </Container>
    );
  };
}

export default RecommendedDropdown;
