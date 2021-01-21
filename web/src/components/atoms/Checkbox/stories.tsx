import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '.';
import styled from 'styled-components';
import { theme } from '../../../config/index';

const Container = styled.div`
  width: 321px;
  height: 21px;
  ${theme.handleTextOverflow};
`;

const SettingsContainer = styled.div`
  width: 321px;
  height: 45px;
  ${theme.handleMultipleLinesOverflow};
`;

storiesOf('Atom - Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default Checkbox', () => (
    <Container>
      <Checkbox
        value={select('Is Checked', ['true', 'false'], 'true')}
        onToggle={action('OnToggle')}
        label={text('Label', 'おすすめ案件などのメールマガジンを受け取る')}
      />
    </Container>
  ))
  .add('Settings Checkbox', () => (
    <SettingsContainer>
      <Checkbox
        value={select('Is Checked', ['true', 'false'], 'true')}
        onToggle={action('OnToggle')}
        label={text('Label', 'おすすめ案件などのメールマガジンを受け取る')}
        theme="settings"
      />
    </SettingsContainer>
  ));
