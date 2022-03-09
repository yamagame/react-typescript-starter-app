import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CounterLinks } from '.';

export default {
  title: 'organism/CounterLinks',
  component: CounterLinks,
  argTypes: {},
} as ComponentMeta<typeof CounterLinks>;

const Template: ComponentStory<typeof CounterLinks> = (args) => (
  <CounterLinks {...args} />
);

const cardData = {
  React: {
    href: 'https://reactjs.org/',
    head: 'Learn',
  },
  Redux: {
    href: 'https://redux.js.org/',
    head: ',',
  },
  'Redux Toolkit': {
    href: 'https://redux-toolkit.js.org/',
    head: ',',
  },
  'React Redux': {
    href: 'https://react-redux.js.org/',
    head: ', and ',
  },
};

const cards = Object.entries(cardData).map(([name, value]) => ({
  ...value,
  name,
}));

export const Normal = Template.bind({});
Normal.args = {
  cards,
};
