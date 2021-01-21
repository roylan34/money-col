import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { MailboxTemplate } from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { MessageProps } from '../../organisms/MessageConversation/types';
import { DUMMY_CONVERSATIONS, DUMMY_MESSAGES } from './constants';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const initialEntries = [
  '/users',
  '/teachers',
  '/videos',
  '/project-contents',
  '/ea-programs',
  '/articles',
  '/mailbox',
  '/pending-payments',
  '/logout',
];

storiesOf('Template - MailboxTemplate', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={6}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Admin view of Instructor Mailbox', () => {
    const [convoId, onChangeSelectedMsg] = useState('');
    const [messages, onFetchMessages] = useState<MessageProps[]>([]);

    return (
      <Container>
        <LeftSidebar logOut={action('logout')} />
        <MailboxTemplate
          conversations={DUMMY_CONVERSATIONS}
          messages={messages}
          messageSelected={convoId}
          onChangeSelectedMsg={onChangeSelectedMsg}
          onChangeSettings={action('on-change-settings')}
          notifSettingValue="false"
          notifOfUsageSettingValue="false"
          convoId={convoId}
          onSendMsg={action('on-send-message')}
          onPurchasePoints={action('on-purchase-points')}
          fetchMessages={(convoId: string) =>
            onFetchMessages(DUMMY_MESSAGES[convoId])
          }
          userId="admin"
          isAdmin={boolean('Is Admin', true)}
          onClickBackArrow={action('on-click-back-arrow')}
          participants={['own', 'others']}
          instructorId="own"
          isSendingMsg={boolean('Is Sending Message', false)}
          isFetchingConvos={boolean('Is Fetching Convos', false)}
          onLoadMoreConvo={() => Promise.resolve("lastConvoId")}
          isRowConvoLoaded={() => false}
        />
      </Container>
    );
  })
  .add('Instructor Mailbox', () => {
    const [convoId, onChangeSelectedMsg] = useState('');
    const [messages, onFetchMessages] = useState<MessageProps[]>([]);

    return (
      <Container>
        <LeftSidebar logOut={action('logout')} />
        <MailboxTemplate
          conversations={DUMMY_CONVERSATIONS}
          messages={messages}
          messageSelected={convoId}
          onChangeSelectedMsg={onChangeSelectedMsg}
          onChangeSettings={action('on-change-settings')}
          notifSettingValue="false"
          notifOfUsageSettingValue="false"
          convoId={convoId}
          onSendMsg={action('on-send-message')}
          onPurchasePoints={action('on-purchase-points')}
          fetchMessages={(convoId: string) =>
            onFetchMessages(DUMMY_MESSAGES[convoId])
          }
          userId="own"
          isAdmin={boolean('Is Admin', false)}
          onClickBackArrow={action('on-click-back-arrow')}
          participants={['own', 'others']}
          instructorId="own"
          isSendingMsg={boolean('Is Sending Message', false)}
          isFetchingConvos={boolean('Is Fetching Convos', false)}
          onLoadMoreConvo={() => Promise.resolve("lastConvoId")}
          isRowConvoLoaded={() => false}
        />
      </Container>
    );
  })
  .add('Admin Mailbox', () => {
    const [convoId, onChangeSelectedMsg] = useState('');
    const [messages, onFetchMessages] = useState<MessageProps[]>([]);

    return (
      <Container>
        <LeftSidebar logOut={action('logout')} />
        <MailboxTemplate
          conversations={DUMMY_CONVERSATIONS}
          messages={messages}
          messageSelected={convoId}
          onChangeSelectedMsg={onChangeSelectedMsg}
          onChangeSettings={action('on-change-settings')}
          notifSettingValue="false"
          notifOfUsageSettingValue="false"
          onSendMsg={action('on-send-message')}
          onPurchasePoints={action('on-purchase-points')}
          fetchMessages={(convoId: string) =>
            onFetchMessages(DUMMY_MESSAGES[convoId])
          }
          userId="own"
          isAdmin={boolean('Is Admin', true)}
          onClickBackArrow={action('on-click-back-arrow')}
          ownership="admin"
          participants={['own', 'others']}
          instructorId=""
          convoId={convoId}
          isSendingMsg={boolean('Is Sending Message', false)}
          isFetchingConvos={boolean('Is Fetching Convos', false)}
          onLoadMoreConvo={() => Promise.resolve("lastConvoId")}
          isRowConvoLoaded={() => false}
        />
      </Container>
    );
  });
