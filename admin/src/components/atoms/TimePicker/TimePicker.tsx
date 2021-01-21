import React, { PureComponent } from 'react';
import { Moment } from 'moment';
import 'antd/dist/antd.css';
import { TimeSelector } from './elements';

type Props = {
  onChangeTime:
    | ((value: Moment | null, timeString: string) => void)
    | undefined;
};

class TimePicker extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onChangeTime } = this.props;
    return (
      <TimeSelector onChange={onChangeTime} placeholder="時間" format="HH:mm" />
    );
  };
}

export default TimePicker;
