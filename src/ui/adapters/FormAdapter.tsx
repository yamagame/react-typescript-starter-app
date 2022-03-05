import { FormPage } from 'ui/components/pages/FormPage';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'core/store';
import { selectState } from 'core/slices/formSample';
import { actions } from 'core/slices/formSample';

export function FormAdapter() {
  const state = useAppSelector(selectState);
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
    />
  );
}
