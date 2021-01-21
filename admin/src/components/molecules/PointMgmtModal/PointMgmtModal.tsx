import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { PointMgmtSchema } from './validation';
import { PointMgmtValues, ScheduleValues } from './types';
import {
  Container,
  HeaderContainer,
  Title,
  CloseWrapper,
  FormWrapper,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import FormContents from './formContents/FormContents';
import { Close } from '../../atoms/Icons';
import { Button } from '../../atoms/Button';
import { words } from '../../../constants';

type Props = {
  onConfirmPoints: (values: PointMgmtValues) => void;
  onClose: () => void;
} & DefaultProps;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'specific' as 'specific' | 'forAll',
};

type State = {
  shouldMakeNegative: boolean;
};

class PointMgmtModal extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  constructor(props: Props) {
    super(props);

    this.state = {
      shouldMakeNegative: false,
    };
  }

  onToggleShouldMakeNegative = (shouldMakeNegative: boolean) => {
    this.setState({ shouldMakeNegative });
  };

  onSubmitPoints = (values: PointMgmtValues) => {
    const { onConfirmPoints } = this.props;
    const { shouldMakeNegative } = this.state;

    if (shouldMakeNegative) {
      onConfirmPoints({ ...values, points: -Math.abs(values.points) });
    } else {
      onConfirmPoints({ ...values, points: Math.abs(values.points) });
    }
  };

  render = (): React.ReactElement => {
    const initialValues = {
      points: 0,
      schedule: '即時' as ScheduleValues,
      date: '',
      time: '',
    };
    const { shouldMakeNegative } = this.state;
    const { onClose, theme } = this.props;

    return (
      <Container theme={theme}>
        <HeaderContainer>
          <Title>{words.pointMgmtModalHeader}</Title>
          <CloseWrapper onClick={onClose}>
            <Close color="#333333" />
          </CloseWrapper>
        </HeaderContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={PointMgmtSchema}
          onSubmit={this.onSubmitPoints}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            const { points, schedule } = values;
            const shouldDisableButton =
              !dirty || Object.keys(errors).length > 0;

            return (
              <>
                <FormWrapper theme={theme}>
                  <FormContents
                    points={points}
                    onChangePoints={handleChange('points')}
                    shouldMakeNegative={shouldMakeNegative}
                    onToggleShouldMakeNegative={this.onToggleShouldMakeNegative}
                    theme={theme}
                    schedule={schedule as ScheduleValues}
                    onChangeSchedule={handleChange('schedule')}
                    onChangeDate={handleChange('date')}
                    onChangeTime={handleChange('time')}
                  />
                </FormWrapper>
                <ButtonContainer>
                  <ButtonWrapper>
                    <Button
                      type="submit"
                      theme="primary"
                      disabled={shouldDisableButton}
                      onPress={handleSubmit}
                      title={words.confirmButtonLabel}
                    />
                  </ButtonWrapper>
                </ButtonContainer>
              </>
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default PointMgmtModal;
