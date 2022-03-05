import { FormPage } from 'ui/components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  SizeType as FormSampleSizeType,
  FruitType as FormSampleFruitType,
} from 'ui/components/organisms/FormSample';

type FormProps = {
  size: FormSampleSizeType;
  name: string;
  fruit: FormSampleFruitType;
  blood: string;
};

export function FormFormikAdapter() {
  const navigate = useNavigate();
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
      navigate('/');
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
          onSubmit: () => formik.handleSubmit(),
        }}
      />
    </form>
  );
}
