import React, { PureComponent } from 'react';
import {
  ContentListSelector,
  ContentTypeKeys,
} from '../../molecules/ContentListSelector';
import { Container, ContentInfoContainer, Title } from './elements';
import { words } from '../../../constants';

type Props = {
  onPressSelect: (contentType: ContentTypeKeys) => void;
  contentTitle: string;
  selectedType: string;
  contentTypes: { [key: string]: string };
};

export default class ContentListHeader extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const {
      onPressSelect,
      contentTitle,
      selectedType,
      contentTypes,
    } = this.props;

    return (
      <Container>
        <ContentListSelector
          onPressSelect={onPressSelect}
          selectedType={selectedType}
          contentTypes={contentTypes}
        />
        <ContentInfoContainer>
          <Title>
            {contentTitle === words.pastVideos ||
            contentTitle === words.pastProjectVideo
              ? contentTitle === words.pastVideos
                ? `あなたにおすすめの動画`
                : `あなたにおすすめの案件`
              : contentTitle}
          </Title>
        </ContentInfoContainer>
      </Container>
    );
  };
}
