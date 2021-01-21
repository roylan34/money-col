import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import {
  Container,
  BodyContainer,
  TitleContainer,
  Title,
  IconWrapper,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import FileDescContents from './FileDescContents';
import ErrorMessages from './ErrorMessages';
import { VideoDescSchema, ProjectDescSchema } from './validation';
import { SubmitValues, RecommendedItems } from './types';
import { Close } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { RowData } from '../../templates/ProjectContentTemplate/types';
import words from '../../../constants/words';

const SCHEMAS = {
  video: VideoDescSchema,
  project: ProjectDescSchema,
};

type Props = {
  isModalVisible: boolean;
  onCloseModal: () => void;
  onPressRelease: (values: SubmitValues & { id: string }) => void;
  fileDescError: { [key: string]: string } | {};
  name: string;
  recommendedItems: RecommendedItems;
  recommendedTitle: RecommendedItems;
} & RowData &
  Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

type State = {
  file: File | string | null;
  fileError: { [key: string]: string } | {};
};

const defaultProps = {
  type: 'video' as 'video' | 'project',
};

class FileDescription extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  constructor(props: Props & DefaultProps) {
    super(props);

    this.state = {
      file: props.thumbnail || null,
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

  onSubmitValues = (values: SubmitValues) => {
    const { file } = this.state;
    const { onPressRelease, id } = this.props;

    onPressRelease({
      ...values,
      file,
      id,
    });
  };

  onChangeFile = (file: File | null) => {
    this.setState({ file });
  };

  onClose = () => {
    const { onCloseModal } = this.props;

    this.setState({ file: null }, () => onCloseModal());
  };

  render = (): React.ReactElement => {
    const {
      isModalVisible,
      fileDescError,
      type,
      name,
      title,
      publish,
      description,
      disclosure,
      salesPlan,
      salePoints,
      fileName,
      recommendedValue,
      thumbnail,
      recommendedItems,
      recommendedTitle,
    } = this.props;
    const initialValues = {
      title,
      desc: description,
      disclosure: disclosure || words.disclosureValues[0],
      salesPlan: salesPlan || words.salesPlanValues[0],
      salePrice: salePoints,
      publishSetting: publish || words.publishDropdownValue[0],
      recommendedValue: recommendedValue,
    };
    const { file, fileError } = this.state;

    return (
      <Container isVisible={isModalVisible}>
        <TitleContainer>
          <Title>{name}</Title>
          <IconWrapper onClick={this.onClose}>
            <Close />
          </IconWrapper>
        </TitleContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={SCHEMAS[type]}
          onSubmit={this.onSubmitValues}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const {
              title,
              desc,
              salesPlan,
              salePrice,
              recommendedValue,
            } = values;
            const allErrors = {
              ...fileDescError,
              ...errors,
              ...fileError,
            };
            const shouldDisableButton =
              !dirty || Object.keys(allErrors).length > 0 || file === null;

            return (
              <BodyContainer>
                <ErrorMessages errors={allErrors} />
                <FileDescContents
                  name={fileName}
                  title={title}
                  desc={desc}
                  publish={publish}
                  disclosure={disclosure}
                  salesPlan={salesPlan}
                  salePrice={salePrice || ''}
                  recommendedValue={recommendedValue}
                  recommendedItems={recommendedItems}
                  recommendedTitles={recommendedTitle}
                  thumbnail={thumbnail || null}
                  type={type}
                  onChangeTitle={handleChange('title')}
                  onChangeDesc={handleChange('desc')}
                  onChangeFile={this.onChangeFile}
                  onChangeDisclosure={handleChange('disclosure')}
                  onChangeSalesPlan={handleChange('salesPlan')}
                  onChangeSalePrice={handleChange('salePrice')}
                  onChangePublishSetting={handleChange('publishSetting')}
                  onChangeRecommended={handleChange('recommendedValue')}
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

export default FileDescription;
