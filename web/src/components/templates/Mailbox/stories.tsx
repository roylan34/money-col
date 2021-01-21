import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { MailboxTemplate } from '.';
import { TopNavBar } from '../../organisms/TopNavBar';
import { MessageProps } from '../../organisms/MessageConversation/types';
import { DUMMY_CONVERSATIONS, DUMMY_MESSAGES } from './constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

storiesOf('Template - MailboxTemplate', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Mailbox', () => {
    const [convoId, onChangeSelectedMsg] = useState('');
    const [messages, onFetchMessages] = useState<MessageProps[]>([]);

    return (
      <Container>
        <TopNavBar
          homeLink=""
          links={{
            myPageTopUrl: '/',
          }}
          hasNotif
          profileLabel=""
          profileImgSrc=""
          name=""
          onPressHamburgerItem={action('on-press-hamburger-item')}
          isAuthenticated={boolean('Is Authenticated', false)}
        />
        <MailboxTemplate
          conversations={DUMMY_CONVERSATIONS}
          messages={messages}
          messageSelected={convoId}
          onChangeSelectedMsg={onChangeSelectedMsg}
          onChangeSettings={action('on-change-settings')}
          notifyRepliesWithEmail="false"
          displaySendConfirmation="true"
          userPoints={number(`User's points`, 100)}
          convoId={convoId}
          onSendMsg={action('on-send-message')}
          onPurchasePoints={action('on-purchase-points')}
          fetchMessages={(convoId: string) =>
            onFetchMessages(DUMMY_MESSAGES[convoId])
          }
          userId="own"
          discount={1}
          score={100}
          onDownloadFile={action('on-click-download-image')}
          isUpdatingMailboxSettings={boolean(
            'Is updating mailbox settings',
            false,
          )}
          isSendingMessage={boolean('Is Sending Message', false)}
          onLoadMoreConvo={() => Promise.resolve('lastConvoId')}
          isRowConvoLoaded={() => false}
          isFetchingConvos={boolean('Is Fetching Convos', false)}
        />
      </Container>
    );
  });
