import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ProfileDropdownContent } from '.';
import styled from 'styled-components';
import { theme } from '../../../config/index';

const Container = styled.div`
  height: 153px;
  width: 204px;
  border-radius: 5px;
  background-color: #edf1f8;

  @media ${theme.breakpoints.mobile} {
    width: 100%;
    height: 216px;
    box-shadow: none;
    border-radius: 0;
    background-color: ${theme.colors.blue.primary};
  }
`;

storiesOf('Atom - ProfileDropdownContent', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Profile Dropdown Items', () => (
    <Container>
      <ProfileDropdownContent
        onPressBackItem={action('OnPressBackItem')}
        isVisible
        theme={select('Theme', ['profile', 'manuals'], 'profile')}
      />
    </Container>
  ));
