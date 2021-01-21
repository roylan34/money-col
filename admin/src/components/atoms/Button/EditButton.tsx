import React, { PureComponent } from 'react';
import { EditWrapper } from './elements';
import { EditIcon } from '../Icons';

type Props = {
  onClick: () => void;
};

class EditButton extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onClick } = this.props;
    return (
      <EditWrapper onClick={onClick}>
        <EditIcon />
      </EditWrapper>
    );
  };
}

export default EditButton;
