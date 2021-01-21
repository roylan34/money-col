import React, { PureComponent } from 'react';
import { NewPassInputField } from '../../molecules/ResetPassword';
import { Wrapper } from './elements';

type Props = {
  onSubmitResetPassword: (values: {
    password: string;
    retypedPassword: string;
  }) => void;
  error?: string;
  isResetPasswordPending: boolean;
};

type State = {
  showError: boolean;
};

export default class extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showError: false,
    };
  }

  componentDidUpdate(prevProps: Props): void {
    const prevError = prevProps.error;
    const { error } = this.props;

    if (prevProps !== this.props && prevError !== error) {
      const showError = Boolean(error);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ showError });
    }
  }

  render = (): React.ReactElement => {
    const { error, onSubmitResetPassword, isResetPasswordPending } = this.props;
    const { showError } = this.state;

    return (
      <Wrapper>
        <NewPassInputField
          onPressSubmitNewPass={onSubmitResetPassword}
          errors={showError ? { error } : {}}
          isResetPasswordPending={isResetPasswordPending}
        />
      </Wrapper>
    );
  };
}
