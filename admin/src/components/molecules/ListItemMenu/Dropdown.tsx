import React, { PureComponent } from 'react';
import { DropdownContainer, ItemWrapper, DropdownItem } from './elements';
import words from '../../../constants/words';

type Props = {
  onClickEdit: () => void;
  onClickDelete: () => void;
};

class Dropdown extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClickEdit, onClickDelete } = this.props;

    return (
      <DropdownContainer>
        <ItemWrapper onClick={onClickEdit}>
          <DropdownItem>{words.edit}</DropdownItem>
        </ItemWrapper>
        <ItemWrapper onClick={onClickDelete}>
          <DropdownItem>{words.delete}</DropdownItem>
        </ItemWrapper>
      </DropdownContainer>
    );
  };
}

export default Dropdown;
