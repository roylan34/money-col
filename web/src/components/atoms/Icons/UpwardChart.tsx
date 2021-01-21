import React, { PureComponent } from 'react';
import { Icon } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.25 19.7349L11.25 10.7199L17.25 16.7199L30 2.37989L27.885 0.264893L17.25 12.2199L11.25 6.21989L0 17.4849L2.25 19.7349Z"
          fill="white"
        />
      </Icon>
    );
  };
}
