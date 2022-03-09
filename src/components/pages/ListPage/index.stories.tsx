import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListPage } from '.';

export default {
  title: 'page/ListPage',
  component: ListPage,
  argTypes: {},
} as ComponentMeta<typeof ListPage>;

const Template: ComponentStory<typeof ListPage> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<ListPage {...args} />} />
    </Routes>
  </BrowserRouter>
);

const urls = [
  { url: `/counter`, title: 'Counter' },
  { url: `/form`, title: 'Form' },
  { url: `/form-formik`, title: 'Form-Formik' },
  { url: `/my-page`, title: 'MyPage' },
];

const pages = [
  { id: '1', title: 'ページ1', content: 'ページ1の本文' },
  { id: '2', title: 'ページ2', content: 'ページ2の本文' },
  { id: '3', title: 'ページ3', content: 'ページ3の本文' },
  { id: '4', title: 'ページ4', content: 'ページ4の本文' },
  { id: '5', title: 'ページ5', content: 'ページ5の本文' },
  { id: '6', title: 'ページ6', content: 'ページ6の本文' },
];

export const Normal = Template.bind({});
Normal.args = {
  pages,
  urls,
};
