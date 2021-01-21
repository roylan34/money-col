import React, { PureComponent, ChangeEvent } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  CustomCheckbox,
  LabelWrapper,
  Label,
} from './elements';

type Props = {
  onToggle: (isChecked: string) => void;
  value: string;
  label: string;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  theme: 'default' as 'default' | 'settings',
};

class Checkbox extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  onToggle = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    this.props.onToggle(isChecked.toString());
  };

  render = (): React.ReactElement => {
    const { value, label, theme } = this.props;
    const boolValue = value === 'true';

    return (
      <LabelWrapper>
        <CheckboxContainer>
          <HiddenCheckbox
            type="checkbox"
            checked={boolValue}
            onChange={this.onToggle}
          />
          <CustomCheckbox isChecked={boolValue} theme={theme} />
        </CheckboxContainer>
        <Label hasLength={label.length > 0}>{label}</Label>
      </LabelWrapper>
    );
  };
}

export default Checkbox;
