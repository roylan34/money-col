import React, { PureComponent } from 'react';
import {
  Container,
  TitleContainer,
  Title,
  Divider,
  BodyContainer,
  Msg,
  ButtonContainer,
  ButtonWrapper,
} from './elements';
import { Button } from '../../atoms/Button';
import { words } from '../../../constants';

type Props = {
  title: string;
  msg: string;
  onConfirm: () => void;
  onCancel: () => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'enoughPoints' as 'enoughPoints' | 'notEnoughPoints',
};

class MailboxModalContents extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { title, msg, onConfirm, onCancel, theme } = this.props;
    return (
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
          <Divider />
        </TitleContainer>
        <BodyContainer>
          <Msg isPointsNotEnough={theme === 'notEnoughPoints'}>{msg}</Msg>
          <ButtonContainer>
            <ButtonWrapper>
              <Button
                theme="secondary"
                textSize="16px"
                title={words.cancel}
                onPress={onCancel}
              />
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                theme="primary"
                textSize="16px"
                title={
                  theme === 'enoughPoints'
                    ? words.confirmButton
                    : words.goToPurchase
                }
                onPress={onConfirm}
              />
            </ButtonWrapper>
          </ButtonContainer>
        </BodyContainer>
      </Container>
    );
  };
}

export default MailboxModalContents;
