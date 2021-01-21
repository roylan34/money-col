import React, { PureComponent } from 'react';
import { Card } from '../../atoms/Card';
import { Mail } from '../../atoms/Icons';
import {
  Wrapper,
  Title,
  Text,
  Circle,
  LinksContainer,
  Anchor,
  ResetPasswordLink,
} from './elements';
import { content } from './content';

type EmailTypes = 'verifyEmail' | 'resetPassword' | 'recoverEmail';

type Props = {
  emailType?: EmailTypes;
  isLoggedIn?: boolean;
  email?: string;
};

class EmailVerification extends PureComponent<Props> {
  renderInfoText = (emailType: EmailTypes) => {
    const { email } = this.props;
    if (emailType === 'recoverEmail') {
      return (
        <React.Fragment>
          <Text>{`${content[emailType].yourLogInEmail} ${email} ${content[emailType].hasRevertedTo}`}</Text>
          <Text>
            {content[emailType].emailRecoveryInfo}
            <ResetPasswordLink to={content.resetPasswordLink}>
              {content[emailType].resetPassword}
            </ResetPasswordLink>
            {content[emailType].pleaseDoIt}
          </Text>
        </React.Fragment>
      );
    }
    return <Text>{content[emailType].instructions}</Text>;
  };
  render = (): React.ReactElement => {
    const { emailType = 'verifyEmail', isLoggedIn = false } = this.props;

    return (
      <Card>
        <Wrapper>
          <Title>{content[emailType].title}</Title>
          <Circle>
            <Mail />
          </Circle>
          {this.renderInfoText(emailType)}
          <LinksContainer>
            {!isLoggedIn ? (
              <Anchor to={content.loginPath}>{content.loginLinkTitle}</Anchor>
            ) : null}
          </LinksContainer>
        </Wrapper>
      </Card>
    );
  };
}

export default EmailVerification;
