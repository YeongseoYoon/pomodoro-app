import { useEffect, useState } from "react";

import { TimerWrapper, TimerBox } from "./Timer.styled";

function Timer() {
  const [minutes, setMinutes] = useState(parseInt(mm, 10));
  const [seconds, setSeconds] = useState(parseInt(ss, 10));

  useEffect;

  return (
    <TimerWrapper>
      <TimerBox>{minutes < 10 ? `0${minutes}` : minutes}</TimerBox>
      <TimerBox>{seconds < 10 ? `0${seconds}` : seconds}</TimerBox>
    </TimerWrapper>
  );
}
export default Timer;
