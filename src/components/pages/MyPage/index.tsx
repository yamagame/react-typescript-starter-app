import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { Button } from 'components/atoms/Button';
import { useComponentState } from './componentState';

export type MyPageProps = {
  count: number;
  template: MainTemplateProps;
  onClickPlus: () => void;
  onClickMinus: () => void;
  onClickReset: () => void;
};

export function MyPage(props: MyPageProps) {
  const { count } = props;
  const state = useComponentState(props);
  return (
    <MainTemplate {...props.template} header="MyPage">
      <p>これはマイページです。</p>
      <p>
        <Button label="-" onClick={props.onClickMinus} />
        カウンタ : {count} 個
        <Button label="+" onClick={props.onClickPlus} />
      </p>
      {state.timerEnabled ? 'true' : 'false'}
      <input
        type="button"
        onClick={function startCountUp() {
          state.setTimerEnabled(true);
        }}
        value="COUNT UP"
      />
      <input
        type="button"
        onClick={function stopCountUp() {
          state.setTimerEnabled(false);
        }}
        value="STOP"
      />
      <input
        type="button"
        onClick={function resetCount() {
          props.onClickReset();
        }}
        value="RESET"
      />
      <div>{state.message}</div>
      <input
        type="button"
        onClick={function onClick() {
          state.setMessage('Hello React!');
        }}
        value="PUSH!"
      />
      <input
        type="button"
        onClick={function onClick() {
          state.setMessage('');
        }}
        value="CLEAR!"
      />
    </MainTemplate>
  );
}
