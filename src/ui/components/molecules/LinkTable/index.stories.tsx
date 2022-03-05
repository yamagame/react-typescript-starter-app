import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkTable } from '.';

export default {
  title: 'molecule/LinkTable',
  component: LinkTable,
  argTypes: { urls: [{ title: 'string', url: 'string' }] },
} as ComponentMeta<typeof LinkTable>;

const Template: ComponentStory<typeof LinkTable> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<LinkTable {...args} />} />
    </Routes>
  </BrowserRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  urls: [
    {
      title: 'Page1',
      url: '/page/1',
    },
    {
      title: 'Page2',
      url: '/page/2',
    },
  ],
};
