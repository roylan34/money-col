import React, { PureComponent, FormEvent } from 'react';
import { TextAreaInput } from './elements';
import { words } from '../../../constants';

type Props = {
  onChange: (text: string) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'default' as 'default' | 'noBorder',
  placeholder: words.defaultPlaceHolder as string,
  value: '' as string,
  disabled: false as boolean,
};

class TextArea extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  onChange = (event: FormEvent): void => {
    const target = event.target as HTMLTextAreaElement;
    this.props.onChange(target.value);
  };

  render() {
    const { placeholder, disabled, value, theme } = this.props;

    return (
      <TextAreaInput
        placeholder={placeholder}
        disabled={disabled}
        onChange={this.onChange}
        value={value}
        theme={theme}
      />
    );
  }
}

export default TextArea;
