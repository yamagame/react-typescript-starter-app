import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Mindmap } from '.';

export default {
  title: 'page/Mindmap',
  component: Mindmap,
  argTypes: {},
} as ComponentMeta<typeof Mindmap>;

const Template: ComponentStory<typeof Mindmap> = (args) => (
  <Mindmap {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  //
};
