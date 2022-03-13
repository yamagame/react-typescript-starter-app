import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CounterAdapter } from './CounterAdapter';

export default {
  title: 'features/CounterAdapter',
  component: CounterAdapter,
  argTypes: {},
} as ComponentMeta<typeof CounterAdapter>;

const Template: ComponentStory<typeof CounterAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<CounterAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
