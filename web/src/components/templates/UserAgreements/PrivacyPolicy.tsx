import React, { PureComponent } from 'react';
import { Button } from '../../atoms/Button';
import {
  Container,
  Wrapper,
  Title,
  TitleSpan,
  PrivacyPolicyPc,
  PrivacyPolicyMobile,
  ButtonWrapper,
} from './elements';
import {
  PRIVACY_POLICY_URL,
  PRIVACY_POLICY_URL_MOBILE,
} from '../../../constants/routes/urls';

type Props = {
  onCloseTab: () => void;
};

class PrivacyPolicy extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onCloseTab } = this.props;
    return (
      <Container className="container">
        <Wrapper className="wrapper">
          <Title>
            プライバシーポリシー
            <TitleSpan>（または個人情報保護方針）</TitleSpan>
          </Title>
          <PrivacyPolicyPc src={PRIVACY_POLICY_URL} />
          <PrivacyPolicyMobile src={PRIVACY_POLICY_URL_MOBILE} />
          <ButtonWrapper>
            <Button title="閉じる" textSize="16px" onPress={onCloseTab} />
          </ButtonWrapper>
        </Wrapper>
      </Container>
    );
  };
}

export default PrivacyPolicy;
