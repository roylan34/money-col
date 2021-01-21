import React, { PureComponent } from 'react';

class Star extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.9883 0.333374C5.54833 0.333374 0.333334 5.56004 0.333334 12C0.333334 18.44 5.54833 23.6667 11.9883 23.6667C18.44 23.6667 23.6667 18.44 23.6667 12C23.6667 5.56004 18.44 0.333374 11.9883 0.333374ZM16.935 19L12 16.025L7.065 19L8.37167 13.3884L4.02 9.62004L9.76 9.13004L12 3.83337L14.24 9.11837L19.98 9.60837L15.6283 13.3767L16.935 19Z"
          fill="#80C269"
        />
      </svg>
    );
  };
}

export default Star;
