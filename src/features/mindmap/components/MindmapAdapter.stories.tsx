import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MindmapAdapter } from './MindmapAdapter';

export default {
  title: 'features/mindmapAdapter',
  component: MindmapAdapter,
  argTypes: {},
} as ComponentMeta<typeof MindmapAdapter>;

const Template: ComponentStory<typeof MindmapAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MindmapAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
