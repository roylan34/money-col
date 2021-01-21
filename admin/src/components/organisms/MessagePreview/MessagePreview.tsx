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
  BackArrowWrapper,
  ReactVirtualizedList,
} from './elements';
import { MessagePreviewType } from './types';
import { Gear, WhiteBackArrow } from '../../atoms/Icons';
import { MessagePreviewItem } from '../../molecules/MessagePreviewItem';
import { words } from '../../../constants';

const CACHE = new CellMeasurerCache({
  defaultHeight: 65,
  defaultWidth: 316,
  fixedHeight: true,
  fixedWidth: true,
});

type Props = {
  conversations: MessagePreviewType;
  messageSelected: string;
  onChangeSelectedMsg: (convoId: string) => void;
  onClickSettings: () => void;
  onClickBackArrow: () => void;
  onLoadMoreConvo: () => Promise<string>;
  isRowConvoLoaded: (params: { index: number }) => boolean;
  hasNextPageConvo?: boolean;
} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  isAdmin: false as boolean,
};

class MessagePreview extends PureComponent<Props & DefaultProps> {
  static defaultProps = defaultProps;
  listRef: React.RefObject<List>;
  constructor(props: Props & DefaultProps) {
    super(props);

    this.listRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props & DefaultProps) {
    const { messageSelected } = this.props;

    if (
      prevProps.messageSelected !== messageSelected &&
      messageSelected &&
      this.listRef.current
    ) {
      this.listRef.current.forceUpdateGrid();
    }
  }

  removeAdminMsgPreview = (): MessagePreviewType => {
    const { conversations, isAdmin } = this.props;
    let modifiedConvos = {};

    Object.keys(conversations).forEach(key => {
      if (isAdmin && !conversations[key].isAdmin) {
        modifiedConvos = {
          ...modifiedConvos,
          [key]: conversations[key],
        };
      }
    });

    return modifiedConvos;
  };

  renderRow = ({ index, key, parent }: ListRowProps) => {
    const {
      conversations,
      messageSelected,
      onChangeSelectedMsg,
      isAdmin,
    } = this.props;
    const convos = isAdmin ? this.removeAdminMsgPreview() : conversations;
    const convoId = Object.keys(convos)[index];
    const convo = convos[convoId];

    return convo ? (
      <CellMeasurer cache={CACHE} key={key} parent={parent}>
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
              hasReplied={convo.hasReplied}
            />
          </div>
        )}
      </CellMeasurer>
    ) : null;
  };

  render = (): React.ReactElement => {
    const {
      onClickSettings,
      isAdmin,
      onClickBackArrow,
      conversations,
      isRowConvoLoaded,
      onLoadMoreConvo,
      hasNextPageConvo
    } = this.props;
    const convos = isAdmin ? this.removeAdminMsgPreview() : conversations;
    const convoLength = Object.keys(convos).length;
    const remoteRowCount = hasNextPageConvo ? convoLength + 1 : convoLength;

    return (
      <Container>
        <Header isAdmin={isAdmin}>
          {isAdmin ? (
            <>
              <BackArrowWrapper onClick={onClickBackArrow}>
                <WhiteBackArrow />
              </BackArrowWrapper>
              <HeaderLabel isAdmin>{words.adminHeader}</HeaderLabel>
            </>
          ) : (
              <>
                <HeaderLabel>{words.mailboxHeader}</HeaderLabel>
                <GearWrapper onClick={onClickSettings}>
                  <Gear />
                </GearWrapper>
              </>
            )}
        </Header>
        <MessagePreviewList>
          <InfiniteLoader
            isRowLoaded={isRowConvoLoaded}
            loadMoreRows={onLoadMoreConvo}
            rowCount={remoteRowCount}
            minimumBatchSize={10}
            threshold={8}
          >
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
                    deferredMeasurementCache={CACHE}
                    rowHeight={CACHE.rowHeight}
                    rowRenderer={this.renderRow}
                    rowCount={convoLength}
                    overscanRowCount={0}
                    onRowsRendered={onRowsRendered}
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
