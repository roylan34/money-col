import React, { PureComponent } from 'react';
import { VideoDescription } from '../../atoms/VideoDescription';
import { Playback } from '../../atoms/Icons';
import { Container, VideoWrapper, Video, IconWrapper } from './elements';

type Props = {
  title: string;
  description: string;
  fileURL: string;
};

type State = {
  paused: boolean;
};

export default class VideoPlayer extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { paused: false };
  }

  preventRightClick = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    e.preventDefault();
  };

  handleOnPlay = () => {
    this.setState({ paused: false });
  };

  handleOnPause = () => {
    this.setState({ paused: true });
  };

  render = (): React.ReactElement => {
    const { description, title, fileURL } = this.props;
    const { paused } = this.state;

    return (
      <Container>
        <VideoWrapper>
          {paused ? (
            <IconWrapper>
              <Playback />
            </IconWrapper>
          ) : null}
          <Video
            onPause={this.handleOnPause}
            onWaiting={this.handleOnPause}
            onPlay={this.handleOnPlay}
            onPlaying={this.handleOnPlay}
            onContextMenu={this.preventRightClick}
            controls
            controlsList="nodownload"
            width="100%"
            autoPlay>
            <source src={fileURL} type="video/mp4" />
          </Video>
        </VideoWrapper>

        <VideoDescription title={title} description={description} />
      </Container>
    );
  };
}
