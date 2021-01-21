import React, { PureComponent } from 'react';
import { Icon } from './elements';

type Props = {
  hasNotif?: boolean;
};

class Mail extends PureComponent<Props> {
  static defaultProps = {
    hasNotif: false,
  };

  render() {
    const { hasNotif } = this.props;

    return hasNotif ? (
      <Icon
        hasNotif={hasNotif}
        viewBox="0 0 37 35"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
            d="M29.1665 5.8335H5.83317C4.229 5.8335 2.93109 7.146 2.93109 8.75016L2.9165 26.2502C2.9165 27.8543 4.229 29.1668 5.83317 29.1668H29.1665C30.7707 29.1668 32.0832 27.8543 32.0832 26.2502V8.75016C32.0832 7.146 30.7707 5.8335 29.1665 5.8335ZM29.1665 26.2502H5.83317V11.6668L17.4998 18.9585L29.1665 11.6668V26.2502ZM17.4998 16.0418L5.83317 8.75016H29.1665L17.4998 16.0418Z"
            fill="white"
          />
          <circle
            cx="30.5312"
            cy="6.5625"
            r="6.0625"
            fill="#CC0000"
            stroke="#033297"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="37" height="35" fill="white" />
          </clipPath>
        </defs>
      </Icon>
    ) : (
      <Icon viewBox="0 0 31 25" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.1665 0.833496H3.83317C2.229 0.833496 0.931087 2.146 0.931087 3.75016L0.916504 21.2502C0.916504 22.8543 2.229 24.1668 3.83317 24.1668H27.1665C28.7707 24.1668 30.0832 22.8543 30.0832 21.2502V3.75016C30.0832 2.146 28.7707 0.833496 27.1665 0.833496ZM27.1665 21.2502H3.83317V6.66683L15.4998 13.9585L27.1665 6.66683V21.2502ZM15.4998 11.0418L3.83317 3.75016H27.1665L15.4998 11.0418Z"
          fill="white"
        />
      </Icon>
    );
  }
}

export default Mail;
