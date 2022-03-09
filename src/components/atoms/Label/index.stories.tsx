import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '.';

export default {
  title: 'atom/Label',
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>{args.children}</Label>
);

export const Normal = Template.bind({});
Normal.args = {
  children: 'ラベル',
};
