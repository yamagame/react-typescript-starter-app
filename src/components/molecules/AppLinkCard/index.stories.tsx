import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLinkCard } from '.';

export default {
  title: 'molecule/AppLinkCard',
  component: AppLinkCard,
  argTypes: {},
} as ComponentMeta<typeof AppLinkCard>;

const Template: ComponentStory<typeof AppLinkCard> = (args) => (
  <AppLinkCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  head: 'Links',
  href: 'https://www.google.com',
  name: 'Google',
};
