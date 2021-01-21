import React, { PureComponent } from 'react';
import {
  Container,
  ValueContainer,
  Title,
  ValueLabel,
  ValueWrapper,
} from './elements';
import DropdownItems from './DropdownItems';
import { PublishIcon } from '../../atoms/Icons';
import words from '../../../constants/words';

type Props = {
  onChange: (selected: string) => void;
  labels: Array<string>;
  defValue: string;
};

type State = {
  value: string;
  isVisible: boolean;
};

class PublishDropdown extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.defValue || words.publishDropdownValue[0],
      isVisible: false,
    };
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    const { value } = this.state;
    const { onChange } = this.props;

    if (prevState.value !== value) {
      onChange(value);
    }
  }

  onChangeValue = (selected: string) => {
    this.setState({ value: selected });
  };

  onToggleDropdown = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render = (): React.ReactElement => {
    const { labels } = this.props;
    const { value, isVisible } = this.state;

    return (
      <Container onClick={this.onToggleDropdown}>
        <ValueContainer>
          <Title>{words.publishDropdownTitle}</Title>
          <ValueWrapper>
            <PublishIcon isPrivate={value === words.publishDropdownValue[0]} />
            <ValueLabel>{value}</ValueLabel>
          </ValueWrapper>
        </ValueContainer>
        <DropdownItems
          labels={labels}
          value={value}
          onChange={this.onChangeValue}
          isVisible={isVisible}
        />
      </Container>
    );
  };
}

export default PublishDropdown;
