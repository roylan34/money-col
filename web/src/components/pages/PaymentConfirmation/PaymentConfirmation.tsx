import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PaymentConfirmationTemplate } from '../../templates/PaymentConfirmationTemplate';

type Props = {} & RouteComponentProps<{}, {}, { isSuccessful?: boolean }>;

class PaymentConfirmation extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      location: { state },
    } = this.props;
    const theme = state.isSuccessful ? 'success' : 'failedAddingPoints';
    return <PaymentConfirmationTemplate theme={theme} />;
  };
}

export default PaymentConfirmation;
