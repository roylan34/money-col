import React, { PureComponent } from 'react';
import { Icon } from './elements';

class TopicVideos extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.4 5.47368H20.566C20.709 5.04947 20.8 4.58421 20.8 4.10526C20.8 1.83368 19.058 0 16.9 0C15.535 0 14.352 0.738947 13.65 1.84737L13 2.76421L12.35 1.83368C11.648 0.738947 10.465 0 9.1 0C6.942 0 5.2 1.83368 5.2 4.10526C5.2 4.58421 5.291 5.04947 5.434 5.47368H2.6C1.157 5.47368 0.013 6.69158 0.013 8.21053L0 23.2632C0 24.7821 1.157 26 2.6 26H23.4C24.843 26 26 24.7821 26 23.2632V8.21053C26 6.69158 24.843 5.47368 23.4 5.47368ZM16.9 2.73684C17.615 2.73684 18.2 3.35263 18.2 4.10526C18.2 4.85789 17.615 5.47368 16.9 5.47368C16.185 5.47368 15.6 4.85789 15.6 4.10526C15.6 3.35263 16.185 2.73684 16.9 2.73684ZM9.1 2.73684C9.815 2.73684 10.4 3.35263 10.4 4.10526C10.4 4.85789 9.815 5.47368 9.1 5.47368C8.385 5.47368 7.8 4.85789 7.8 4.10526C7.8 3.35263 8.385 2.73684 9.1 2.73684ZM23.4 23.2632H2.6V20.5263H23.4V23.2632ZM23.4 16.4211H2.6V8.21053H9.204L6.5 12.0832L8.606 13.6842L11.7 9.25053L13 7.38947L14.3 9.25053L17.394 13.6842L19.5 12.0832L16.796 8.21053H23.4V16.4211Z"
          fill="#033297"
        />
      </Icon>
    );
  };
}

export default TopicVideos;