import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import { App } from 'app/App';

test('renders learn react link', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
