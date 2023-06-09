import { useEffect, useState } from "react";

import { MILLI_SECOND, TIME } from "../../constants/constants";
import { TimerCard } from "./Timer.styled";
import { formatTimeDigits } from "../../utils/formatTimeDigits";

interface TimerBoxProps {
  label: string;
  isTimerPlaying: boolean;
}

function TimerBox({ label, isTimerPlaying }: TimerBoxProps) {
  const [time, setTime] = useState(TIME * 60);
  const minutes = formatTimeDigits(Math.floor(time / 60));
  const seconds = formatTimeDigits(time % 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, MILLI_SECOND);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <TimerCard
        key={label === "minute" ? minutes : seconds}
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1.0, opacity: 1.0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      >
        {label === "minute" ? minutes : seconds}
      </TimerCard>
    </>
  );
}

export default TimerBox;
