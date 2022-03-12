import { MyPage } from 'components/pages/MyPage';
import { useTemplateProps } from 'features/utils';
import { useAppSelector, useAppDispatch } from 'store';
import { mypageSelector } from './selector';
import { actions } from '.';

export function MyPageAdapter() {
  const dispatch = useAppDispatch();
  const template = useTemplateProps();
  const { count } = useAppSelector(mypageSelector);
  const onClickPlus = () => {
    dispatch(actions.increment());
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
