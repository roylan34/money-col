import React, { PureComponent } from 'react';
import { BrandLogoWrapper } from './elements';

type Props = {
  homeLink: string;
};

class BrandLogo extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { homeLink } = this.props;

    return <BrandLogoWrapper href={homeLink} target="_blank" />;
  };
}

export default BrandLogo;
