import React, { PureComponent } from 'react';
import { Icon } from './elements';

class Jcb extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon
        viewBox="0 0 134 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="134" height="103" fill="url(#pattern-jcb)" />
        <defs>
          <pattern
            id="pattern-jcb"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image-jcb"
              transform="scale(0.00746269 0.00970874)"
            />
          </pattern>
          <image
            id="image-jcb"
            width="134"
            height="103"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </Icon>
    );
  };
}

export default Jcb;
