import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainTemplate } from '.';

export default {
  title: 'template/MainTemplate',
  component: MainTemplate,
  argTypes: {},
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args}>
    <p>これはテンプレートページです。</p>
  </MainTemplate>
);

export const Normal = Template.bind({});
Normal.args = {
  header: 'Top',
};
