import React, { PureComponent } from 'react';
import { LeftArrow } from '../../atoms/Icons';
import { Button, Title, Contents, IconWrapper } from './elements';

type Props = {
  onPress: () => void;
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onPress } = this.props;

    return (
      <Button onClick={onPress}>
        <Contents>
          <Title>質</Title>
          <Title>問</Title>
          <Title>す</Title>
          <Title>る</Title>
          <IconWrapper>
            <LeftArrow />
          </IconWrapper>
        </Contents>
      </Button>
    );
  };
}
