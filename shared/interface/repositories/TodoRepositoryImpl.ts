import TodoRepository from '../../usecases/ports/TodoRepository';
import HttpAdapter from '../../usecases/ports/HttpAdapter';
import { Todo } from '../../domain/entities/todo';

export default class TodoRepositoryImpl implements TodoRepository {
  httpAdapter: HttpAdapter;
  urls: { [key: string]: string };

  constructor(httpAdapter: HttpAdapter, urls: { [key: string]: string }) {
    this.httpAdapter = httpAdapter;
    this.urls = urls;
  }

  find = async (params: {
    userId: string;
    page?: number;
    limit?: number;
  }): Promise<Todo[]> =>
    (await this.httpAdapter.get(this.urls.getTodos, {
      params,
    })) as Todo[];

  findById = async (): Promise<Todo | undefined> => undefined;

  insert = async (): Promise<Todo> => ({
    id: '2e28f99d-e088-4858-aeff-d80be4c966dc',
    userId: '53609303-1729-4181-961b-bc775c2121a3',
    title: 'sample',
    description: 'do something',
    done: false,
  });

  update = async (
    id: string,
    todo: {
      title?: string;
      description?: string;
    },
  ): Promise<Todo> => ({
    id,
    userId: '53609303-1729-4181-961b-bc775c2121a3',
    title: todo.title || '',
    description: todo.description || '',
    done: false,
  });
}
