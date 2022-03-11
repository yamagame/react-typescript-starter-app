import { FormPage } from 'components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch, selectors } from 'store';
import { actions } from 'features/formSample';
import { useTemplateProps } from 'features/utils';

export function FormAdapter() {
  const template = useTemplateProps();
  const state = useAppSelector(selectors.formSample);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <FormPage
      size={state.size}
      name={state.name}
      fruit={state.fruit}
      blood={state.blood}
      actions={{
        onChangeName: (name) => dispatch(actions.setName(name)),
        onChangeSize: (size) => dispatch(actions.setSize(size)),
        onChangeFruit: (fruit, value) =>
          dispatch(actions.setFruit({ fruit, value })),
        onChagenBlood: (blood) => dispatch(actions.setBlood(blood)),
        onSubmit: () => navigate('/'),
      }}
      template={template}
    />
  );
}