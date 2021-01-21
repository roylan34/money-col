import React, { PureComponent } from 'react';
import { BannerContainer, Banner } from './elements';
import { AdvertisementModel } from '../../../domain/entities';

type Props = typeof Advertisement.defaultProps & AdvertisementModel;

class Advertisement extends PureComponent<Props> {
  static defaultProps = {
    altText: 'advertisement',
  };

  render = (): React.ReactElement => {
    const { imageUrl, link, altText } = this.props;

    return (
      <BannerContainer href={link} target="_blank">
        <Banner src={imageUrl} alt={altText} />
      </BannerContainer>
    );
  };
}

export default Advertisement;
