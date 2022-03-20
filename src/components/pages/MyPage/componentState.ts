import React from 'react';
import { MyPageProps } from '.';

export const useComponentState = (props: MyPageProps) => {
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
  return { message, setMessage, timerEnabled, setTimerEnabled };
};
