import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoPage, ToDo } from '.';

export default {
  title: 'page/ToDoPage',
  component: ToDoPage,
  argTypes: {},
} as ComponentMeta<typeof ToDoPage>;

const Template: ComponentStory<typeof ToDoPage> = (args) => (
  <ToDoPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  todos: [
    { id: '1', todo: `somthing task 1`, checked: false },
    { id: '2', todo: `somthing task 2`, checked: false },
    { id: '3', todo: `somthing task 3`, checked: false },
  ],
  actions: {
    onClickToDoAdd: (todo: string) => {},
    onClickTodoCheckbox: (todo: ToDo) => {},
  },
};
