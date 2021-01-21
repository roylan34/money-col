import React, { PureComponent } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  ListRowProps,
  AutoSizer,
  List,
  ScrollParams,
  OnScrollParams,
} from 'react-virtualized';
import { Container, MsgWrapper, ReactVirtualizedList } from './elements';
import { MessageProps } from './types';
import { imagesExtensions } from './constants';
import { Message } from '../../atoms/Message';
import { AttachedFileMessage } from '../../molecules/AttachedFileMessage';

type Props = {
  userId: string;
  messages: Array<MessageProps>;
  convoId: string;
  participants: Array<string>;
  ownership: 'admin' | 'instructor';
  instructorId: string;
  lastReadMessage: string;
  onPressImage: (imageSrc: string) => void;
  onScrollToTop: () => void;
};

class MessageConversation extends PureComponent<Props> {
  convoRef: React.RefObject<List>;
  cache: CellMeasurerCache;

  constructor(props: Props) {
    super(props);

    this.convoRef = React.createRef();
    this.cache = new CellMeasurerCache({
      defaultHeight: 200,
    });
  }

  componentDidMount() {
    const { messages } = this.props;

    if (this.convoRef.current) {
      this.convoRef.current.scrollToRow(messages.length - 1);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { messages, convoId } = this.props;

    if (
      prevProps.messages !== messages &&
      messages &&
      this.convoRef.current &&
      prevProps.convoId !== convoId
    ) {
      this.convoRef.current.scrollToRow(messages.length - 1);
    }

    if (prevProps.convoId !== convoId && convoId) {
      this.cache.clearAll();
    }
  }

  renderRow = ({ index, key, parent, style }: ListRowProps) => {
    const {
      messages,
      userId,
      onPressImage,
      ownership,
      participants,
      instructorId,
      lastReadMessage,
    } = this.props;
    const idIfInstructorIsParticipant = participants.includes(instructorId)
      ? instructorId
      : userId;
    const idOfOwner =
      ownership === 'instructor' ? idIfInstructorIsParticipant : userId;
    const msg = messages[index];

    return (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}>
        {({ measure, registerChild }) => (
          <MsgWrapper
            key={key}
            style={style}
            onLoad={measure}
            ref={
              registerChild as
                | React.RefObject<HTMLDivElement>
                | null
                | undefined
            }>
            {msg.content !== '' && (
              <Message
                theme={idOfOwner === msg.senderId ? 'own' : 'others'}
                msg={msg.content}
                dateSent={msg.createdAt || ''}
                isRead={lastReadMessage === msg.id}
              />
            )}
            {msg.attachmentURLs.length > 0 && (
              <>
                {msg.attachmentURLs.map(file => (
                  <AttachedFileMessage
                    key={`${msg.senderId}:${file.fileName}:${index}`}
                    fileUrl={file.downloadableUrl}
                    fileName={file.fileName}
                    fileSizeInKB={file.fileSizeInKB}
                    theme={idOfOwner === msg.senderId ? 'own' : 'others'}
                    isImage={imagesExtensions.includes(file.fileType)}
                    onClickImage={() => onPressImage(file.downloadableUrl)}
                    dateSent={msg.createdAt || ''}
                    isRead={lastReadMessage === msg.id}
                  />
                ))}
              </>
            )}
          </MsgWrapper>
        )}
      </CellMeasurer>
    );
  };

  handleScroll = (e: ScrollParams & OnScrollParams) => {
    const { onScrollToTop } = this.props;
    if (e.scrollTop === 0) {
      onScrollToTop();
    }
  };

  render = (): React.ReactElement => {
    const { messages } = this.props;

    return (
      <Container>
        <AutoSizer>
          {({ height, width }) => (
            <ReactVirtualizedList
              ref={this.convoRef}
              height={height}
              width={width}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.renderRow}
              rowCount={messages ? messages.length : 0}
              overscanRowCount={3}
              onScroll={this.handleScroll}
            />
          )}
        </AutoSizer>
      </Container>
    );
  };
}

export default MessageConversation;
