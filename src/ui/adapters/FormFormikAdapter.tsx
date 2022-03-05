import { FormPage } from 'ui/components/pages/FormPage';
import { useFormik } from 'formik';

type FormProps = {
  size: 'big' | 'small';
  name: string;
  fruit: {
    apple: boolean;
    tangerine: boolean;
    grape: boolean;
  };
  blood: string;
};

export function FormFormikAdapter() {
  const formik = useFormik<FormProps>({
    initialValues: {
      size: 'big',
      name: '',
      fruit: {
        apple: false,
        tangerine: false,
        grape: false,
      },
      blood: 'A',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormPage
        size={formik.values.size}
        name={formik.values.name}
        fruit={formik.values.fruit}
        blood={formik.values.blood}
        actions={{
          onChangeName: (name) => formik.setFieldValue('name', name),
          onChangeSize: (size) => formik.setFieldValue('size', size),
          onChangeFruit: (fruit, value) =>
            formik.setFieldValue(`fruit.${fruit}`, value),
          onChagenBlood: (blood) => formik.setFieldValue('blood', blood),
        }}
      />
    </form>
  );
}
