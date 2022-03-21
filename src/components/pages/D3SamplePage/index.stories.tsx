import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D3Sample } from '.';

export default {
  title: 'page/Mindmap',
  component: D3Sample,
  argTypes: {},
} as ComponentMeta<typeof D3Sample>;

const Template: ComponentStory<typeof D3Sample> = (args) => (
  <D3Sample {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  data: [
    { name: 'name1', value: 1 },
    { name: 'name2', value: 2 },
    { name: 'name3', value: 3 },
  ],
};
