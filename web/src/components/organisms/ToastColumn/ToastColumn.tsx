import React, { PureComponent } from 'react';
import { Toast, ToastProps } from '../../molecules/Toast';

type Props = {
  toastsList: Array<ToastProps & { id: string }>;
};

export default class ToastColumn extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { toastsList } = this.props;

    return (
      <React.Fragment>
        {toastsList.map(({ id, ...toastData }) => (
          <Toast {...toastData} key={id} />
        ))}
      </React.Fragment>
    );
  };
}
