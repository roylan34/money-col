import React, { PureComponent } from 'react';
import { Title, Wrapper, Message, ButtonWrapper } from './elements';
import { Button } from '../../atoms/Button';

type Props = {
  handleReturnHome: () => void;
  title: string;
  message: string;
  buttonReturnTitle: string;
};

class ErrorPageContent extends PureComponent<Props> {
  render() {
    const { handleReturnHome, title, message, buttonReturnTitle } = this.props;

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonWrapper>
          <Button
            title={buttonReturnTitle}
            onPress={handleReturnHome}
            textSize="16px"
            fontWeight="bold"
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default ErrorPageContent;
