import { MyPage } from 'components/pages/MyPage';
import { useTemplateProps } from 'features/utils';
import { useAppSelector, useAppDispatch } from 'store';
import { testpageSelector } from '../selector';
import { actions } from '../';

export function TestPageAdapter() {
  const dispatch = useAppDispatch();
  const template = useTemplateProps();
  const { count } = useAppSelector(testpageSelector);
  const onClickPlus = () => {
    dispatch(actions.double());
  };
  const onClickMinus = () => {
    dispatch(actions.decrement());
  };
  return (
    <MyPage
      template={template}
      count={count}
      onClickPlus={onClickPlus}
      onClickMinus={onClickMinus}
    />
  );
}
