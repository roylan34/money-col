import React, { PureComponent } from 'react';
import { Container, DropdownWrapper } from './elements';
import Dropdown from './Dropdown';
import { VerticalCircles } from '../../atoms/Icons';

type Props = {
  onClickEdit: () => void;
  onClickDelete: () => void;
};

class ListItemMenu extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClickEdit, onClickDelete } = this.props;

    return (
      <Container>
        <VerticalCircles />
        <DropdownWrapper>
          <Dropdown onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
        </DropdownWrapper>
      </Container>
    );
  };
}

export default ListItemMenu;
