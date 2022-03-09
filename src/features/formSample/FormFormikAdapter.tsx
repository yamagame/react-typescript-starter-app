import { FormPage } from 'components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  FormSampleSize,
  FormSampleFruit,
} from 'components/organisms/FormSample';
import { useTemplateProps } from 'features/utils';

type FormProps = {
  size: FormSampleSize;
  name: string;
  fruit: FormSampleFruit;
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
        template={useTemplateProps()}
      />
    </form>
  );
}
