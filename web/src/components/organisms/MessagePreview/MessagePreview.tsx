import React, { PureComponent } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  ListRowProps,
  AutoSizer,
  List,
  InfiniteLoader,
} from 'react-virtualized';
import {
  Container,
  Header,
  HeaderLabel,
  GearWrapper,
  MessagePreviewList,
  ReactVirtualizedList,
} from './elements';
import { MessagePreviewType } from './types';
import { Gear } from '../../atoms/Icons';
import { MessagePreviewItem } from '../../organisms/MessagePreviewItem';
import { words } from '../../../constants';

const cache = new CellMeasurerCache({
  defaultHeight: 65,
});

type Props = {
  conversations: MessagePreviewType;
  messageSelected: string;
  onChangeSelectedMsg: (convoId: string) => void;
  onClickSettings: () => void;
  onLoadMoreConvo: () => Promise<string>;
  isRowConvoLoaded: (params: { index: number }) => boolean;
  hasNextPageConvo?: boolean;
};

class MessagePreview extends PureComponent<Props> {
  listRef: React.RefObject<List>;
  constructor(props: Props) {
    super(props);

    this.listRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    const { messageSelected } = this.props;

    if (
      prevProps.messageSelected !== messageSelected &&
      messageSelected &&
      this.listRef.current
    ) {
      this.listRef.current.forceUpdateGrid();
    }
  }

  renderRow = ({ index, key, parent }: ListRowProps) => {
    const { conversations, messageSelected, onChangeSelectedMsg } = this.props;
    const convoId = Object.keys(conversations)[index];
    const convo = conversations[convoId];
    return (
      <CellMeasurer cache={cache} key={key} parent={parent}>
        {({ measure, registerChild }) => (
          <div
            onLoad={measure}
            ref={
              registerChild as
                | React.RefObject<HTMLDivElement>
                | null
                | undefined
            }>
            <MessagePreviewItem
              label={convo.label}
              imgSrc={convo.imgSrc}
              name={convo.name}
              recentMsg={convo.recentMsg}
              isSelected={convoId === messageSelected}
              isAdmin={convo.isAdmin}
              unreadNumber={convo.unreadNumber}
              convoId={convoId}
              onClickMessageItem={onChangeSelectedMsg}
            />
          </div>
        )}
      </CellMeasurer>
    );
  };

  render = (): React.ReactElement => {
    const {
      conversations,
      onClickSettings,
      isRowConvoLoaded,
      onLoadMoreConvo,
      hasNextPageConvo,
    } = this.props;

    const convoLength = Object.keys(conversations).length;
    const remoteRowCount = hasNextPageConvo ? convoLength + 1 : convoLength;

    return (
      <Container>
        <Header>
          <HeaderLabel>{words.mailboxHeader}</HeaderLabel>
          <GearWrapper onClick={onClickSettings}>
            <Gear />
          </GearWrapper>
        </Header>
        <MessagePreviewList>
          <InfiniteLoader
            isRowLoaded={isRowConvoLoaded}
            loadMoreRows={onLoadMoreConvo}
            rowCount={remoteRowCount}
            minimumBatchSize={10}
            threshold={8}>
            {({ onRowsRendered, registerChild }) => (
              <AutoSizer>
                {({ height, width }) => (
                  <ReactVirtualizedList
                    ref={(ref: React.RefObject<List>) => {
                      this.listRef = ref;
                      registerChild(ref);
                    }}
                    height={height}
                    width={width}
                    onRowsRendered={onRowsRendered}
                    deferredMeasurementCache={cache}
                    rowHeight={cache.rowHeight}
                    rowRenderer={this.renderRow}
                    rowCount={convoLength}
                  />
                )}
              </AutoSizer>
            )}
          </InfiniteLoader>
        </MessagePreviewList>
      </Container>
    );
  };
}

export default MessagePreview;
