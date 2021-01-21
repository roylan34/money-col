import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ProfileIcon } from '.';
import styled from 'styled-components';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-left: 500px;
  @media ${theme.breakpoints.mobile} {
    padding: 0;
  }
`;

storiesOf('Molecule - ProfileIcon', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(getStory => <MemoryRouter>{getStory()}</MemoryRouter>)
  .add('Default ProfileIcon', () => (
    <Container>
      <ProfileIcon
        label={text('Label', 'YY')}
        name={text('Name', 'マネカレ　太郎さん')}
        onClick={action('OnClick')}
      />
    </Container>
  ))
  .add('Profile Icon with image', () => (
    <Container>
      <ProfileIcon
        imageSource={text(
          'Image Source',
          'https://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg',
        )}
        name={text('Name', 'マネカレ　太郎さん')}
        onClick={action('OnClick')}
      />
    </Container>
  ));
