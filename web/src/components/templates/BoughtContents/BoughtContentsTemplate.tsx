import React, { PureComponent } from 'react';
import {
  Container,
  BoughtContainer,
  BoughtRow,
  PreviewWrapper,
  LoadingContainer,
} from './elements';
import { LoadingIndicator } from '../../atoms/LoadingIndicator';
import { PreviewCard } from '../../molecules/PreviewCard';
import { PreviewCardParams } from '../../organisms/MovieItem/types';
import { BoughtContentsHeader } from '../../organisms/BoughtContentsHeader';
import { BoughtContentTypes } from '../../organisms/BoughtContentsHeader/types';
import { splitArrayIntoGroups } from '../../../utils/arrayUtils';
import { words } from '../../../constants';

type Props = {
  contentTypes: { [key: string]: string };
  title: string;
  onSelectContentType: (contentType: BoughtContentTypes) => void;
  selectedType: BoughtContentTypes;
  data: Array<PreviewCardParams>;
  onPressCard: (card: PreviewCardParams) => void;
  isFetching?: boolean;
};

class BoughtContents extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      contentTypes,
      title,
      onSelectContentType,
      selectedType,
      data,
      onPressCard,
      isFetching,
    } = this.props;
    let formattedData = data ? splitArrayIntoGroups(data, 4) : [];

    return (
      <Container>
        <BoughtContentsHeader
          onPressSelect={onSelectContentType}
          title={title}
          selectedType={selectedType}
          contentTypes={contentTypes}
        />
        <BoughtContainer>
          {isFetching ? (
            <LoadingContainer>
              <LoadingIndicator />
            </LoadingContainer>
          ) : formattedData && formattedData.length > 0 ? (
            formattedData.map((data: Array<PreviewCardParams>, index) => (
              <BoughtRow isFirst={index === 0} key={index}>
                {data.map((value, innerIndex) => (
                  <PreviewWrapper isFirst={innerIndex === 0} key={value.title}>
                    <PreviewCard
                      imageSource={value.thumbnailURL}
                      title={value.title}
                      points={0}
                      tags={value.tags}
                      id={value.id}
                      description=""
                      onPressCard={onPressCard}
                      theme="bought"
                    />
                  </PreviewWrapper>
                ))}
              </BoughtRow>
            ))
          ) : (
            words.noPurchasedContent
          )}
        </BoughtContainer>
      </Container>
    );
  };
}

export default BoughtContents;
