import { useEffect, useState } from "react";

const useTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [goals, setGoals] = useState(0);

  const handleClick = () => {
    setIsTimerPlaying((prev) => !prev);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setRounds((prev) => prev + 1);

    if (rounds === 3) {
      setRounds(0);
      setGoals((prev) => prev + 1);
    }
    if (goals === 11) {
      setGoals(0);
    }

    setIsTimerPlaying(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTimerPlaying) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          resetTimer();
        } else {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerPlaying, minutes, seconds, rounds]);

  return {
    minutes,
    seconds,
    isTimerPlaying,
    rounds,
    goals,
    handleClick,
  };
};

export default useTimer;
