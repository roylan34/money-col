import React, { PureComponent } from 'react';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { Formik, FormikErrors } from 'formik';
import { Container } from './elements';
import CardInfo from './CardInfo';
import { CardNameSchema } from './validation';
import { CardNameField, CreditCardErrors, FormCompleteFlags } from './types';
import ErrorMessages from './ErrorMessages';
import { words } from '../../../constants';

type Props = {
  onSubmit: (token: stripe.Token) => void;
} & Partial<DefaultProps> &
  ReactStripeElements.InjectedStripeProps;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'updateProfile' as 'updateProfile' | 'purchasePoints',
};

type State = {
  cardholderName: string;
  formErrors: CreditCardErrors;
  isFormComplete: FormCompleteFlags;
};

class CardInfoForm extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  constructor(props: Props & DefaultProps) {
    super(props);

    this.state = {
      cardholderName: '',
      formErrors: {
        cardHolderName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
        nameIsRequired: '',
      },
      isFormComplete: {
        cardNumberComplete: false,
        cardExpiryComplete: false,
        cardCvcComplete: false,
      },
    };
  }

  onPressSubmit = (values: CardNameField): void => {
    this.setState({
      cardholderName: values.cardHolderName,
    });

    this.onConfirm();
  };

  handleStripeElementError = (
    errorKey: string,
    completionKey: string,
    event: ReactStripeElements.ElementChangeResponse,
  ) => {
    const { formErrors } = this.state;

    let errorMsg = event.empty
      ? words.stripeLabels.errorMsgs[`${errorKey}IsRequired`]
      : event.error && !formErrors[errorKey]
      ? words.stripeLabels.errorMsgs[errorKey]
      : '';

    this.setState((prevState: State) => ({
      formErrors: {
        ...prevState.formErrors,
        [errorKey]: errorMsg,
      },
      isFormComplete: {
        ...prevState.isFormComplete,
        [completionKey]: event.complete,
      },
    }));
  };

  onChangeStripeElement = (
    event: ReactStripeElements.ElementChangeResponse,
  ): void => {
    const errorKey = event.elementType;
    const completionKey = `${event.elementType}Complete`;

    this.handleStripeElementError(errorKey, completionKey, event);
  };

  handleNameError = (error: FormikErrors<CardNameField>) => {
    const { formErrors } = this.state;

    const errorMsg = error.cardHolderName
      ? words.stripeLabels.errorMsgs.nameIsRequired
      : '';

    if (errorMsg !== formErrors.nameIsRequired) {
      this.setState((prevState: State) => ({
        formErrors: {
          ...prevState.formErrors,
          nameIsRequired: errorMsg,
        },
      }));
    }
  };

  isFormErrorEmpty = (): boolean => {
    const { formErrors } = this.state;

    return !Object.values(formErrors).some(x => x !== null && x !== '');
  };

  isFormComplete = (values: CardNameField): boolean => {
    const { isFormComplete } = this.state;

    const isStripeComplete = Object.values(isFormComplete).every(
      x => x !== false,
    );

    const hasName = values.cardHolderName ? true : false;

    return isStripeComplete && hasName;
  };

  onConfirm = async (): Promise<void> => {
    const { onSubmit, stripe } = this.props;
    const { cardholderName } = this.state;

    if (stripe) {
      const result: ReactStripeElements.TokenResponse = await stripe.createToken(
        { type: 'card', name: cardholderName },
      );
      const { token, error } = result;

      if (token) {
        onSubmit(token);
      } else {
        console.log('ERROR:', error);
      }
    }
  };

  render = (): React.ReactElement => {
    const { formErrors } = this.state;
    const { theme } = this.props;
    const initialValues: CardNameField = {
      cardHolderName: '',
    };

    return (
      <Container>
        <ErrorMessages errors={formErrors} isEmpty={this.isFormErrorEmpty()} />
        <Formik
          initialValues={initialValues}
          validationSchema={CardNameSchema}
          onSubmit={this.onPressSubmit}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            dirty,
          }): React.ReactElement => {
            this.handleNameError(errors);
            const { cardHolderName } = values;
            const shouldDisableSubmit =
              !dirty ||
              !this.isFormErrorEmpty() ||
              !this.isFormComplete(values);

            return (
              <CardInfo
                onSubmit={handleSubmit}
                onChangeName={handleChange('cardHolderName')}
                cardHolderName={cardHolderName}
                shouldDisableSubmit={shouldDisableSubmit}
                onChangeCardNumber={this.onChangeStripeElement}
                onChangeCardExpiry={this.onChangeStripeElement}
                onChangeCardCvc={this.onChangeStripeElement}
                theme={theme}
              />
            );
          }}
        </Formik>
      </Container>
    );
  };
}

export default injectStripe(CardInfoForm);
