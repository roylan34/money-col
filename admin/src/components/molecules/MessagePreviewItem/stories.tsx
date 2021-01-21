import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MessagePreviewItem } from '.';

const unreadOptions = {
  min: 0,
};

storiesOf('Molecule - MessagePreviewItem', module)
  .addDecorator(withKnobs)
  .add('Message Preview Item', () => (
    <MessagePreviewItem
      label={text('Profile Label', '')}
      imgSrc={text(
        'Profile Image',
        'https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg',
      )}
      name={text('Name', 'Anos Voldigoad')}
      recentMsg={text(
        'Recent Message',
        'お問い合わせありがとうございお問い合わせありがとうござい',
      )}
      isSelected={boolean('Is Selected', false)}
      unreadNumber={number('Unread', 0, unreadOptions)}
      convoId={text('Conversation ID', 'senderID')}
      onClickMessageItem={action('on-click-message-item')}
      hasReplied={boolean('Has Replied', false)}
    />
  ));
