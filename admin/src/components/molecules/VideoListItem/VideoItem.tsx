import React, { PureComponent } from 'react';
import Interweave from 'interweave';
import { Container, TitleWrapper, Title, Description } from './elements';
import { Thumbnail } from '../../atoms/VideoThumbnail';

type Props = {
  imgUrl: string;
  videoLength: number;
  title: string;
  description: string;
};

class VideoItem extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { imgUrl, videoLength, title, description } = this.props;

    return (
      <Container>
        <Thumbnail imgUrl={imgUrl} videoLength={videoLength} />
        <TitleWrapper>
          <Title>{title}</Title>
          <Description numberOfLines={2}>
            <Interweave content={description} />
          </Description>
        </TitleWrapper>
      </Container>
    );
  };
}

export default VideoItem;
