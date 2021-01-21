import React, { PureComponent } from 'react';
import { LoadingIndicator } from '../LoadingIndicator';
import { Button } from './elements';
import { theme } from '../../../config';

type Props = {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'primary' as 'primary' | 'secondary' | 'light',
  textSize: '14px' as string,
  fontWeight: 'normal' as string,
  disabled: false as boolean,
  type: 'button' as 'submit' | 'reset' | 'button',
  isLoading: false as boolean,
};

export default class extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const { onPress, disabled, title, isLoading, ...others } = this.props;

    return (
      <Button {...others} onClick={onPress} disabled={disabled || isLoading}>
        {isLoading ? (
          <LoadingIndicator spinnerColor={theme.colors.white} />
        ) : (
          title
        )}
      </Button>
    );
  };
}
