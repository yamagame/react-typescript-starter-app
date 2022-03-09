import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AppLink } from '.';

test('AppLinkの表示', () => {
  const { container } = render(
    <Provider store={store}>
      <AppLink href="string" name="string" />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
