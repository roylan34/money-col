import React, { PureComponent } from 'react';
import { Icon } from './elements';

class UnknownCard extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon
        viewBox="0 0 512 512"
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        xmlSpace="preserve">
        <g>
          <path
            fill="#333333"
            d="M443.969,76H68.031C30.469,76,0,106.469,0,144.031v223.938C0,405.531,30.469,436,68.031,436h375.938
		C481.531,436,512,405.531,512,367.969V144.031C512,106.469,481.531,76,443.969,76z M480,367.969
		C480,387.844,463.844,404,443.969,404H68.031C48.156,404,32,387.844,32,367.969V224h448V367.969z M480,176H32v-31.969
		C32,124.156,48.156,108,68.031,108h375.938C463.844,108,480,124.156,480,144.031V176z"
          />
          <rect x="104" y="289.328" fill="#333333" width="64" height="64" />
          <rect x="260" y="289.328" fill="#333333" width="160" height="24" />
          <rect x="260" y="337.328" fill="#333333" width="128" height="24" />
        </g>
      </Icon>
    );
  };
}

export default UnknownCard;
