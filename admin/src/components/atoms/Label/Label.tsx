import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Label = styled.span.attrs((props: Props) => {
  console.log(`@@@ ${JSON.stringify(props)}`);
  return { ...props };
})`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #555555;
`;

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: Object;
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    return (
      <Label className={this.props.className} style={this.props.style}>
        {this.props.children}
      </Label>
    );
  };
}
