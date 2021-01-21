import React, { PureComponent } from 'react';
import { Cover, ConfirmationContainer, FileInputWrapper } from './elements';
import Title from './Title';
import { DragAndDrop } from '../../atoms/DragAndDrop';

type Props = {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  accepted: 'video' as 'video' | 'pdf' | 'any',
};

class FileUploadModal extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;
  render = (): React.ReactElement => {
    const { title, onClose, isVisible, onUpload, accepted } = this.props;

    return (
      <Cover isVisible={isVisible}>
        <ConfirmationContainer>
          <Title title={title} onClose={onClose} />
          <FileInputWrapper>
            <DragAndDrop onSelectFile={onUpload} accepted={accepted} />
          </FileInputWrapper>
        </ConfirmationContainer>
      </Cover>
    );
  };
}

export default FileUploadModal;
