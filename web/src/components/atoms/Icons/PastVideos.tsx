import React, { PureComponent } from 'react';
import { Icon } from './elements';

class PastVideos extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.1111 0H2.88889C1.3 0 0 1.11429 0 2.47619V19.8095C0 21.1714 1.3 22.2857 2.88889 22.2857H8.66667L13 26L17.3333 22.2857H23.1111C24.7 22.2857 26 21.1714 26 19.8095V2.47619C26 1.11429 24.7 0 23.1111 0ZM15.7156 13.4705L13 18.5714L10.2844 13.4705L4.33333 11.1429L10.2844 8.81524L13 3.71429L15.7156 8.81524L21.6667 11.1429L15.7156 13.4705Z"
          fill="#033297"
        />
      </Icon>
    );
  };
}

export default PastVideos;
