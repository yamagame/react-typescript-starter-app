import React from 'react';
import { ToDoPage } from 'ui/components/pages/ToDoPage';
import { useAppDispatch, useAppSelector } from 'core/store';
import { selectors } from 'core/store/selectors';
import { actions, ToDo } from 'core/slices/todo';

export function ToDoAdapter() {
  const dispatch = useAppDispatch();
  const { todos, status } = useAppSelector(selectors.todo);

  const callbacks = React.useMemo(
    () => ({
      onClickToDoAdd: async (todo: string) => {
        dispatch(actions.createToDoAsync(todo));
      },
      onClickTodoCheckbox: async (todo: ToDo) => {
        await dispatch(actions.updateToDoAsync(todo));
      },
    }),
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(actions.fetchToDoAsync());
  }, [dispatch]);

  return <ToDoPage status={status} todos={todos} actions={callbacks} />;
}
