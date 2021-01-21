import React, { PureComponent } from 'react';

import { Container, ContentTypeButton } from './elements';

interface contentType {
  pastVideos: string;
  pastProjectVideo: string;
  eaProgram: string;
  manualList: string;
}

interface boughtContentTypes {
  boughtPastVideos: string;
  case: string;
}

export type ContentTypes = keyof contentType;
export type BoughtContentTypes = keyof boughtContentTypes;

type Props = {
  // TODO: Need to change it to an non-any value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPressSelect: (type: any) => void;
  contentTypes: { [key: string]: string };
  selectedType: string;
};

export default class ContentListSelector extends PureComponent<Props> {
  // TODO: Need to change it to an non-any values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOnPressSelect = (type: any) => {
    const { onPressSelect } = this.props;

    onPressSelect(type);
  };

  render = (): React.ReactElement => {
    const { selectedType, contentTypes } = this.props;

    return (
      <Container className="content-list-selector">
        {Object.keys(contentTypes).map(key => (
          <ContentTypeButton
            key={key}
            onClick={() => this.handleOnPressSelect(key)}
            isSelected={selectedType === key}>
            {contentTypes[key]}
          </ContentTypeButton>
        ))}
      </Container>
    );
  };
}
