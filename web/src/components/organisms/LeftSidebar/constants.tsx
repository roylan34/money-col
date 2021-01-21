import { words } from '../../../constants';

/*
 * NOTE: after home page has been implemented:
 * + replace link values
 * + move this file to home page folder
 */

export const sidebarContentsList = words.sidebar.map(item => ({
  ...item,
  link: '.',
}));

export const manualContentsList = [
  {
    title: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    subTitle: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    link: '.',
  },
  {
    title: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    subTitle: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    link: '.',
  },
  {
    title: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    subTitle: 'ダミーダミーダミーダミーダミーダミーダミーダミー',
    link: '.',
  },
];
