import React, { PureComponent } from 'react';
import { theme } from '../../../config/index';

type Props = {
  disabled?: boolean;
};

class BluePlane extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { disabled } = this.props;

    return (
      <svg
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.5125 23.25L26.75 12L0.5125 0.75L0.5 9.5L19.25 12L0.5 14.5L0.5125 23.25Z"
          fill={disabled ? theme.colors.gray.light : '#033297'}
        />
      </svg>
    );
  };
}

export default BluePlane;
