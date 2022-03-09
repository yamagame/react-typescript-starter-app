import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormPage } from '.';

export default {
  title: 'page/FormPage',
  component: FormPage,
  argTypes: {},
} as ComponentMeta<typeof FormPage>;

const Template: ComponentStory<typeof FormPage> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<FormPage {...args} />} />
    </Routes>
  </BrowserRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  name: 'name',
  size: 'big',
  fruit: {
    apple: false,
    tangerine: false,
    grape: false,
  },
};
