import React, { PureComponent } from 'react';

class DownwardArrow extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <svg
        width="12"
        height="18"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 0L5 14.17L1.41 10.59L0 12L6 18L12 12L10.59 10.59L7 14.17L7 0H5Z"
          fill="black"
        />
      </svg>
    );
  };
}

export default DownwardArrow;
