import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleAdapter } from './ArticleAdapter';

export default {
  title: 'features/ArticleAdapter',
  component: ArticleAdapter,
  argTypes: {},
} as ComponentMeta<typeof ArticleAdapter>;

const Template: ComponentStory<typeof ArticleAdapter> = (args) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ArticleAdapter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const Normal = Template.bind({});
