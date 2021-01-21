import React, { PureComponent } from 'react';
import {
  Container,
  AvatarWrapper,
  PreviewTextContainer,
  Name,
  MsgPreview,
  UnreadCircle,
} from './elements';
import { MessagePreviewItemValues } from './types';
import { Avatar } from '../../atoms/Avatar';

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
      hasReplied,
    } = this.props;
    return (
      <Container
        isSelected={isSelected}
        onClick={() => onClickMessageItem(convoId)}>
        <AvatarWrapper>
          <Avatar label={label} imageSource={imgSrc} isAdmin={isAdmin} />
        </AvatarWrapper>
        <PreviewTextContainer>
          <Name>{name}</Name>
          <MsgPreview isUnread={unreadNumber > 0}>{recentMsg}</MsgPreview>
        </PreviewTextContainer>
        <UnreadCircle isVisible={!hasReplied} />
      </Container>
    );
  };
}

export default MessagePreviewItem;
