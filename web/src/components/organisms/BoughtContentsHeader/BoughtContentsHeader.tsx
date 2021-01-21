import React, { PureComponent } from 'react';
import { ContentListSelector } from '../../molecules/ContentListSelector';
import { Container, TitleContainer, Title } from './elements';

type Props = {
  // TODO: Need to change it to an non-any value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPressSelect: (contentType: any) => void;
  title: string;
  selectedType: string;
  contentTypes: { [key: string]: string };
};

export default class BoughtContentsHeader extends PureComponent<Props> {
  render = (): React.ReactElement => {
    const { onPressSelect, title, selectedType, contentTypes } = this.props;

    return (
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <ContentListSelector
          onPressSelect={onPressSelect}
          selectedType={selectedType}
          contentTypes={contentTypes}
        />
      </Container>
    );
  };
}
