import React, { PureComponent } from 'react';
import { Moment } from 'moment';
import 'antd/dist/antd.css';
import { DateSelector } from './elements';

type Props = {
  onChangeDate:
    | ((value: Moment | null, dateString: string) => void)
    | undefined;
};

class DatePicker extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onChangeDate } = this.props;

    return <DateSelector onChange={onChangeDate} placeholder="日付を選択" />;
  };
}

export default DatePicker;
