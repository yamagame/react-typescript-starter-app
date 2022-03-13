import React from 'react';
import { ToDoPage } from 'components/pages/ToDoPage';
import { useAppDispatch, useAppSelector } from 'store';
import { selectors } from 'core/selectors';
import { actions, ToDo } from 'features/todo';
import { useTemplateProps } from 'features/utils';

export function ToDoAdapter() {
  const template = useTemplateProps();
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
    dispatch(actions.initToDoAsync());
  }, [dispatch]);

  return (
    <ToDoPage
      status={status}
      todos={todos}
      actions={callbacks}
      template={template}
    />
  );
}
