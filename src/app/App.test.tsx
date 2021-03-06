import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { App } from 'app/App';

test('Appの表示', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
