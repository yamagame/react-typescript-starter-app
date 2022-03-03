import { useAppSelector, useAppDispatch } from 'core/store';
import { selectCount } from 'core/slices/counter/counterSlice';
import { CounterPage } from 'ui/components/pages/CounterPage';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from 'core/slices/counter/counterSlice';

export function CounterAdapter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <CounterPage
      count={count}
      actions={{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        incrementByAmount: (amount: number) =>
          dispatch(incrementByAmount(amount)),
        incrementAsync: (value: number) => dispatch(incrementAsync(value)),
        incrementIfOdd: (value: number) => dispatch(incrementIfOdd(value)),
      }}
    />
  );
}
