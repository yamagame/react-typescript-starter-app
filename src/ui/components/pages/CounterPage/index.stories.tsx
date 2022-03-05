import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CounterPage } from '.';

export default {
  title: 'page/CounterPage',
  component: CounterPage,
  argTypes: {},
} as ComponentMeta<typeof CounterPage>;

const Template: ComponentStory<typeof CounterPage> = (args) => (
  <CounterPage {...args} />
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
  count: 0,
  cards: cards,
  actions: {
    increment: () => {},
    decrement: () => {},
    incrementByAmount: (amount: number) => {},
    incrementAsync: async (value: number) => {},
    incrementIfOdd: (value: number) => {},
  },
};
