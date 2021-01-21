import React, { PureComponent } from 'react';
import { Button } from '../../atoms/Button';
import {
  Container,
  Wrapper,
  Title,
  TermsOfServicesPc,
  TermsOfServicesMobile,
  ButtonWrapper,
} from './elements';
import {
  TERMS_OF_SERVICES_URL,
  TERMS_OF_SERVICES_URL_MOBILE,
} from '../../../constants/routes/urls';

type Props = {
  onCloseTab: () => void;
};

class TermsOfServices extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onCloseTab } = this.props;
    return (
      <Container>
        <Wrapper>
          <Title>利用規約 </Title>
          <TermsOfServicesPc src={TERMS_OF_SERVICES_URL} />
          <TermsOfServicesMobile src={TERMS_OF_SERVICES_URL_MOBILE} />
          <ButtonWrapper>
            <Button title="閉じる" textSize="16px" onPress={onCloseTab} />
          </ButtonWrapper>
        </Wrapper>
      </Container>
    );
  };
}

export default TermsOfServices;
