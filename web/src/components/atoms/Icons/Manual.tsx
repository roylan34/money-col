import React, { PureComponent } from 'react';
import { Icon } from './elements';

class Manual extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.5 3.5H18.23C17.6 1.76 15.95 0.5 14 0.5C12.05 0.5 10.4 1.76 9.77 3.5H3.5C1.85 3.5 0.5 4.85 0.5 6.5V27.5C0.5 29.15 1.85 30.5 3.5 30.5H24.5C26.15 30.5 27.5 29.15 27.5 27.5V6.5C27.5 4.85 26.15 3.5 24.5 3.5ZM14 3.5C14.825 3.5 15.5 4.175 15.5 5C15.5 5.825 14.825 6.5 14 6.5C13.175 6.5 12.5 5.825 12.5 5C12.5 4.175 13.175 3.5 14 3.5ZM17 24.5H6.5V21.5H17V24.5ZM21.5 18.5H6.5V15.5H21.5V18.5ZM21.5 12.5H6.5V9.5H21.5V12.5Z"
          fill="white"
        />
      </Icon>
    );
  };
}

export default Manual;
