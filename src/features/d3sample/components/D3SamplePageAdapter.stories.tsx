import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D3SamplePageAdapter } from './D3SamplePageAdapter';

export default {
  title: 'features/D3SampleAdapter',
  component: D3SamplePageAdapter,
  argTypes: {},
} as ComponentMeta<typeof D3SamplePageAdapter>;

const Template: ComponentStory<typeof D3SamplePageAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<D3SamplePageAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
