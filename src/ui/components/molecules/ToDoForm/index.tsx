import { Button } from 'ui/components/atoms/Button';
import { FormikProps } from 'formik';

export type FormProps = {
  text: string;
};

export type ToDoFormProps = {
  formik: FormikProps<FormProps>;
};

export const ToDoForm = (props: ToDoFormProps) => {
  const { formik } = props;
  return (
    <>
      Text:
      <input
        type="ToDo"
        onChange={(e) => formik.setValues({ text: e.target.value })}
        value={formik.values.text}
      />
      <div>{formik.touched.text && formik.errors.text}</div>
      <Button
        label="Add"
        onClick={() => {
          formik.handleSubmit();
        }}
        size="large"
      />
    </>
  );
};
