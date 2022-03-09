import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormSample } from '.';

export default {
  title: 'organism/FormSample',
  component: FormSample,
  argTypes: {},
} as ComponentMeta<typeof FormSample>;

const Template: ComponentStory<typeof FormSample> = (args) => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<FormSample {...args} />} />
    </Routes>
  </BrowserRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  name: 'ultraman',
  size: 'big',
  fruit: {
    apple: false,
    tangerine: false,
    grape: false,
  },
  actions: {
    onChangeName: (name) => {},
    onChangeSize: (size) => {},
    onChangeFruit: (fruit, value) => {},
    onChagenBlood: (blood) => {},
    onSubmit: () => {},
  },
};
