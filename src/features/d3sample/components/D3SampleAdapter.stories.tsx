import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D3SampleAdapter } from './D3SampleAdapter';

export default {
  title: 'features/D3SampleAdapter',
  component: D3SampleAdapter,
  argTypes: {},
} as ComponentMeta<typeof D3SampleAdapter>;

const Template: ComponentStory<typeof D3SampleAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<D3SampleAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
