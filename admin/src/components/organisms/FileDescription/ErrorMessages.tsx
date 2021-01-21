import React, { PureComponent } from 'react';
import { ErrorMessageContainer, ErrorMessage } from './elements';

type Props = {
  errors: { [key: string]: string } | {};
};

class ErrorMessages extends PureComponent<Props> {
  renderErrorMessages = (): Array<React.ReactElement> => {
    const { errors } = this.props;

    return Object.entries(errors).map(keyValuePair => (
      <ErrorMessage key={keyValuePair[0]}>{keyValuePair[1]}</ErrorMessage>
    ));
  };

  render = (): React.ReactElement => {
    const { errors } = this.props;

    return (
      <ErrorMessageContainer isEmpty={Object.keys(errors).length < 1}>
        {this.renderErrorMessages()}
      </ErrorMessageContainer>
    );
  };
}

export default ErrorMessages;
