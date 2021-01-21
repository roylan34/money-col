import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import {
  ProjectTemplate,
  DUMMY_RECOMMENDED_ITEMS,
  DUMMY_RECOMMENDED_TITLES,
} from '.';
import { LeftSidebar } from '../../molecules/LeftSidebar';
import { RowData } from './types';

const SAMPLE_DATA: Array<RowData> = [
  {
    title: '海外銀行口座解説のための徹底講座',
    publish: '公開',
    createdAt: '2020/7/1 10:28',
    thumbnail:
      'https://i.pinimg.com/originals/a7/d1/6a/a7d16a434c15ff63d8383c765033d1a3.jpg',
    status: 'マイページに 表示',
    id: '1',
    description: 'Project description test',
    disclosure: '制限なし',
    salesPlan: '無料',
    salePoints: '0',
    fileName: '海外銀行口座解説のための徹底講座.pdf',
    downloadableUrl: 'https://http://cityofdreams.xsrv.jp/projects',
    recommendedValue: '設定しない',
  },
  {
    title: '新案件のご案内',
    publish: '非公開',
    createdAt: '2020/7/1 08:17',
    thumbnail:
      'https://em.wattpad.com/27d482eee6002011e4d4730f74b759597baaa0bc/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f595762764a5530495a6264662d673d3d2d38372e3135393565343233393131313931396137303039353934323435312e6a7067?s=fit&w=720&h=720',
    status: '',
    id: '2',
    description: 'Project description test',
    disclosure: '制限なし',
    salesPlan: '無料',
    salePoints: '0',
    fileName: 'Test.pdf',
    downloadableUrl: 'https://http://cityofdreams.xsrv.jp/projects',
    recommendedValue: '設定しない',
  },
  {
    title: '海外銀行口座解説のための徹底講座',
    publish: '非公開',
    createdAt: '2020/6/30 15:37',
    thumbnail:
      'https://lostinanime.com/wp-content/uploads/2018/02/Gakuen-Babysitters-08-07.jpg',
    status: '',
    id: '3',
    description: 'Project description test',
    disclosure: 'プライムランクのみ',
    salesPlan: '有料',
    salePoints: '5',
    fileName: '海外銀行口座解説のための徹底講座.pdf',
    downloadableUrl: 'https://http://cityofdreams.xsrv.jp/projects',
    recommendedValue: '設定しない',
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

storiesOf('Template - ProjectContentTemplate', module)
  .addDecorator(getStory => (
    <MemoryRouter initialEntries={initialEntries} initialIndex={3}>
      {getStory()}
    </MemoryRouter>
  ))
  .add('Project Template', () => (
    <Container>
      <LeftSidebar logOut={action('logout')} />
      <ProjectTemplate
        onUploadAndUpdate={action('on-upload-and-update')}
        onPressDelete={action('on-press-delete')}
        // @ts-ignore
        data={SAMPLE_DATA}
        onChangeSelect={action('on-change-select')}
        onSort={action('on-sort')}
        onEditFileDesc={action('on-edit-file-description')}
        recommendedItems={DUMMY_RECOMMENDED_ITEMS}
        recommendedTitles={DUMMY_RECOMMENDED_TITLES}
      />
    </Container>
  ));
