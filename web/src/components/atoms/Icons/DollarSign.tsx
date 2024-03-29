import React, { PureComponent } from 'react';
import { Icon } from './elements';

export default class extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.69998 12.35C5.29498 11.465 4.19998 10.55 4.19998 9.125C4.19998 7.49 5.71498 6.35 8.24998 6.35C10.92 6.35 11.91 7.625 12 9.5H15.315C15.21 6.92 13.635 4.55 10.5 3.785V0.5H5.99998V3.74C3.08998 4.37 0.74998 6.26 0.74998 9.155C0.74998 12.62 3.61498 14.345 7.79998 15.35C11.55 16.25 12.3 17.57 12.3 18.965C12.3 20 11.565 21.65 8.24998 21.65C5.15998 21.65 3.94498 20.27 3.77998 18.5H0.47998C0.65998 21.785 3.11998 23.63 5.99998 24.245V27.5H10.5V24.275C13.425 23.72 15.75 22.025 15.75 18.95C15.75 14.69 12.105 13.235 8.69998 12.35Z"
          fill="white"
        />
      </Icon>
    );
  };
}
