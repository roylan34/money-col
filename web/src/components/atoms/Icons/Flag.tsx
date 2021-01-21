import React, { PureComponent } from 'react';
import { Icon } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.6 3L14 0H0.5V25.5H3.5V15H11.9L12.5 18H23V3H14.6Z"
          fill="white"
        />
      </Icon>
    );
  };
}
