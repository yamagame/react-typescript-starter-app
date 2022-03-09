import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from '.';

export default {
  title: 'organism/Counter',
  component: Counter,
  argTypes: {},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  //
};
