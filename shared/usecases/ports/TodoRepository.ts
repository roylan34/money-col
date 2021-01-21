import { Todo } from '../../domain/entities/todo';

export default interface TodoRepository {
  find(params: {
    userId: string;
    page?: number;
    limit?: number;
  }): Promise<Todo[]>;
  findById(id: string): Promise<Todo | undefined>;
  insert(): Promise<Todo>;
  update(
    id: string,
    todo: {
      title?: string;
      description?: string;
    },
  ): Promise<Todo>;
}
