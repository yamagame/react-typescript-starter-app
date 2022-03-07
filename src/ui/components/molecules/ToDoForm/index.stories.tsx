import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useFormik } from 'formik';

import { ToDoForm, FormProps } from '.';

export default {
  title: 'molecule/ToDoForm',
  component: ToDoForm,
  argTypes: {
    formik: {
      description: 'formik object',
      table: {
        type: null,
      },
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof ToDoForm>;

const Template: ComponentStory<typeof ToDoForm> = (args) => {
  const formik = useFormik<FormProps>({
    initialValues: {
      text: '',
    },
    onSubmit: (values) => {},
  });
  return (
    <>
      <ToDoForm {...args} formik={formik} />
    </>
  );
};

export const Normal = Template.bind({});
