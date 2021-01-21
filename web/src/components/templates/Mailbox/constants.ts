import { MessagePreviewType } from '../../organisms/MessagePreview/types';
import { MessageProps } from '../../organisms/MessageConversation/types';

export const DUMMY_MESSAGES: { [key: string]: Array<MessageProps> } = {
  senderID1: [
    {
      id: '1',
      attachmentURLs: [],
      content:
        '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '2',
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
      createdAt: '1',
    },
    {
      id: '3',
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
      createdAt: '1',
    },
    {
      id: '4',
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
      createdAt: '1',
    },
    {
      id: '5',
      attachmentURLs: [
        {
          downloadableUrl:
            'https://www.google.com/search?q=insert+downloadable+url+here&oq=insert+downloadable+url+here&aqs=chrome..69i57j33.4514j0j7&sourceid=chrome&ie=UTF-8',
          fileType: '.pdf',
          fileName: 'Sample.pdf',
          fileSizeInKB: 1746,
        },
      ],
      createdAt: '1',
      content: 'This is a sample pdf.',
      senderId: 'others',
    },
  ],
  senderID2: [
    {
      id: '11',
      attachmentURLs: [],
      content:
        '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '12',
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
      createdAt: '1',
    },
    {
      id: '13',
      attachmentURLs: [
        {
          downloadableUrl:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85a954df-43b3-4b66-9e8d-94fe01b0451f/d9zwd0t-a6016798-941b-4ed3-974f-0ef1512b04d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODVhOTU0ZGYtNDNiMy00YjY2LTllOGQtOTRmZTAxYjA0NTFmXC9kOXp3ZDB0LWE2MDE2Nzk4LTk0MWItNGVkMy05NzRmLTBlZjE1MTJiMDRkMi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ye5wRWQuZ_OQ_9fBfcI2zQADTiGSYC0cD-XZrKIe4Pg',
          fileType: '.png',
          fileName: 'CharizardX.png',
          fileSizeInKB: 1124,
        },
      ],
      content: '',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '14',
      attachmentURLs: [
        {
          downloadableUrl:
            'https://2.bp.blogspot.com/-p9bawY0tUuc/WpDavxfVXnI/AAAAAAAABI0/JMFV4-RjNwkE1hqL0NkaC5VMELDVINmCgCLcBGAs/s1600/charizard%2By.png',
          fileType: '.png',
          fileName: 'CharizardY.png',
          fileSizeInKB: 3348,
        },
      ],
      content: '',
      senderId: 'own',
      createdAt: '1',
    },
    {
      id: '15',
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
      createdAt: '1',
    },
  ],
  senderID3: [
    {
      id: '21',
      attachmentURLs: [],
      content:
        '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '22',

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
      createdAt: '1',
    },
    {
      id: '23',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://img.pokemondb.net/artwork/large/empoleon.jpg',
          fileType: '.jpg',
          fileName: 'Empoleon.jpg',
          fileSizeInKB: 124,
        },
      ],
      content: '',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '24',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://i.pinimg.com/originals/28/5e/af/285eaf5c16b19271b6ccf27aaa32f9ad.png',
          fileType: '.png',
          fileName: 'BlastoiseY.png',
          fileSizeInKB: 3348,
        },
      ],
      content: '',
      senderId: 'own',
      createdAt: '1',
    },
    {
      id: '25',

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
      createdAt: '1',
    },
  ],
  senderID4: [
    {
      id: '31',

      attachmentURLs: [],
      content:
        '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '32',

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
      createdAt: '1',
    },
    {
      id: '33',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-x-y-version/0/06/Mega_blaziken.jpg',
          fileType: '.jpg',
          fileName: 'MegaBlaziken.jpg',
          fileSizeInKB: 124,
        },
      ],
      content: '',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '34',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://static.pokemonpets.com/images/monsters-images-800-800/8448-Mega-Lucario.png',
          fileType: '.png',
          fileName: 'MegaLucario.png',
          fileSizeInKB: 348,
        },
      ],
      content: '',
      senderId: 'own',
      createdAt: '1',
    },
    {
      id: '41',

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
      createdAt: '1',
    },
  ],
  senderID5: [
    {
      id: '42',
      attachmentURLs: [],
      content:
        '初めまして。 Money Collegeで専属講師を務めております、金田と申します。この度はお問い合わせありがとうございます。 ご質問についてですが、まずは~~~~~~~~~~~~~~~~~~~~が求められると思います。 何卒よろしくお願いいたします。',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '43',

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
      createdAt: '1',
    },
    {
      id: '44',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://cdn.bulbagarden.net/upload/thumb/f/fc/493Arceus.png/1200px-493Arceus.png',
          fileType: '.png',
          fileName: 'Arceus.jpg',
          fileSizeInKB: 124,
        },
      ],
      content: '',
      senderId: 'others',
      createdAt: '1',
    },
    {
      id: '441',

      attachmentURLs: [
        {
          downloadableUrl:
            'https://upload.wikimedia.org/wikipedia/en/1/1d/Pok%C3%A9mon_Giratina_art.png',
          fileType: '.png',
          fileName: 'Giratina.png',
          fileSizeInKB: 348,
        },
      ],
      content: '',
      senderId: 'own',
      createdAt: '1',
    },
    {
      id: '442',

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
      createdAt: '1',
    },
  ],
};

export const DUMMY_CONVERSATIONS: MessagePreviewType = {
  senderID1: {
    label: 'MA',
    imgSrc: '',
    name: 'Money College Admin',
    recentMsg: 'お問い合わせありがとうございお問い合わせありがとうござい',
    unreadNumber: 0,
    isAdmin: true,
  },
  senderID2: {
    label: '',
    imgSrc:
      'https://i.pinimg.com/236x/75/89/87/75898779184001f29b3cf38d45b23c36.jpg',
    name: '金山　金次郎',
    recentMsg: 'お問い合わせありがとうございお問い合わせありがとうござい',
    unreadNumber: 0,
  },
  senderID3: {
    label: '',
    imgSrc:
      'https://i.pinimg.com/236x/13/fa/07/13fa075c3628a0724a7289bef3502d20.jpg',
    name: 'マネー　テルオ',
    recentMsg: 'お問い合わせありがとうございお問い合わせありがとうござい',
    unreadNumber: 0,
  },
  senderID4: {
    label: '',
    imgSrc:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f821d50-fbf5-4437-8107-a301530f7500/d2ko24p-6188a386-e997-4b7c-93ad-d194a4997f97.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGY4MjFkNTAtZmJmNS00NDM3LTgxMDctYTMwMTUzMGY3NTAwXC9kMmtvMjRwLTYxODhhMzg2LWU5OTctNGI3Yy05M2FkLWQxOTRhNDk5N2Y5Ny5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.oxfNJvsyCQUG8r615rhunObsNZFl8-jI6BcgjDyuWlo',
    name: '岡　根津子',
    recentMsg: 'お問い合わせありがとうございお問い合わせありがとうござい',
    unreadNumber: 1,
  },
  senderID5: {
    label: '',
    imgSrc:
      'https://ih0.redbubble.net/image.987012502.2897/mwo,x1000,ipad_2_snap-pad,750x1000,f8f8f8.jpg',
    name: '伊藤 潤二',
    recentMsg: 'お問い合わせありがとうございお問い合わせありがとうござい',
    unreadNumber: 0,
  },
};
