import React, { PureComponent } from 'react';
import {
  Container,
  Title,
  Circle,
  CircleIconWrapper,
  SubtitleContainer,
  Subtitle,
  NavigatorContainer,
  NavigatorText,
} from './elements';
import { WhiteCheck, PaymentXMark } from '../../atoms/Icons';
import { words } from '../../../constants';
import { paths } from '../../../constants/routes/urls';

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'success' as 'success' | 'failedAddingPoints',
};

class PaymentConfirmation extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { theme } = this.props;

    return (
      <Container theme={theme}>
        <Title>
          {theme === 'success'
            ? words.paymentConfirmationTitle
            : words.paymentFailureToAddPoints}
        </Title>
        <Circle theme={theme}>
          <CircleIconWrapper theme={theme}>
            {theme === 'success' ? <WhiteCheck /> : <PaymentXMark />}
          </CircleIconWrapper>
        </Circle>
        <SubtitleContainer theme={theme}>
          <Subtitle>
            {theme === 'success'
              ? words.paymentCompleted
              : words.paymentFailAddPointsError}
          </Subtitle>
          {theme === 'failedAddingPoints' && <br />}
          <Subtitle>
            {theme === 'success'
              ? words.continueToMyPageTop
              : words.paymentFailAddPointsPrompt}
          </Subtitle>
        </SubtitleContainer>
        <NavigatorContainer>
          <NavigatorText to={paths.home}>
            {words.toMyPageTopPrompt}
          </NavigatorText>
          <NavigatorText to={paths.contents}>
            {words.toContentListPrompt}
          </NavigatorText>
        </NavigatorContainer>
      </Container>
    );
  };
}

export default PaymentConfirmation;
