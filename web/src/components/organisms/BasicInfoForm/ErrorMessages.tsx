import React, { PureComponent } from 'react';
import { ErrorMessageContainer, ErrorMessage } from './elements';

type Props = {
  errors: { [key: string]: string } | {};
};

export default class extends PureComponent<Props> {
  renderErrorMessages = (): Array<React.ReactElement> => {
    const { errors } = this.props;

    return Object.entries(errors).map(keyValuePair => (
      <ErrorMessage key={keyValuePair[0]}>{keyValuePair[1]}</ErrorMessage>
    ));
  };

  render = (): React.ReactElement => {
    return (
      <ErrorMessageContainer>
        {this.renderErrorMessages()}
      </ErrorMessageContainer>
    );
  };
}
