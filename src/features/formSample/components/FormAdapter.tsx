import { FormPage } from 'components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store';
import { formSampleSelector } from '../selector';
import { actions } from 'features/formSample';
import { useTemplateProps } from 'features/utils';

export function FormAdapter() {
  const template = useTemplateProps();
  const state = useAppSelector(formSampleSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <FormPage
      size={state.size}
      name={state.name}
      fruit={state.fruit}
      blood={state.blood}
      option={state.option}
      options={['option1', 'option2']}
      disabled={false}
      actions={{
        onChangeName: (name) => dispatch(actions.setName(name)),
        onChangeSize: (size) => dispatch(actions.setSize(size)),
        onChangeFruit: (fruit, value) =>
          dispatch(actions.setFruit({ fruit, value })),
        onChagenBlood: (blood) => dispatch(actions.setBlood(blood)),
        onChangeOption: (option) => dispatch(actions.setOption(option)),
        onSubmit: () => navigate('/'),
      }}
      template={template}
    />
  );
}
