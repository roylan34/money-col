import React, { PureComponent } from 'react';
import { Icon } from './elements';

class Playback extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon
        width="105"
        height="105"
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="52.5" cy="52.5" r="52.5" fill="#C4C4C4" />
        <path d="M74 52L41 71.0526V32.9474L74 52Z" fill="white" />
      </Icon>
    );
  };
}

export default Playback;
