import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormFormikAdapter } from './FormFormikAdapter';

export default {
  title: 'features/FormFormikAdapter',
  component: FormFormikAdapter,
  argTypes: {},
} as ComponentMeta<typeof FormFormikAdapter>;

const Template: ComponentStory<typeof FormFormikAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<FormFormikAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
