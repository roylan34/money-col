import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { MessageConversation } from '.';
import { DUMMY_MESSAGES } from './constants';
import { MessageImageViewer } from '../../molecules/MessageImageViewer';

const Container = styled.div`
  width: 1000px;
`;

const ConvoWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

storiesOf('Organism - MessageConversation', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Convesation', () => {
    const [imageUrl, setImageUrl] = useState('');
    const [showImage, setShowImage] = useState(false);

    return (
      <Container>
        <MessageImageViewer
          imageSrc={imageUrl}
          isVisible={showImage}
          onClose={() => {
            setShowImage(false);
            setImageUrl('');
          }}
        />
        <ConvoWrapper>
          <MessageConversation
            userId="own"
            messages={DUMMY_MESSAGES}
            participants={['own', 'others']}
            convoId="id"
            onPressImage={(imageSrc: string) => {
              setShowImage(true);
              setImageUrl(imageSrc);
            }}
            onScrollToTop={action('on-load-more-messages')}
            ownership={select(
              'Ownership',
              ['admin', 'instructor'],
              'instructor',
            )}
            instructorId={select('Instructor ID', ['own', 'others'], 'own')}
            lastReadMessage=""
          />
        </ConvoWrapper>
      </Container>
    );
  });
