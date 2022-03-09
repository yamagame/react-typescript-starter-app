import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyPage } from '.';

export default {
  title: 'page/MyPage',
  component: MyPage,
  argTypes: {},
} as ComponentMeta<typeof MyPage>;

const Template: ComponentStory<typeof MyPage> = (args) => <MyPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  //
};
