import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { VideoPlayer } from '.';

const Container = styled.div``;

storiesOf('Organisms - VideoPlayer', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
    storyshots: { disable: true },
  })
  .addDecorator(withActions())
  .addDecorator(withKnobs)
  .add('Default VideoPlayer', () => {
    return (
      <Container>
        <VideoPlayer
          fileURL="https://firebasestorage.googleapis.com/v0/b/money-college-dev-8a907.appspot.com/o/videoLectures%2FXuT5XgVdDprIdYHd3flO%2FXuT5XgVdDprIdYHd3flO.mp4?alt=media&token=1caba2c3-8cd5-43ca-8bc9-b239d0aff6d5"
          title={text('Title', '概要')}
          description={text(
            'Description',
            '概要を記入 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
          )}
        />
      </Container>
    );
  });
