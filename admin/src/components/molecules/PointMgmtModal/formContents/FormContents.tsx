import React, { PureComponent } from 'react';
import { Moment } from 'moment';
import {
  Container,
  PointsInputWrapper,
  InputWrapper,
  InputLabel,
  // RadioButtonsWrapper,
  // DateTimePickerContainer,
  // TimePickerWrapper,
} from './elements';
import { ScheduleValues } from '../types';
import { TextInput } from '../../../atoms/TextInput';
import { Checkbox } from '../../../atoms/Checkbox';
// import { RadioButtons } from '../../../atoms/RadioButtonGroup';
// import { DatePicker } from '../../../atoms/DatePicker';
// import { TimePicker } from '../../../atoms/TimePicker';
import { words } from '../../../../constants';

type Props = {
  onChangePoints: (points: string) => void;
  onToggleShouldMakeNegative: (value: boolean) => void;
  points: number;
  shouldMakeNegative: boolean;
  schedule: ScheduleValues;
  onChangeSchedule: (schedule: string) => void;
  theme: 'specific' | 'forAll';
  onChangeDate: (date: string) => void;
  onChangeTime: (time: string) => void;
};

class FormContents extends PureComponent<Props> {
  onToggleCheckbox = (value: string) => {
    const { onToggleShouldMakeNegative } = this.props;

    onToggleShouldMakeNegative(value === 'true');
  };

  onChangeDate = (_value: Moment | null, dateString: string) => {
    const { onChangeDate } = this.props;

    onChangeDate(dateString);
  };

  onChangeTime = (_value: Moment | null, timeString: string) => {
    const { onChangeTime } = this.props;

    onChangeTime(timeString);
  };

  render = (): React.ReactElement => {
    const { points, shouldMakeNegative, onChangePoints } = this.props;

    return (
      <Container>
        <PointsInputWrapper>
          <InputWrapper>
            <TextInput
              placeholder={words.pointMgmtModalInputPlaceholder}
              theme="noBorder"
              isDynamicHeight
              value={points.toString().replace('-', '')}
              onChangeText={onChangePoints}
            />
          </InputWrapper>
          <InputLabel>{words.pointMgmtModalInputLabel}</InputLabel>
        </PointsInputWrapper>
        <Checkbox
          value={shouldMakeNegative.toString()}
          onToggle={this.onToggleCheckbox}
          label={words.pointMgmtModalCheckboxLabel}
        />
        {/*
        * COMMENTING THIS OUT FOR FIRST DEPLOY
         {theme === 'forAll' && (
          <RadioButtonsWrapper>
            <RadioButtons
              labels={['即時', '予約する']}
              value={schedule}
              onChange={onChangeSchedule}
            />
          </RadioButtonsWrapper>
        )}
        {schedule === '予約する' && (
          <DateTimePickerContainer>
            <DatePicker onChangeDate={this.onChangeDate} />
            <TimePickerWrapper>
              <TimePicker onChangeTime={this.onChangeTime} />
            </TimePickerWrapper>
          </DateTimePickerContainer>
        )} */}
      </Container>
    );
  };
}

export default FormContents;
