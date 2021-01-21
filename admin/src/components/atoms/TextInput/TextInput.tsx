import React, { PureComponent, ChangeEvent } from 'react';

import { TextInput } from './elements';

type Props = {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  type: 'text' | 'password';
  theme: 'blueBottomBorder' | 'default' | 'noBorder' | 'blue' | 'search';
  disabled?: boolean;
  name?: string;
  id?: string;
  isDynamicHeight?: boolean;
};

export default class extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    theme: 'default',
    disabled: false,
    isDynamicHeight: false,
  };

  onChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    if (this.props.onChangeText) {
      this.props.onChangeText(target.value);
    }
  };

  render = (): React.ReactElement => {
    const {
      value,
      placeholder,
      type,
      theme,
      disabled,
      name,
      id,
      isDynamicHeight,
    } = this.props;

    return (
      <TextInput
        onChange={this.onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        theme={theme}
        disabled={disabled}
        name={name}
        id={id}
        isDynamicHeight={isDynamicHeight}
      />
    );
  };
}
