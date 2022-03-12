import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormAdapter } from './FormAdapter';

export default {
  title: 'features/FormAdapter',
  component: FormAdapter,
  argTypes: {},
} as ComponentMeta<typeof FormAdapter>;

const Template: ComponentStory<typeof FormAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FormAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
