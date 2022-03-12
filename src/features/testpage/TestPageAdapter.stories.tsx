import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TestPageAdapter } from './TestPageAdapter';

export default {
  title: 'features/TestPageAdapter',
  component: TestPageAdapter,
  argTypes: {},
} as ComponentMeta<typeof TestPageAdapter>;

const Template: ComponentStory<typeof TestPageAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TestPageAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
