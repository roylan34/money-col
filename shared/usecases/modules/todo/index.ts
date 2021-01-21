import { buildFetchTodos, fetchTodosUseCase } from './fetch-todos';

import TodoRepository from '../../ports/TodoRepository';

export default (dependencies: {
  todoRepo: TodoRepository;
}): {
  fetchTodos: fetchTodosUseCase;
} => {
  const { todoRepo } = dependencies;
  const fetchTodos = buildFetchTodos({ todoRepo });

  return { fetchTodos };
};
