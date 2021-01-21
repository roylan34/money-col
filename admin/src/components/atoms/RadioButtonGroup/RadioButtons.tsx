import React, { PureComponent } from 'react';
import {
  Container,
  RadioWrapper,
  OuterCircle,
  InnerCircle,
  Label,
  IconLabelWrapper,
} from './elements';
import { PublishIcon } from '../Icons';

type Props = {
  labels: Array<string>;
  value: string;
  onChange: (selected: string) => void;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

type State = {
  indexSelected: number;
};

const defaultProps = {
  orientation: 'vertical' as 'vertical' | 'horizontal',
  hasIcon: false as true | false,
};

class RadioButtons extends PureComponent<Props & DefaultProps, State> {
  static defaultProps = defaultProps;
  constructor(props: Props & DefaultProps) {
    super(props);

    this.state = {
      indexSelected: props.labels.indexOf(props.value),
    };
  }

  componentDidUpdate(_prevProps: Props & DefaultProps, prevState: State) {
    const { indexSelected } = this.state;
    const { onChange, labels } = this.props;

    if (prevState.indexSelected !== indexSelected && indexSelected >= 0) {
      onChange(labels[indexSelected]);
    }
  }

  onSelect = (indexSelected: number) => {
    this.setState({ indexSelected });
  };

  render = (): React.ReactElement => {
    const { labels, orientation, hasIcon } = this.props;
    const { indexSelected } = this.state;

    return (
      <Container orientation={orientation}>
        {labels.map((data, index) => (
          <RadioWrapper key={data} onClick={() => this.onSelect(index)}>
            <OuterCircle isSelected={index === indexSelected}>
              {index === indexSelected && <InnerCircle />}
            </OuterCircle>
            {hasIcon ? (
              <IconLabelWrapper>
                <PublishIcon isPrivate={index === 0} />
                <Label>{data}</Label>
              </IconLabelWrapper>
            ) : (
              <Label>{data}</Label>
            )}
          </RadioWrapper>
        ))}
      </Container>
    );
  };
}

export default RadioButtons;
