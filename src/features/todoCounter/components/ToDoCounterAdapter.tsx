import React from 'react';
import {
  ToDoCounterPage,
  ToDoCounterPageProps,
} from 'components/pages/ToDoCounterPage';
import { useAppDispatch, useAppSelector } from 'store';
import { todoCounterSelector } from '../selector';
import { actions as todoCounterActions } from 'features/todoCounter';
import { actions as todoActions } from 'features/todo';
import { useTemplateProps } from 'features/utils';

export function ToDoCounterAdapter() {
  const dispatch = useAppDispatch();
  const template = useTemplateProps();
  const { todo, count } = useAppSelector(todoCounterSelector);

  const todoCounterProps: ToDoCounterPageProps = React.useMemo(
    () => ({
      todo,
      count,
      template,
      onClickMinus: () => {
        dispatch(todoCounterActions.decrement());
      },
      onClickPlus: () => {
        dispatch(todoCounterActions.increment());
      },
    }),
    [todo, count, template]
  );

  React.useEffect(() => {
    dispatch(todoActions.initToDoAsync());
  }, []);

  return <ToDoCounterPage {...todoCounterProps} />;
}
