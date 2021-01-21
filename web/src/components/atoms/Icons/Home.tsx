import React, { PureComponent } from 'react';
import { Icon } from './elements';

class Home extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill="white" />
      </Icon>
    );
  };
}

export default Home;