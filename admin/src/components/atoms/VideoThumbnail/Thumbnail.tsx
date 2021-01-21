import React, { PureComponent } from 'react';
import { Container, LengthWrapper, VideoLength } from './elements';

type Props = {
  imgUrl: string;
  videoLength: number;
};

class Thumbnail extends PureComponent<Props> {
  formatToMinutesAndSeconds = (millis: number): string => {
    //Get hours from milliseconds
    const hours = millis / (1000 * 60 * 60);
    const absoluteHours = Math.floor(hours);
    const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);
    const s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    const formatted = h === '00' ? m + ':' + s : h + ':' + m + ':' + s;
    return formatted;
  };

  render = (): React.ReactElement => {
    const { imgUrl, videoLength } = this.props;

    return (
      <Container imageUrl={imgUrl}>
        <LengthWrapper>
          <VideoLength>
            {this.formatToMinutesAndSeconds(videoLength)}
          </VideoLength>
        </LengthWrapper>
      </Container>
    );
  };
}

export default Thumbnail;
