import React, { PureComponent } from 'react';
import { Icon } from './elements';

class RecommendedTopics extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.3333 23.9545L24 25.3636V2.81818C24 1.26818 22.8 0 21.3333 0H7.98667C6.52 0 5.33333 1.26818 5.33333 2.81818H18.6667C20.1333 2.81818 21.3333 4.08636 21.3333 5.63636V23.9545ZM16 5.63636H2.66667C1.2 5.63636 0 6.90455 0 8.45455V31L9.33333 26.7727L18.6667 31V8.45455C18.6667 6.90455 17.4667 5.63636 16 5.63636Z"
          fill="#033297"
        />
      </Icon>
    );
  };
}

export default RecommendedTopics;
