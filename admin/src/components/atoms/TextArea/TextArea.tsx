import React, { PureComponent, FormEvent } from 'react';
import { TextAreaInput, Limit, Container } from './elements';
import words from '../../../constants/words';

type Props = {
  placeholder?: string;
  disabled?: boolean;
  onChange: (text: string) => void;
  value?: string;
  maxLimit?: number;
  theme?: 'default' | 'gray' | 'noBorder';
};

class TextArea extends PureComponent<Props> {
  static defaultProps = {
    placeholder: words.defaultPlaceHolder,
    disabled: false,
    value: '',
    maxLimit: 0,
    theme: 'default',
  };

  onChange = (event: FormEvent): void => {
    const target = event.target as HTMLTextAreaElement;

    this.props.onChange(target.value);
  };

  transformValue = (value: string, maxLimit: number): string => {
    if (maxLimit > 0) {
      if (value.length > maxLimit) return value.substring(0, maxLimit);

      return value;
    }

    return value;
  };

  render() {
    const { placeholder, disabled, value, maxLimit, theme } = this.props;
    const transformedValue = this.transformValue(value || '', maxLimit || 0);

    return maxLimit && maxLimit > 0 ? (
      <Container>
        <TextAreaInput
          placeholder={placeholder}
          disabled={disabled}
          onChange={this.onChange}
          value={transformedValue}
          maxLength={maxLimit}
          theme={theme}
        />
        <Limit
          hasReachedLimit={
            transformedValue.length === maxLimit
          }>{`${transformedValue.length} / ${maxLimit}`}</Limit>
      </Container>
    ) : (
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
