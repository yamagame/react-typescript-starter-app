import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import {
  ToDoForm,
  FormProps as ToDoFormProps,
} from 'components/molecules/ToDoForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export type ToDo = { id: string; todo: string; checked: boolean };

export type Props = {
  status?: string;
  todos: ToDo[];
  actions: {
    onClickToDoAdd: (todo: string) => void;
    onClickTodoCheckbox: (todo: ToDo) => void;
  };
  template: MainTemplateProps;
};

type FormProps = ToDoFormProps;

export function ToDoPage(props: Props) {
  const { todos, actions, status } = props;
  const formik = useFormik<FormProps>({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object().shape({
      text: Yup.string().required('ToDo is a required field'),
    }),
    onSubmit: (values) => {
      actions.onClickToDoAdd(values.text);
      formik.setValues({ text: '' });
      formik.setTouched({ text: false });
    },
  });
  return (
    <MainTemplate {...props.template} header="ToDo">
      <p>{status ? status : null}</p>
      <form onSubmit={formik.handleSubmit}>
        <ToDoForm formik={formik} />
      </form>
      {todos.map((v) => (
        <div key={v.id}>
          {v.todo}
          <input
            type="checkbox"
            checked={v.checked}
            onChange={(e) =>
              actions.onClickTodoCheckbox({ ...v, checked: e.target.checked })
            }
          />
        </div>
      ))}
    </MainTemplate>
  );
}
