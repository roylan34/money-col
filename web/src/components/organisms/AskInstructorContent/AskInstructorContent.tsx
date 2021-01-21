import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { ModalWrapper, Cover, ConfirmationContainer } from './elements';
import { ConfirmationModal } from '../../molecules/ConfirmationModal';
import ModalTitle from './ModalTitle';
import { SubmitValues } from './types';
import { AskInstructorSchema } from './validation';
import AskInstructorForm from './AskInstructorForm';
import { words } from '../../../constants';

type Props = {
  instructors: Array<{ id: string; name: string }>;
  userPoints: number;
  isSendingMsg: boolean;
  onSubmit: (values: SubmitValues) => void;
  onPressClose: () => void;
  navigateToPurchasePoints: () => void;
};

type State = {
  isConfirmationVisible: boolean;
  file: File | File[] | null;
};

const POINTS_CONFIRMATION_MESSAGE = [
  '◯◯ポイントを使用して質問を送信しますか？あなたの保有ポイント：',
  'ポイント',
];

class AskInstructorContent extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isConfirmationVisible: false,
      file: null,
    };

    this.form = React.createRef();
  }

  form: React.RefObject<unknown>;

  componentDidUpdate(prevProps: Props) {
    const { isSendingMsg } = this.props;

    if (prevProps.isSendingMsg !== isSendingMsg && !isSendingMsg) {
      this.setState({ isConfirmationVisible: false });
    }
  }

  onSubmit = () => {
    this.setState({ isConfirmationVisible: true });
  };

  onCancel = (): void => {
    this.setState({ isConfirmationVisible: false });
  };

  onConfirm = (): void => {
    const { userPoints, onSubmit, navigateToPurchasePoints } = this.props;
    // @ts-ignore
    const values = this.form.current.values;

    if (userPoints >= 5) {
      onSubmit({
        ...values,
        file: this.state.file,
      });
    } else {
      navigateToPurchasePoints();
    }
  };

  onChangeFile = (value: File | File[]): void => {
    this.setState({ file: value });
  };

  render = (): React.ReactElement => {
    const initialValues = {
      instructor: '',
      title: '',
      description: '',
      file: null,
    };
    const { isConfirmationVisible } = this.state;
    const { onPressClose, userPoints, instructors, isSendingMsg } = this.props;
    const confirmationMessage =
      userPoints >= 5
        ? `${POINTS_CONFIRMATION_MESSAGE[0]}${userPoints}${POINTS_CONFIRMATION_MESSAGE[1]}`
        : words.confirmPurchasePoints;

    return (
      <ModalWrapper>
        <ModalTitle onClose={onPressClose} />
        <Formik
          //@ts-ignore
          innerRef={this.form}
          initialValues={initialValues}
          validationSchema={AskInstructorSchema}
          onSubmit={this.onSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;
            return (
              <AskInstructorForm
                {...values}
                instructors={instructors}
                onChangeInstructor={handleChange('instructor')}
                onChangeTitle={handleChange('title')}
                onChangeDescription={handleChange('description')}
                shouldDisableButton={shouldDisableButton}
                onSubmit={handleSubmit}
                onChangeFile={this.onChangeFile}
              />
            );
          }}
        </Formik>
        <Cover isVisible={isConfirmationVisible}>
          <ConfirmationContainer>
            <ConfirmationModal
              message={confirmationMessage}
              onCancel={this.onCancel}
              onConfirm={this.onConfirm}
              isLoading={isSendingMsg}
            />
          </ConfirmationContainer>
        </Cover>
      </ModalWrapper>
    );
  };
}

export default AskInstructorContent;
