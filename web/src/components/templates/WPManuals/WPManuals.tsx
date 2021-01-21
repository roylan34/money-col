import React, { PureComponent } from 'react';
import {
  ContentListSelector,
  ContentTypeKeys,
} from '../../molecules/ContentListSelector';
import { Container, PostContainer, Title } from './elements';

type Props = {
  htmlString: string;
  title: string;
  onSelectContentType: (contentType: ContentTypeKeys) => void;
  contentTypes: { [key: string]: string };
};

export default class WPManuals extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { htmlString, title, onSelectContentType, contentTypes } = this.props;

    return (
      <React.Fragment>
        <ContentListSelector
          onPressSelect={onSelectContentType}
          contentTypes={contentTypes}
          selectedType="manualList"
        />
        <Container>
          <Title>{title}</Title>
          {htmlString ? (
            <PostContainer
              dangerouslySetInnerHTML={{
                __html: htmlString,
              }}
            />
          ) : (
            <Title>Insert loading / not found screen here</Title>
          )}
        </Container>
      </React.Fragment>
    );
  };
}
