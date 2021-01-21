import { Todo } from '../../../domain/entities/todo';
import TodoRepository from '../../ports/TodoRepository';

export type fetchTodosUseCase = (params: { userId: string }) => Promise<Todo[]>;

export const buildFetchTodos = (dependencies: {
  todoRepo: TodoRepository;
}): fetchTodosUseCase => {
  const { todoRepo } = dependencies;

  const fetchTodos: fetchTodosUseCase = async (params) =>
    todoRepo.find({ userId: params.userId });

  return fetchTodos;
};
