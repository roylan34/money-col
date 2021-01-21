import { MessageProps } from './types';

export const imagesExtensions = ['.png', '.jpg', '.svg', '.gif'];

export const DUMMY_MESSAGES: Array<MessageProps> = [
  {
    attachmentURLs: [],
    content:
      '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
    senderId: 'others',
    createdAt: '09/08/20 09:44',
    id: '',
  },
  {
    attachmentURLs: [
      {
        downloadableUrl:
          'https://www.google.com/search?q=insert+downloadable+url+here&oq=insert+downloadable+url+here&aqs=chrome..69i57j33.4514j0j7&sourceid=chrome&ie=UTF-8',
        fileType: '.pdf',
        fileName: 'Sample.pdf',
        fileSizeInKB: 2395,
      },
    ],
    content: 'はじめまして！ こちらこそありがとうございます。',
    senderId: 'own',
    createdAt: '09/08/20 10:00',
    id: '',
  },
  {
    attachmentURLs: [
      {
        downloadableUrl:
          'https://i.pinimg.com/236x/2c/2b/e5/2c2be5d7a99c2c8eff230bd72792aefd--pokemon-stuff-blog.jpg',
        fileType: '.jpg',
        fileName: 'Groovyle.jpg',
        fileSizeInKB: 124,
      },
    ],
    content: '',
    senderId: 'others',
    createdAt: '11:11',
    id: '',
  },
  {
    attachmentURLs: [
      {
        downloadableUrl:
          'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/1200px-003Venusaur.png',
        fileType: '.png',
        fileName: 'Venasaur.png',
        fileSizeInKB: 348,
      },
    ],
    content: '',
    senderId: 'own',
    createdAt: '13:30',
    id: '',
  },
  {
    attachmentURLs: [
      {
        downloadableUrl:
          'https://www.google.com/search?q=insert+downloadable+url+here&oq=insert+downloadable+url+here&aqs=chrome..69i57j33.4514j0j7&sourceid=chrome&ie=UTF-8',
        fileType: '.pdf',
        fileName: 'Sample.pdf',
        fileSizeInKB: 1746,
      },
    ],
    content: 'This is a sample pdf.',
    senderId: 'others',
    createdAt: '15:39',
    id: '',
  },
];
