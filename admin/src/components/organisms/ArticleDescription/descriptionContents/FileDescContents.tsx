import React, { PureComponent } from 'react';
import {
  Container,
  LeftContainer,
  LimitedTextAreaWrapper,
  Labels,
  RadioWrapper,
  RadioButtonsWrapper,
  RightContainer,
} from './elements';
import ItemInfo from './ItemInfo';
import { TextArea } from '../../../atoms/TextArea';
import { RadioButtons } from '../../../atoms/RadioButtonGroup';
import { ImgFileInput } from '../../../atoms/ImgFileInput';
import { PublishDropdown } from '../../../molecules/PublishDropdown';
import words from '../../../../constants/words';

type Props = {
  name: string;
  title: string;
  publish: string;
  disclosure: string;
  thumbnail: string | null;
  onChangeTitle: (articleTitle: string) => void;
  onChangeDisclosure: (disclosure: string) => void;
  onChangePublishSetting: (publishSetting: string) => void;
  onChangeFile: (file: File | null) => void;
};

class FileDescContents extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      name,
      title,
      publish,
      disclosure,
      thumbnail,
      onChangeTitle,
      onChangeDisclosure,
      onChangePublishSetting,
      onChangeFile,
    } = this.props;

    return (
      <Container>
        <LeftContainer>
          <LimitedTextAreaWrapper>
            <TextArea
              placeholder={words.articlePlaceholders.title}
              theme="gray"
              maxLimit={100}
              onChange={onChangeTitle}
              value={title}
            />
          </LimitedTextAreaWrapper>
          <Labels>{words.fileDescPlaceholders.thumbnail}</Labels>
          <ImgFileInput onChangeFile={onChangeFile} value={thumbnail || null} />
          <RadioWrapper>
            <Labels>{words.fileDescPlaceholders.disclosure}</Labels>
            <RadioButtonsWrapper>
              <RadioButtons
                labels={words.disclosureValues}
                value={disclosure || words.disclosureValues[0]}
                onChange={onChangeDisclosure}
              />
            </RadioButtonsWrapper>
          </RadioWrapper>
        </LeftContainer>
        <RightContainer>
          <ItemInfo name={name} />
          <PublishDropdown
            onChange={onChangePublishSetting}
            labels={words.publishDropdownValue}
            defValue={publish || words.publishDropdownValue[0]}
          />
        </RightContainer>
      </Container>
    );
  };
}

export default FileDescContents;
