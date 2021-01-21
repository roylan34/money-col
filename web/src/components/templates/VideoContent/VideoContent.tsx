import React, { PureComponent } from 'react';
import { VideoPlayer } from '../../organisms/VideoPlayer';
import { Wrapper } from './elements';

type Props = {
  title: string;
  description: string;
  fileURL: string;
};

export default class VideoContent extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { title, description, fileURL } = this.props;

    return (
      <Wrapper>
        <VideoPlayer
          title={title}
          description={description}
          fileURL={fileURL}
        />
      </Wrapper>
    );
  };
}
