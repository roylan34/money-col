import React, { PureComponent } from 'react';
import { ConfirmationModal } from '../ConfirmationModal';
import { Cover, ConfirmationContainer } from './elements';

type Props = {
  isConfirmDeleteVisible: boolean;
  msg: string;
  onCancel: () => void;
  onDelete: () => void;
};

class ConfirmDeleteModal extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { isConfirmDeleteVisible, msg, onCancel, onDelete } = this.props;

    return (
      <Cover isVisible={isConfirmDeleteVisible}>
        <ConfirmationContainer>
          <ConfirmationModal
            msg={msg}
            onCancel={onCancel}
            onDelete={onDelete}
          />
        </ConfirmationContainer>
      </Cover>
    );
  };
}

export default ConfirmDeleteModal;
