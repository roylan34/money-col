import React, { PureComponent } from 'react';
import { Icon } from './elements';

class RecommendedVideos extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.54545 9.90476H0V23.5238C0 24.8981 1.13273 26 2.54545 26H20.3636C21.7764 26 22.9091 24.8981 22.9091 23.5238H2.54545V9.90476ZM21.6364 4.95238V2.47619C21.6364 1.1019 20.5036 0 19.0909 0H14C12.5873 0 11.4545 1.1019 11.4545 2.47619V4.95238H5.09091V18.5714C5.09091 19.9457 6.22364 21.0476 7.63636 21.0476H25.4545C26.8673 21.0476 28 19.9457 28 18.5714V4.95238H21.6364ZM14 2.47619H19.0909V4.95238H14V2.47619ZM14 17.3333V8.66667L21 12.381L14 17.3333Z"
          fill="#2B489F"
        />
      </Icon>
    );
  };
}

export default RecommendedVideos;
