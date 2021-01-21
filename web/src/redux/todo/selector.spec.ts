import { doneTodos } from './selector';
import { Todo } from '../../domain/entities';

describe('todo selector tests', () => {
  test('doneTodos', () => {
    const todos: Todo[] = [
      {
        id: 'bf7ce87e-8a4b-410c-8a69-2191551f8f17',
        title: '',
        userId: '38e30323-6101-40b5-b1ff-5c3b038c349d',
        description: '',
        done: true,
      },
      {
        id: '9a2998fe-f665-4415-8c93-ecd3c0577692',
        title: '',
        userId: '38e30323-6101-40b5-b1ff-5c3b038c349d',
        description: '',
        done: false,
      },
    ];

    const actual = doneTodos.resultFunc(todos);
    const expected = [
      {
        id: 'bf7ce87e-8a4b-410c-8a69-2191551f8f17',
        title: '',
        userId: '38e30323-6101-40b5-b1ff-5c3b038c349d',
        description: '',
        done: true,
      },
    ];

    expect(actual).toEqual(expected);
  });
});
