import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from '.';

export default {
  title: 'atom/AppLink',
  component: AppLink,
  argTypes: {},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  name: 'Google',
  href: 'https://www.google.com',
};
