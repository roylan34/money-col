import React, { PureComponent } from 'react';

class PaymentXMark extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="24.749"
          y="20.5068"
          width="6"
          height="29"
          rx="2"
          transform="rotate(135 24.749 20.5068)"
          fill="white"
        />
        <rect
          x="24.749"
          y="20.5068"
          width="6"
          height="29"
          rx="2"
          transform="rotate(135 24.749 20.5068)"
          fill="white"
        />
        <rect
          x="4.24316"
          y="24.749"
          width="6"
          height="29"
          rx="2"
          transform="rotate(-135 4.24316 24.749)"
          fill="white"
        />
        <rect
          x="4.24316"
          y="24.749"
          width="6"
          height="29"
          rx="2"
          transform="rotate(-135 4.24316 24.749)"
          fill="white"
        />
      </svg>
    );
  };
}

export default PaymentXMark;
