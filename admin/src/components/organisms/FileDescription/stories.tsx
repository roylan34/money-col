import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FileDescription } from '.';
import { RecommendedItems } from './types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 1377px;
`;

const SAMPLE_TITLES: RecommendedItems = {
  0: 'Title 1',
  1: 'Title 2',
  2: 'Title 3',
};

const SAMPLE_ITEMS: RecommendedItems = {
  0: 'id1',
  1: '',
  2: 'id3',
};

storiesOf('Organism - FileDescription', module)
  .addDecorator(withKnobs)
  .add('Video Description Modal', () => (
    <Container>
      <FileDescription
        isModalVisible={boolean('Is Modal Visible', true)}
        onCloseModal={action('on-close-modal')}
        onPressRelease={action('on-press-release')}
        fileDescError={object('Errors', {})}
        name={text('Item Name', 'File Name')}
        title={text('Item Title', '')}
        publish="公開"
        createdAt=""
        thumbnail={text('Item Thumbnail', '')}
        status=""
        id="id1"
        description={text('Item Description', '')}
        disclosure="制限なし"
        salesPlan="無料"
        salePoints={text('Item Price', '')}
        fileName={text('Item File Name', 'movie1.MOV')}
        downloadableUrl={text('Item URL', 'https://cityofdream.jp/movie/')}
        recommendedValue=""
        recommendedItems={object('Recommended Items', SAMPLE_ITEMS)}
        recommendedTitle={SAMPLE_TITLES}
      />
    </Container>
  ))
  .add('Project Content Description Modal', () => (
    <Container>
      <FileDescription
        isModalVisible={boolean('Is Modal Visible', true)}
        onCloseModal={action('on-close-modal')}
        onPressRelease={action('on-press-release')}
        fileDescError={object('Errors', {})}
        type="project"
        name={text('Item Name', 'File Name')}
        title={text('Item Title', '')}
        publish="非公開"
        createdAt=""
        thumbnail={text('Item Thumbnail', '')}
        status=""
        id="id1"
        description={text('Item Description', '')}
        disclosure="プライムランクのみ"
        salesPlan="有料"
        salePoints={text('Item Price', '3')}
        fileName={text('Item File Name', 'project1.pdf')}
        downloadableUrl={text('Item URL', 'https://cityofdream.jp/project/')}
        recommendedValue=""
        recommendedItems={object('Recommended Items', SAMPLE_ITEMS)}
        recommendedTitle={SAMPLE_TITLES}
      />
    </Container>
  ));
