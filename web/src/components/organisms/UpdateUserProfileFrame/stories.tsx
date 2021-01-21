import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withActions, action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';
import { UpdateUserProfileFrame } from '.';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

storiesOf('Organisms - UpdateUserProfileFrame', module)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .addDecorator(withActions())
  .addDecorator(withKnobs)
  .add('Default UpdateUserProfileFrame - With Avatar', () => {
    return (
      <Container>
        <UpdateUserProfileFrame
          username={text('Name', 'マネカレ 太郎')}
          photoURL={text(
            'photoURL',
            'http://p.favim.com/orig/2018/10/01/cartoon-profile-picture-cute-Favim.com-6346120.jpg',
          )}
          initials={text('Initials', '太')}
          onPressSelectFormType={action('select-form-type')}
          formType={select(
            'Form Type',
            ['basicInfo', 'paymentInfo'],
            'basicInfo',
          )}>
          <h1>Basic Info form here</h1>
        </UpdateUserProfileFrame>
      </Container>
    );
  })
  .add('Default UpdateUserProfileFrame - Without Avatar', () => (
    <Container>
      <UpdateUserProfileFrame
        username={text('Name', 'マネカレ 太郎')}
        initials={text('Initials', '太')}
        onPressSelectFormType={action('select-form-type')}
        formType={select(
          'Form Type',
          ['basicInfo', 'paymentInfo'],
          'basicInfo',
        )}>
        <h1>Basic Info form here</h1>
      </UpdateUserProfileFrame>
    </Container>
  ));
