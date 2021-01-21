import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  number,
  select,
  object,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { ContentListItem } from '.';

storiesOf('Molecule - ContentListItem', module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive',
    },
  })
  .add('Default - ContentListItem', () => (
    <ContentListItem
      thumbnailURL={text(
        'Thumbnail URL',
        'http://p.favim.com/orig/2018/10/01/cartoon-profile-picture-cute-Favim.com-6346120.jpg',
      )}
      title={text(
        'Title',
        `【マネカレ】FXのプロになる！\n！FX基礎知識とチャートの見方完全攻略講座`,
      )}
      description={text(
        'Description',
        '〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜',
      )}
      points={number('Number', 100)}
      onPressPurchase={action('OnPressPurchase')}
      buttonTheme={select('Button Theme', ['inverse', 'primary'], 'primary')}
      tags={object('Tags', {
        primeContent: true,
        eliteContent: true,
        regularContent: true,
      })}
      isRestricted={boolean('Is Restricted', false)}
      isManualType={boolean('Is Manual Type', false)}
      id={text('ID', 'asdhhjherkjh123')}
      navigateToManualContentViewer={action(
        'navigate-to-manual-content-viewer',
      )}
    />
  ));
