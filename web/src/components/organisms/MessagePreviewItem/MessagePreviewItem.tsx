import React, { PureComponent } from 'react';
import {
  Container,
  ProfileWrapper,
  PreviewTextContainer,
  Name,
  MsgPreview,
} from './elements';
import { MessagePreviewItemValues } from './types';
import { Avatar } from '../../molecules/ProfileIcon';

type Props = {
  onClickMessageItem: (convoId: string) => void;
  convoId: string;
} & MessagePreviewItemValues &
  Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isSelected: false as boolean,
  isAdmin: false as boolean,
};

class MessagePreviewItem extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;

  render = (): React.ReactElement => {
    const {
      label,
      imgSrc,
      name,
      recentMsg,
      isSelected,
      unreadNumber,
      isAdmin,
      convoId,
      onClickMessageItem,
    } = this.props;

    return (
      <Container
        isSelected={isSelected}
        onClick={() => onClickMessageItem(convoId)}>
        <ProfileWrapper>
          <Avatar
            label={label}
            imageSource={imgSrc}
            theme="message"
            isAdmin={isAdmin}
          />
        </ProfileWrapper>
        <PreviewTextContainer>
          <Name>{name}</Name>
          <MsgPreview isUnread={unreadNumber > 0}>
            {recentMsg.replace(/\\n/g, ' ')}
          </MsgPreview>
        </PreviewTextContainer>
      </Container>
    );
  };
}

export default MessagePreviewItem;
