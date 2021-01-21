import React from 'react';
import { IDataTableColumn } from 'react-data-table-component';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import {
  VideosTemplate,
  DUMMY_RECOMMENDED_ITEMS,
  DUMMY_RECOMMENDED_TITLES,
} from '.';
import { VideoItemRow } from './types';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import words from '../../../constants/words';
import styled from 'styled-components';

const sampleData: Array<VideoItemRow> = [
  {
    videoItem: {
      imgUrl: 'https://images4.alphacoders.com/104/thumb-1920-104908.jpg',
      videoLength: 144000,
      title: 'コードギアス 反逆のルルーシュ',
      description: 'Sample Video Item',
    },
    limit: words.disclosureValues[1],
    publishSettings: words.publishDropdownValue[1],
    createdAt: '2006/10/5',
    views: 1000,
    id: 'ijiwejgk3',
    salesPlan: words.salesPlanValues[0],
    salePoints: '',
    fileName: 'Code_Geass.mp4',
    downloadableUrl: 'https://CodeGeass.com/Season1.mp4',
    recommendedValue: '設定しない',
    status: '',
  },
  {
    videoItem: {
      imgUrl:
        'https://i0.wp.com/forbiddenpanel.com/PanelCast/wp-content/uploads/2015/08/ansatsu-kyoushitsu-tv.png',
      videoLength: 257849,
      title: '暗殺教室',
      description: 'Sample Video Item',
    },
    limit: words.disclosureValues[0],
    publishSettings: words.publishDropdownValue[1],
    createdAt: '2015/3/21',
    views: 864,
    id: 'ldsjggkhi348',
    salesPlan: words.salesPlanValues[0],
    salePoints: '',
    fileName: 'AssassinationClassroom.mp4',
    downloadableUrl: 'https://korosensei.com/Season1.mp4',
    recommendedValue: '設定しない',
    status: '',
  },
  {
    videoItem: {
      imgUrl: 'https://wallpaperaccess.com/full/2768490.png',
      videoLength: 137973,
      title: '学園ベビーシッターズ',
      description: 'Sample Video Item',
    },
    limit: words.disclosureValues[0],
    publishSettings: words.publishDropdownValue[0],
    createdAt: '2018/1/7',
    views: 99999,
    id: 'jasahsjhje14',
    salesPlan: words.salesPlanValues[1],
    salePoints: '5',
    fileName: 'GakuenBabysitters.mp4',
    downloadableUrl: 'https://babykageyama.com/Season1.mp4',
    recommendedValue: '設定しない',
    status: '',
  },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const initialEntries = [
  '/users',
  '/teachers',
  '/videos',
  '/project-contents',
  '/ea-programs',
  '/articles',
  '/mailbox',
  '/pending-payments',
  '/logout',
];

storiesOf('Template - VideosTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={2}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Videos Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <VideosTemplate
        isFetchingVideos={false}
        onPressDelete={action('on-press-delete')}
        onChangeSelect={action('on-change-selected')}
        onSort={action('on-sort')}
        data={(sampleData as unknown) as IDataTableColumn<Object>[]}
        onUploadAndUpdate={action('upload-video-file-and-file-description')}
        onEditFileDesc={action('on-edit-file-description')}
        recommendedItems={DUMMY_RECOMMENDED_ITEMS}
        recommendedTitles={DUMMY_RECOMMENDED_TITLES}
        onPressPrev={action('on-press-prev')}
        onPressNext={action('on-press-next')}
        hasPrevPage={boolean('hasPrevPage', false)}
        hasNextPage={boolean('hasNextPage', false)}
      />
    </Container>
  ))
  .add('Videos Template - fetching data', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <VideosTemplate
        onPressDelete={action('on-press-delete')}
        onChangeSelect={action('on-change-selected')}
        onSort={action('on-sort')}
        data={(sampleData as unknown) as IDataTableColumn<Object>[]}
        onUploadAndUpdate={action('upload-video-file-and-file-description')}
        onEditFileDesc={action('on-edit-file-description')}
        recommendedItems={DUMMY_RECOMMENDED_ITEMS}
        recommendedTitles={DUMMY_RECOMMENDED_TITLES}
        isFetchingVideos={true}
        onPressPrev={action('on-press-prev')}
        onPressNext={action('on-press-next')}
        hasPrevPage={boolean('hasPrevPage', false)}
        hasNextPage={boolean('hasNextPage', false)}
      />
    </Container>
  ));
