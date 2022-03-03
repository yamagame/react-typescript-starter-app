import { useAppSelector, useAppDispatch } from 'core/store';
import { selectCount } from 'core/slices/counter/counterSlice';
import { CounterPage } from 'ui/components/pages/CounterPage';
import { actions } from 'core/slices/counter/counterSlice';

export function CounterAdapter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <CounterPage
      count={count}
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
    />
  );
}
