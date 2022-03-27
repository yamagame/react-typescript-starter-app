import React from 'react';
import { FormPage } from 'components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  FormSampleSize,
  FormSampleFruit,
} from 'components/organisms/FormSample';
import { useTemplateProps } from 'features/utils';
import { API } from 'core/gateways/utils/api';

type FormProps = {
  size: FormSampleSize;
  name: string;
  fruit: FormSampleFruit;
  blood: string;
  option: string;
};

export function FormFormikAdapter() {
  const [options, setOptions] = React.useState<string[]>([]);
  const [, setName] = React.useState('');
  const [active, setActive] = React.useState(false);
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
      option: '',
    },
    onSubmit: (values) => {
      navigate('/');
    },
  });
  React.useEffect(() => {
    // 文字が入力されたらAPIコール
    setName((name) => {
      if (name.length !== 7 && formik.values.name.length === 7) {
        const loadPage = async () => {
          const res = await API.getAsync('/api/pages');
          console.log(res.data);
          setOptions(res.data.map((d: { title: string }) => d.title));
        };
        loadPage();
        setActive(true);
      }
      if (name.length === 7 && formik.values.name.length < 7) {
        setActive(false);
      }
      return formik.values.name;
    });
  }, [formik.values]);
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormPage
        size={formik.values.size}
        name={formik.values.name}
        fruit={formik.values.fruit}
        blood={formik.values.blood}
        option={formik.values.option}
        options={options}
        disabled={!active}
        actions={{
          onChangeName: (name) => {
            // 文字数制限
            formik.setFieldValue(
              'name',
              name.slice(0, Math.min(7, name.length))
            );
          },
          onChangeSize: (size) => formik.setFieldValue('size', size),
          onChangeFruit: (fruit, value) =>
            formik.setFieldValue(`fruit.${fruit}`, value),
          onChagenBlood: (blood) => formik.setFieldValue('blood', blood),
          onChangeOption: (option) => formik.setFieldValue('option', option),
          onSubmit: () => formik.handleSubmit(),
        }}
        template={useTemplateProps()}
      />
    </form>
  );
}
