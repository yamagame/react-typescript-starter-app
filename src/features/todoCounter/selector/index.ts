import { RootState } from 'store';

export const todoCounterSelector = (state: RootState) => {
  const index =
    state.todo.todos.length > 0
      ? state.todoCounter.count % state.todo.todos.length
      : -1;
  const todo = index >= 0 ? state.todo.todos[index].todo : '';
  return {
    count: state.todoCounter.count,
    todo: todo,
  };
};
