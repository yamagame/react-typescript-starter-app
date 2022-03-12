import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoAdapter } from './ToDoAdapter';

export default {
  title: 'features/ToDoAdapter',
  component: ToDoAdapter,
  argTypes: {},
} as ComponentMeta<typeof ToDoAdapter>;

const Template: ComponentStory<typeof ToDoAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ToDoAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
