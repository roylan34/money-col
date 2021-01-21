import React, { PureComponent } from 'react';
import {
  Container,
  RegisteredCardLabel,
  ClickableText,
  Cover,
  ConfirmationContainer,
} from './elements';
import { ConfirmationModal } from '../ConfirmationModal';
import Card from './Card';
import { CardObject } from './types';
import ErrorMessages from './ErrorMessages';
import { words } from '../../../constants';

type Props = {
  card: CardObject;
  onPressAddCard: () => void;
  hasCard?: boolean;
  onPressDeleteCard: () => void;
  hideAddButton: boolean;
  onPressCancel: () => void;
  errors: { [key: string]: string } | {};
};

type State = {
  isDelConfirmationVisible: boolean;
};

class PaymentInfo extends PureComponent<Props, State> {
  static defaultProps = {
    hasCard: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isDelConfirmationVisible: false,
    };
  }

  onPressDelete = () => {
    this.setState({ isDelConfirmationVisible: true });
  };

  onCancelDelete = () => {
    this.setState({ isDelConfirmationVisible: false });
  };

  onConfirmDelete = () => {
    const { onPressDeleteCard } = this.props;
    this.setState({ isDelConfirmationVisible: false }, () =>
      onPressDeleteCard(),
    );
  };

  render = (): React.ReactElement => {
    const {
      card,
      hasCard,
      hideAddButton,
      onPressAddCard,
      onPressCancel,
      errors,
    } = this.props;
    const { isDelConfirmationVisible } = this.state;

    return (
      <Container>
        <ErrorMessages
          errors={errors}
          isEmpty={Object.keys(errors).length < 0}
        />
        <RegisteredCardLabel>
          {words.paymentInfo.registeredCard}
        </RegisteredCardLabel>
        {hasCard ? (
          <>
            <Card brand={card.brand} last4={card.last4} />
            <ClickableText onClick={() => this.onPressDelete()}>
              {words.paymentInfo.deleteCard}
            </ClickableText>
          </>
        ) : null}
        {hasCard ? null : (
          <>
            <ClickableText
              onClick={() => onPressAddCard()}
              shouldHide={hideAddButton}>
              {words.paymentInfo.addCard}
            </ClickableText>
            <ClickableText
              onClick={() => onPressCancel()}
              shouldHide={!hideAddButton}>
              {words.paymentInfo.cancelCard}
            </ClickableText>
          </>
        )}
        <Cover isVisible={isDelConfirmationVisible}>
          <ConfirmationContainer>
            <ConfirmationModal
              title={words.confirmationDeleteTitle}
              confirmButtonTitle={words.confirmDeleteButton}
              message={words.stripeLabels.delConfirmationMsg}
              onCancel={this.onCancelDelete}
              onConfirm={this.onConfirmDelete}
            />
          </ConfirmationContainer>
        </Cover>
      </Container>
    );
  };
}

export default PaymentInfo;
