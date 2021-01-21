import React, { PureComponent } from 'react';
import { Icon } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
          fill="white"
        />
      </Icon>
    );
  };
}