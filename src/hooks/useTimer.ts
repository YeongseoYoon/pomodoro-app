import { useEffect, useState } from "react";

import { TIME, MILLI_SECOND } from "../constants/constants";

const useTimer = () => {
  const [time, setTime] = useState(TIME * 60);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  let timer: NodeJS.Timeout;

  const toggleIsTimerPlaying = () => {
    setIsTimerPlaying((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(TIME * 60);
    setIsTimerPlaying(false);
  };

  useEffect(() => {
    if (isTimerPlaying) {
      timer = setInterval(() => {
        if (time === 0) {
          resetTimer();
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, MILLI_SECOND);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isTimerPlaying, time]);

  return {
    time,
    toggleIsTimerPlaying,
    isTimerPlaying,
  };
};

export default useTimer;
