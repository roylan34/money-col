import React, { PureComponent } from 'react';

import { theme } from '../../../config';

const FILL_VALUES = {
  error: theme.colors.red.light,
  success: theme.colors.blue.accent,
  reward: theme.colors.green.primary,
};

type Props = {
  [key: string]: string | number;
  type: 'error' | 'success' | 'reward';
};

export default class extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { type, ...otherProps } = this.props;

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}>
        <path
          d="M10.833 15.5002H13.1663V17.8335H10.833V15.5002ZM10.833 6.16683H13.1663V13.1668H10.833V6.16683ZM11.988 0.333496C5.54801 0.333496 0.333008 5.56016 0.333008 12.0002C0.333008 18.4402 5.54801 23.6668 11.988 23.6668C18.4397 23.6668 23.6663 18.4402 23.6663 12.0002C23.6663 5.56016 18.4397 0.333496 11.988 0.333496ZM11.9997 21.3335C6.84301 21.3335 2.66634 17.1568 2.66634 12.0002C2.66634 6.8435 6.84301 2.66683 11.9997 2.66683C17.1563 2.66683 21.333 6.8435 21.333 12.0002C21.333 17.1568 17.1563 21.3335 11.9997 21.3335Z"
          fill={FILL_VALUES[type]}
        />
      </svg>
    );
  };
}
