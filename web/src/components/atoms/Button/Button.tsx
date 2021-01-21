import React, { PureComponent } from 'react';
import { ButtonParams } from './types';
import { Button } from './elements';
import { LoadingIndicator } from '../LoadingIndicator';
import { theme } from '../../../config';

type Props = {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  spinnerColor?: string;
} & ButtonParams;

export default class extends PureComponent<Props> {
  static defaultProps = {
    theme: 'primary',
    textSize: '14px',
    fontWeight: 'normal',
    disabled: false,
    isLoading: false,
    spinnerColor: theme.colors.white,
  };

  render = (): React.ReactElement => {
    const {
      onPress,
      disabled,
      isLoading,
      title,
      theme,
      spinnerColor,
      ...others
    } = this.props;

    return (
      <Button
        {...others}
        onClick={onPress}
        disabled={disabled || isLoading}
        theme={theme || 'primary'}>
        {!isLoading ? title : <LoadingIndicator spinnerColor={spinnerColor} />}
      </Button>
    );
  };
}
