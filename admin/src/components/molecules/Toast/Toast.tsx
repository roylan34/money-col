import React, { PureComponent } from 'react';
import { Warning, Star } from '../../atoms/Icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Text, AlertIconWrapper, Title } from './elements';

export type Props = {
  title: string;
  message?: string;
  type: 'error' | 'success' | 'reward';
  toastKey?: string | number;
};

class Toast extends PureComponent<Props> {
  componentDidMount() {
    if (this.props.toastKey) {
      this.showToast();
    }
  }
  componentDidUpdate(prevProps: Props) {
    const { toastKey } = this.props;

    if (
      prevProps !== this.props &&
      prevProps.toastKey !== toastKey &&
      toastKey
    ) {
      this.showToast();
    }
  }

  showToast = () => {
    toast(this.getToastBody());
  };

  getToastBody = (): React.ReactNode => {
    const { title, type, message } = this.props;

    return (
      <React.Fragment>
        <AlertIconWrapper>
          {type === 'reward' ? <Star /> : <Warning type={type} />}
        </AlertIconWrapper>
        <Title>{title}</Title>
        <Text>{message}</Text>
      </React.Fragment>
    );
  };

  render = (): React.ReactElement => {
    const { type } = this.props;

    return (
      <Container
        type={type}
        hideProgressBar={true}
        newestOnTop
        pauseOnFocusLoss={false}
      />
    );
  };
}

export default Toast;
