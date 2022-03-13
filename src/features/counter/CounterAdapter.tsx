import React from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { selectors } from 'core/selectors';
import { CounterPage } from 'components/pages/CounterPage';
import { actions } from 'features/counter';
import { useTemplateProps } from 'features/utils';

const cardData = {
  React: {
    href: 'https://reactjs.org/',
    head: 'Learn',
  },
  Redux: {
    href: 'https://redux.js.org/',
    head: ',',
  },
  'Redux Toolkit': {
    href: 'https://redux-toolkit.js.org/',
    head: ',',
  },
  'React Redux': {
    href: 'https://react-redux.js.org/',
    head: ', and ',
  },
};

export function CounterAdapter() {
  const template = useTemplateProps();
  const { value: count } = useAppSelector(selectors.counter);
  const dispatch = useAppDispatch();
  const cards = React.useMemo(
    () =>
      Object.entries(cardData).map(([name, value]) => ({
        ...value,
        name,
      })),
    []
  );
  return (
    <CounterPage
      count={count}
      cards={cards}
      actions={{
        increment: () => dispatch(actions.increment()),
        decrement: () => dispatch(actions.decrement()),
        incrementByAmount: (amount: number) =>
          dispatch(actions.incrementByAmount(amount)),
        incrementAsync: async (value: number) =>
          dispatch(actions.incrementAsync(value)),
        incrementIfOdd: (value: number) =>
          dispatch(actions.incrementIfOdd(value)),
      }}
      template={template}
    />
  );
}
