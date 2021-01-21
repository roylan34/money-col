import React, { PureComponent } from 'react';
import { Container } from './elements';
import { PaymentConfirmation } from '../../molecules/PaymentConfirmation';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'success' as 'success' | 'failedAddingPoints',
};

class PaymentConfirmationTemplate extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { theme } = this.props;
    return (
      <Container>
        <PaymentConfirmation theme={theme} />
      </Container>
    );
  };
}

export default PaymentConfirmationTemplate;
