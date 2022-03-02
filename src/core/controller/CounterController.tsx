import { useAppSelector, useAppDispatch } from 'core/store';
import { selectCount } from 'core/slices/counter/counterSlice';
import { CounterPage } from 'ui/pages/CounterPage';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from 'core/slices/counter/counterSlice';

export function CounterController() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <CounterPage
      count={count}
      actions={{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
        incrementAsync: (value) => dispatch(incrementAsync(value)),
        incrementIfOdd: (value) => dispatch(incrementIfOdd(value)),
      }}
    />
  );
}
