import React, { PureComponent } from 'react';
import {
  MainContainer,
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownList,
  ItemContainer,
  Item,
  Separator,
} from './elements';

type Props = {
  data: Array<string>;
  value: string;
  onChange: (value: string) => void;
};

type State = {
  isVisible: boolean;
};

class Dropdown extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  setValue = (value: string) => {
    this.setState({ isVisible: false }, () => this.props.onChange(value));
  };

  render = (): React.ReactElement => {
    const { isVisible } = this.state;
    const { data, value } = this.props;

    return (
      <MainContainer>
        <DropdownContainer onClick={this.toggleDropdown}>
          <DropdownHeader>{value}</DropdownHeader>
        </DropdownContainer>
        <DropdownListContainer isVisible={isVisible}>
          <DropdownList>
            <ul>
              {data.map((val, index) => (
                <ItemContainer key={val} onClick={() => this.setValue(val)}>
                  <Item>{val}</Item>
                  {index < data.length - 1 ? <Separator /> : null}
                </ItemContainer>
              ))}
            </ul>
          </DropdownList>
        </DropdownListContainer>
      </MainContainer>
    );
  };
}

export default Dropdown;
