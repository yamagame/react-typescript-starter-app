import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoCounterAdapter } from './ToDoCounterAdapter';

export default {
  title: 'features/ToDoCounterAdapter',
  component: ToDoCounterAdapter,
  argTypes: {},
} as ComponentMeta<typeof ToDoCounterAdapter>;

const Template: ComponentStory<typeof ToDoCounterAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ToDoCounterAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
