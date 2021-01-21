import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UpdateUserProfile } from '../../templates/UpdateUserProfile';
import { BasicInfoFields } from '../../templates/UpdateUserProfile/validation';

type Props = {
  id: string;
  basicInfoError?: string;
  updateUserSuccessInfo?: { message: string; timestamp: number };
  lastName: string;
  firstName: string;
  email: string;
  initials: string;
  photoURL?: string;
  customerId: string;
  card: {
    cardId: string;
    brand: string | undefined;
    last4: string;
  };
  paymentInfoError: { [key: string]: string } | {};
  updateBasicInfo: (id: string, params: BasicInfoFields) => void;
  addStripeCard: (
    token: stripe.Token,
    stripeCustomerId: string,
    userId: string,
  ) => void;
  deleteStripeCard: (
    stripeCustomerId: string,
    cardId: string,
    userId: string,
  ) => void;
  emailVerified: boolean;
} & RouteComponentProps;

export default class extends PureComponent<Props> {
  handleOnSubmit = (params: BasicInfoFields) => {
    const { updateBasicInfo, id } = this.props;
    updateBasicInfo(id, params);
  };

  handleSubmitCard = (token: stripe.Token) => {
    const { addStripeCard, customerId, id } = this.props;
    addStripeCard(token, customerId, id);
  };

  handleDeleteCard = () => {
    const {
      deleteStripeCard,
      customerId,
      card: { cardId },
      id,
    } = this.props;
    deleteStripeCard(customerId, cardId, id);
  };

  checkIfHasCard = (): boolean => {
    const { card } = this.props;

    return Object.values(card).every(
      x => x !== '' && x !== undefined && x !== null,
    );
  };

  render = (): React.ReactElement => {
    const {
      basicInfoError,
      lastName,
      firstName,
      email,
      initials,
      photoURL,
      paymentInfoError,
      card,
      updateUserSuccessInfo,
      emailVerified,
    } = this.props;

    return (
      <UpdateUserProfile
        updateBasicInfo={this.handleOnSubmit}
        basicInfoError={basicInfoError}
        updateUserSuccessInfo={updateUserSuccessInfo}
        lastName={lastName}
        firstName={firstName}
        email={email}
        initials={initials}
        photoURL={photoURL}
        card={{
          brand: card.brand,
          last4: card.last4,
        }}
        hasCard={this.checkIfHasCard()}
        onPressDeleteCard={this.handleDeleteCard}
        onSubmit={this.handleSubmitCard}
        errors={paymentInfoError}
        isEmailVerified={emailVerified}
      />
    );
  };
}
