import { InstructorsRowData } from './types';

export const DUMMY_INSTRUCTORS: Array<InstructorsRowData> = [
  {
    name: 'Lelouch vi Britannia',
    email: 'lelouch_zero@gmail.com',
    id: 'aksndjnlj3n',
  },
  {
    name: 'Ichigo Kurosaki',
    email: 'soulreaper@gmail.com',
    id: 'aksjfilhelj24',
  },
  {
    name: 'Arthur Shelby',
    email: 'peakyblinders@gmail.com',
    id: 'kjgkhjjlhh2',
  },
];

export const DUMMY_INSTRUCTOR_OBJECT = {
  aksndjnlj3n: {
    id: 'aksndjnlj3n',
    name: {
      firstName: 'Lelouch vi',
      lastName: 'Britannia',
    },
    email: 'lelouch_zero@gmail.com',
    roles: {
      lecturer: true,
      admin: false,
      subscriber: false,
    },
    stripe: {
      customerId: '',
      card: {
        cardId: '',
        brand: '',
        last4: '',
      },
    },
  },
  aksjfilhelj24: {
    id: 'aksjfilhelj24',
    name: {
      firstName: 'Ichigo ',
      lastName: 'Kurosaki',
    },
    email: 'soulreaper@gmail.com',
    roles: {
      lecturer: true,
      admin: false,
      subscriber: false,
    },
    stripe: {
      customerId: '',
      card: {
        cardId: '',
        brand: '',
        last4: '',
      },
    },
  },
  kjgkhjjlhh2: {
    id: 'kjgkhjjlhh2',
    name: {
      firstName: 'Arthur',
      lastName: 'Shelby',
    },
    email: 'peakyblinders@gmail.com',
    roles: {
      lecturer: true,
      admin: false,
      subscriber: false,
    },
    stripe: {
      customerId: '',
      card: {
        cardId: '',
        brand: '',
        last4: '',
      },
    },
  },
};
