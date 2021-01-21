import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { UsersDetailsTemplate } from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { DUMMY_USER_DETAIL, DUMMY_PT_USAGE_HISTORY } from './constants';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
`;

storiesOf('Template - UsersDetailsTemplate', module)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Users Details Template', () => (
    <Container>
      <LeftSidebar logOut={action('log-out')} />
      <UsersDetailsTemplate
        userDetailsData={DUMMY_USER_DETAIL}
        ptUsageHistory={DUMMY_PT_USAGE_HISTORY}
        onConfirmPoints={action('on-confirm-points')}
        onPressBackArrow={action('on-press-back-arrow')}
        onPressNext={action('on-press-next-page')}
        onPressPrev={action('on-press-prev-page')}
        hasNextPage={true}
        hasPrevPage={false}
      />
    </Container>
  ))
  .add('Users Details Template - loading', () => (
    <Container>
      <LeftSidebar logOut={action('log-out')} />
      <UsersDetailsTemplate
        userDetailsData={DUMMY_USER_DETAIL}
        ptUsageHistory={DUMMY_PT_USAGE_HISTORY}
        onConfirmPoints={action('on-confirm-points')}
        onPressBackArrow={action('on-press-back-arrow')}
        isFetchingUserEvents={true}
        isUpdatingUserPoints={true}
        onPressNext={action('on-press-next-page')}
        onPressPrev={action('on-press-prev-page')}
        hasNextPage={true}
        hasPrevPage={false}
      />
    </Container>
  ));
