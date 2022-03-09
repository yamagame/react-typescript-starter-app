import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlePage } from '.';

export default {
  title: 'page/ArticlePage',
  component: ArticlePage,
  argTypes: {},
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => (
  <ArticlePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  //
};
