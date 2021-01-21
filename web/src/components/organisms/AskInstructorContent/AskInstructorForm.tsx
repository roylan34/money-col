import React, { PureComponent } from 'react';
import {
  InputContainer,
  InputWrapper,
  InputLabel,
  Required,
  DropdownWrapper,
  TextAreaWrapper,
  AttachFileWrapper,
  SubmitContainer,
  SubmitWrapper,
  InputLabelContainer,
} from './elements';
import { Dropdown } from '../../atoms/Dropdown';
import { TextInput } from '../../atoms/TextInput';
import { TextArea } from '../../atoms/TextArea';
import { Button } from '../../atoms/Button';
import { AttachFile } from '../../molecules/AttachFile';
import { words } from '../../../constants';

type Props = {
  instructor: string;
  title: string;
  description: string;
  instructors: Array<{ id: string; name: string }>;
  shouldDisableButton: boolean;
  onChangeInstructor: (instructor: string) => void;
  onChangeTitle: (title: string) => void;
  onChangeDescription: (description: string) => void;
  onChangeFile: (value: File | Array<File>) => void;
  onSubmit: () => void;
};

type State = {
  file: File | null;
};

class AskInstructorForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      file: null,
    };
  }

  render = (): React.ReactElement => {
    const {
      instructors,
      instructor,
      title,
      description,
      shouldDisableButton,
      onChangeInstructor,
      onChangeTitle,
      onChangeDescription,
      onChangeFile,
      onSubmit,
    } = this.props;

    return (
      <InputContainer>
        <InputWrapper>
          <InputLabelContainer>
            <InputLabel>{words.inputLabels.instructor}</InputLabel>
            <Required isRequired={true}>必須</Required>
          </InputLabelContainer>
          <DropdownWrapper>
            <Dropdown
              // TO DO: refactor dropdown
              data={instructors.map(
                (instructor: { name: string; id: string }) => instructor.name,
              )}
              value={instructor}
              onChange={onChangeInstructor}
            />
          </DropdownWrapper>
        </InputWrapper>
        <InputWrapper>
          <InputLabelContainer>
            <InputLabel>{words.inputLabels.title}</InputLabel>
            <Required isRequired>必須</Required>
          </InputLabelContainer>
          <DropdownWrapper>
            <TextInput
              value={title}
              placeholder={words.inputTitlePlaceholder}
              isDynamicHeight
              onChangeText={onChangeTitle}
              theme="noBorder"
            />
          </DropdownWrapper>
        </InputWrapper>
        <InputWrapper isTextArea>
          <InputLabelContainer>
            <InputLabel>{words.inputLabels.description}</InputLabel>
            <Required isRequired>必須</Required>
          </InputLabelContainer>
          <TextAreaWrapper>
            <TextArea value={description} onChange={onChangeDescription} />
          </TextAreaWrapper>
        </InputWrapper>
        <InputWrapper>
          <InputLabelContainer>
            <InputLabel>{words.inputLabels.attachment}</InputLabel>
            <Required isRequired={false}>任意</Required>
          </InputLabelContainer>
          <AttachFileWrapper>
            <AttachFile theme="askInstructor" onChange={onChangeFile} />
          </AttachFileWrapper>
        </InputWrapper>
        <SubmitContainer>
          <SubmitWrapper>
            <Button
              onPress={onSubmit}
              theme="primary"
              fontWeight="bold"
              textSize="16px"
              title={words.submitButtonLabel}
              disabled={shouldDisableButton}
            />
          </SubmitWrapper>
        </SubmitContainer>
      </InputContainer>
    );
  };
}

export default AskInstructorForm;
