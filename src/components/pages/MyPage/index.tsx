import React from 'react';
import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { Button } from 'components/atoms/Button';

export type MyPageProps = {
  count: number;
  template: MainTemplateProps;
  onClickPlus: () => void;
  onClickMinus: () => void;
  onClickReset: () => void;
};

export function MyPage(props: MyPageProps) {
  const [timerEnabled, setTimerEnabled] = React.useState(false);
  const [message, setMessage] = React.useState('Hello World!');
  const { count } = props;
  React.useEffect(
    function oddOrEven() {
      const countStr = `${count}`;
      if (count > 0 && (countStr.indexOf('3') >= 0 || count % 3 === 0)) {
        setMessage('アホです');
      } else if (count % 2) {
        setMessage('奇数です');
      } else {
        setMessage('偶数です');
      }
    },
    [count]
  );
  React.useEffect(
    function startTimer() {
      console.log(`## call start timer ${timerEnabled ? 'true' : 'false'}`);
      let timer: ReturnType<typeof setInterval> | undefined;
      if (timerEnabled) {
        timer = setInterval(function countUp() {
          props.onClickPlus();
        }, 1000);
        console.log(`start timer ${timer}`);
      }
      return function clearTimer() {
        if (timer) clearInterval(timer);
        console.log(`clear timer ${timer}`);
      };
    },
    [timerEnabled]
  );
  return (
    <MainTemplate {...props.template} header="MyPage">
      <p>これはマイページです。</p>
      <p>
        <Button label="-" onClick={props.onClickMinus} />
        カウンタ : {count} 個
        <Button label="+" onClick={props.onClickPlus} />
      </p>
      {timerEnabled ? 'true' : 'false'}
      <input
        type="button"
        onClick={function startCountUp() {
          setTimerEnabled(true);
        }}
        value="COUNT UP"
      />
      <input
        type="button"
        onClick={function stopCountUp() {
          setTimerEnabled(false);
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
      <div>{message}</div>
      <input
        type="button"
        onClick={function onClick() {
          setMessage('Hello React!');
        }}
        value="PUSH!"
      />
      <input
        type="button"
        onClick={function onClick() {
          setMessage('');
        }}
        value="CLEAR!"
      />
    </MainTemplate>
  );
}
