import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyPageAdapter } from './MyPageAdapter';

export default {
  title: 'features/MyPageAdapter',
  component: MyPageAdapter,
  argTypes: {},
} as ComponentMeta<typeof MyPageAdapter>;

const Template: ComponentStory<typeof MyPageAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MyPageAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
