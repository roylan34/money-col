import React, { PureComponent } from 'react';
import {
  AutoSizer,
  List,
  ListRowProps,
  CellMeasurer,
  CellMeasurerCache,
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
  onScrollToTop: () => void;
  lastReadMessage: string;
  onPressImage: (imageSrc: string, imageFilename: string) => void;
  onDownloadFile: (url: string, filename: string) => void;
};

class MessageConversation extends PureComponent<Props> {
  convoRef: React.RefObject<List>;
  cache: CellMeasurerCache;

  constructor(props: Props) {
    super(props);

    this.convoRef = React.createRef();
    this.cache = new CellMeasurerCache({
      defaultHeight: 100,
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

  handleScroll = (e: ScrollParams & OnScrollParams) => {
    const { onScrollToTop } = this.props;
    if (e.scrollTop === 0) {
      onScrollToTop();
    }
  };

  renderRow = ({ index, key, style, parent }: ListRowProps) => {
    const {
      messages,
      userId,
      onPressImage,
      lastReadMessage,
      onDownloadFile,
    } = this.props;
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
                theme={userId === msg.senderId ? 'own' : 'others'}
                msg={msg.content}
                isRead={lastReadMessage === msg.id}
                dateSent={msg.createdAt}
              />
            )}
            {msg.attachmentURLs.length > 0 && (
              <>
                {msg.attachmentURLs.map((file, index) => (
                  <AttachedFileMessage
                    key={`${msg.senderId}:${file.fileName}:${index}`}
                    fileUrl={file.downloadableUrl}
                    fileName={file.fileName}
                    fileSizeInKB={file.fileSizeInKB}
                    theme={userId === msg.senderId ? 'own' : 'others'}
                    isImage={imagesExtensions.includes(file.fileType)}
                    onClickImage={() =>
                      onPressImage(file.downloadableUrl, file.fileName)
                    }
                    isRead={lastReadMessage === msg.id}
                    dateSent={msg.createdAt}
                    onDownloadFile={() =>
                      onDownloadFile(file.downloadableUrl, file.fileName)
                    }
                  />
                ))}
              </>
            )}
          </MsgWrapper>
        )}
      </CellMeasurer>
    );
  };

  render() {
    const { messages } = this.props;

    return (
      <Container>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <ReactVirtualizedList
                ref={this.convoRef}
                width={width}
                height={height}
                rowHeight={this.cache.rowHeight}
                rowRenderer={this.renderRow}
                rowCount={messages ? messages.length : 0}
                overscanRowCount={3}
                onScroll={this.handleScroll}
              />
            );
          }}
        </AutoSizer>
      </Container>
    );
  }
}

export default MessageConversation;
