import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import {
  Container,
  TitleContainer,
  Title,
  IconWrapper,
  BodyContainer,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import { ArticleDescSchema } from './validation';
import { SubmitValues } from './types';
import ErrorMessages from './ErrorMessages';
import FileDescContents from './descriptionContents/FileDescContents';
import { Close } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import words from '../../../constants/words';

type Props = {
  name: string;
  title: string;
  disclosure: string;
  publishSetting: string;
  id: string;
  thumbnail: string;
  onCloseModal: () => void;
  onPressRelease: (values: SubmitValues & { id: string }) => void;
};

type State = {
  file: File | string | null;
  fileError: { [key: string]: string } | {};
};

class ArticleDescription extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      file: props.thumbnail,
      fileError: {},
    };
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    const { file, fileError } = this.state;

    if (prevState.file !== file && file === null) {
      const fileError = {
        fileError: words.fileDescErrorMsgs.thumbnailIsRequired,
      };

      this.setState({ fileError });
    }
    if (
      prevState.file !== file &&
      file !== null &&
      Object.keys(fileError).length > 0
    ) {
      this.setState({ fileError: {} });
    }
  }

  onChangeFile = (file: File | null) => {
    this.setState({ file });
  };

  onSubmitValues = (values: SubmitValues) => {
    const { onPressRelease, id } = this.props;
    const { file } = this.state;

    onPressRelease({
      ...values,
      file,
      id,
    });
  };

  render = (): React.ReactElement => {
    const {
      name,
      title,
      disclosure,
      thumbnail,
      publishSetting,
      onCloseModal,
    } = this.props;
    const { fileError } = this.state;
    const initialValues = {
      title,
      disclosure: disclosure || words.disclosureValues[0],
      publishSetting: publishSetting || words.publishDropdownValue[0],
    };

    return (
      <Container>
        <TitleContainer>
          <Title>{name}</Title>
          <IconWrapper onClick={onCloseModal}>
            <Close />
          </IconWrapper>
        </TitleContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={ArticleDescSchema}
          onSubmit={this.onSubmitValues}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { title, disclosure, publishSetting } = values;
            const allErrors = {
              ...errors,
              ...fileError,
            };
            const shouldDisableButton =
              !dirty || Object.keys(allErrors).length > 0;

            return (
              <BodyContainer>
                <ErrorMessages errors={errors} />
                <FileDescContents
                  name={name}
                  title={title}
                  disclosure={disclosure}
                  publish={publishSetting}
                  thumbnail={thumbnail || null}
                  onChangeTitle={handleChange('title')}
                  onChangeDisclosure={handleChange('disclosure')}
                  onChangePublishSetting={handleChange('publishSetting')}
                  onChangeFile={this.onChangeFile}
                />
                <ButtonContainer>
                  <ButtonWrapper>
                    <Button
                      type="submit"
                      theme="primary"
                      textSize="14px"
                      title={words.release}
                      disabled={shouldDisableButton}
                      onPress={handleSubmit}
                    />
                  </ButtonWrapper>
                </ButtonContainer>
              </BodyContainer>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default ArticleDescription;
