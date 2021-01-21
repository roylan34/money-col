import React, { PureComponent, ChangeEvent } from 'react';
import {
  Container,
  Overlay,
  Circle,
  Label,
  ButtonWrapper,
  ButtonLabel,
  UploadFileInput,
} from './elements';
import words from '../../../constants/words';

const ACCEPTED_FILES = {
  video: 'video/*',
  pdf: '.pdf',
};

type Props = {
  onSelectFile: (value: File) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

type State = {
  isDragging: boolean;
};

const defaultProps = {
  accepted: 'video' as 'video' | 'pdf' | 'any',
};

class DragAndDrop extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  dropContainer: React.RefObject<HTMLDivElement>;
  dragCounter: number;
  constructor(props: Props & DefaultProps) {
    super(props);
    this.dropContainer = React.createRef();
    this.dragCounter = 0;

    this.state = {
      isDragging: false,
    };
  }

  componentDidMount() {
    this.dragCounter = 0;
    let div = this.dropContainer.current;
    if (div) {
      div.addEventListener('dragenter', this.handleDragIn);
      div.addEventListener('dragleave', this.handleDragOut);
      div.addEventListener('dragover', this.handleDrag);
      div.addEventListener('drop', this.handleDrop);
    }
  }

  componentWillUnmount() {
    let div = this.dropContainer.current;
    if (div) {
      div.removeEventListener('dragenter', this.handleDragIn);
      div.removeEventListener('dragleave', this.handleDragOut);
      div.removeEventListener('dragover', this.handleDrag);
      div.removeEventListener('drop', this.handleDrop);
    }
  }

  handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (
      e.dataTransfer &&
      e.dataTransfer.items &&
      e.dataTransfer.items.length > 0
    ) {
      this.setState({ isDragging: true });
    }
  };

  handleDragOut = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return;
    this.setState({ isDragging: false });
  };

  handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { onSelectFile } = this.props;
    this.setState({ isDragging: false });
    if (
      e.dataTransfer &&
      e.dataTransfer.files &&
      e.dataTransfer.files.length > 0
    ) {
      onSelectFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };

  onPressSelectButton = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const { onSelectFile } = this.props;

    if (target.files) {
      onSelectFile(target.files[0]);
    }
  };

  render = (): React.ReactElement => {
    const { isDragging } = this.state;
    const { accepted } = this.props;

    return (
      <Container ref={this.dropContainer}>
        {isDragging && <Overlay />}
        <Circle />
        <Label>{words.dragAndDropLabel}</Label>
        <ButtonWrapper htmlFor="uploadFile">
          <ButtonLabel>{words.selectFileLabel}</ButtonLabel>
        </ButtonWrapper>
        <UploadFileInput
          id="uploadFile"
          type="file"
          accept={accepted === 'any' ? '' : ACCEPTED_FILES[accepted]}
          onChange={this.onPressSelectButton}
        />
      </Container>
    );
  };
}

export default DragAndDrop;
