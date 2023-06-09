import { useEffect, useState } from "react";

import { TIME } from "../constants/constants";

const useTimer = () => {
  const [time, setTime] = useState(TIME * 60);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  let timer: NodeJS.Timeout;

  const toggleIsTimerPlaying = () => {
    setIsTimerPlaying((prev) => !prev);
  };

  const resetTimer = () => {
    //setRounds((prev) => prev + 1);

    /*if (rounds === 3) {
      setRounds(0);
      setGoals((prev) => prev + 1);
    }
    if (goals === 11) {
      setGoals(0);
    }*/
    setTime(TIME * 60);
    setIsTimerPlaying(false);
    //
  };

  useEffect(() => {
    if (isTimerPlaying) {
      timer = setInterval(() => {
        if (time === 0) {
          resetTimer();
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
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
