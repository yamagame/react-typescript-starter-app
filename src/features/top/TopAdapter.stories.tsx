import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopAdapter } from './TopAdapter';

export default {
  title: 'features/TopAdapter',
  component: TopAdapter,
  argTypes: {},
} as ComponentMeta<typeof TopAdapter>;

const Template: ComponentStory<typeof TopAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TopAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
