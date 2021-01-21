import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { MessageConversation } from '.';
import { DUMMY_MESSAGES } from './constants';
import { MessageImageViewer } from '../../molecules/MessageImageViewer';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 1000px;
  @media ${theme.breakpoints.mobileAndTablet} {
    width: calc(100vw - 30px);
  }
`;

const ConvoWrapper = styled.div`
  width: 100%;
  height: 500px;
  @media ${theme.breakpoints.mobileAndTablet} {
    height: 100%;
  }
`;

storiesOf('Organism - MessageConversation', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Conversation', () => {
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
          onDownloadFile={action('on-click-download-image')}
        />
        <ConvoWrapper>
          <MessageConversation
            convoId="id"
            userId="own"
            messages={DUMMY_MESSAGES}
            onPressImage={(imageSrc: string) => {
              setShowImage(true);
              setImageUrl(imageSrc);
            }}
            onScrollToTop={action('on-scroll-top')}
            lastReadMessage=""
            onDownloadFile={action('on-click-download-image')}
          />
        </ConvoWrapper>
      </Container>
    );
  });
