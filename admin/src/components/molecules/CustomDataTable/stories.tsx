import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Name } from './elements';
import { VideoItem } from '../VideoListItem';
import {
  CustomDataTable,
  DUMMY_USER_COLUMN,
  DUMMY_USER_DATA,
  DUMMY_VIDEO_ITEM_COLUMN,
  DUMMY_VIDEO_ITEM_DATA,
} from '.';

export const nameLabel = (value: string) => <Name>{value}</Name>;
export const videoItem = (
  imgUrl: string,
  videoLength: number,
  title: string,
  description: string,
) => (
  <VideoItem
    imgUrl={imgUrl}
    videoLength={videoLength}
    title={title}
    description={description}
  />
);

storiesOf('Molecule - CustomDataTable', module)
  .add('Basic Table', () => (
    <CustomDataTable
      data={DUMMY_USER_DATA}
      // @ts-ignore
      columns={DUMMY_USER_COLUMN}
      onChangeSelect={action('on-change-select')}
      onSort={action('on-sort')}
      sortField="createdAt"
      onRowClicked={action('on-row-click')}
    />
  ))
  .add('Table with custom cell', () => (
    // @ts-ignore
    <CustomDataTable
      data={DUMMY_VIDEO_ITEM_DATA}
      // @ts-ignore
      columns={DUMMY_VIDEO_ITEM_COLUMN}
      onChangeSelect={action('on-change-select')}
      onSort={action('on-sort')}
      sortField="createdAt"
      onRowClicked={action('on-row-clicked')}
    />
  ));
