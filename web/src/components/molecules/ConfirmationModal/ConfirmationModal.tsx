import React, { PureComponent } from 'react';
import {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  MsgContainer,
  Msg,
  ButtonsContainer,
  ButtonWrapper,
} from './elements';
import { Button } from '../../atoms/Button';
import { words } from '../../../constants';

type Props = {
  message: string;
  messageTheme?: 'default' | 'error';
  buttonTheme?: 'rounded' | 'box';
  subtitle?: string;
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
  confirmButtonTitle?: string;
  isConfirmButtonDisabled?: boolean;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isLoading: false as boolean,
  buttonTheme: 'rounded' as string,
};

class ConfirmationModal extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const {
      message,
      onCancel,
      onConfirm,
      children,
      title,
      confirmButtonTitle,
      messageTheme = 'default',
      buttonTheme = 'box',
      subtitle,
      isConfirmButtonDisabled = false,
      isLoading,
    } = this.props;

    return (
      <Container>
        <TitleContainer>
          <Title>{title ? title : words.confirmationTitle}</Title>
        </TitleContainer>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}

        <MsgContainer>
          {message.split('\n').map(line => (
            <Msg key={line} messageTheme={messageTheme}>
              {line}
            </Msg>
          ))}
        </MsgContainer>
        {children}
        <ButtonsContainer>
          <ButtonWrapper buttonTheme={buttonTheme}>
            <Button
              theme="light"
              textSize="16px"
              title={words.cancelButton}
              onPress={onCancel}
            />
          </ButtonWrapper>
          <ButtonWrapper buttonTheme={buttonTheme}>
            <Button
              theme="primary"
              textSize="16px"
              title={
                confirmButtonTitle ? confirmButtonTitle : words.confirmButton
              }
              onPress={onConfirm}
              disabled={isConfirmButtonDisabled}
              isLoading={isLoading}
            />
          </ButtonWrapper>
        </ButtonsContainer>
      </Container>
    );
  };
}

export default ConfirmationModal;
