import { useEffect, useState } from "react";

interface CounterProp {
  total: number;
  time?: number;
  callbackFn?: () => void;
}

const useCounter = ({ total, time, callbackFn }: CounterProp) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (time === 0) {
      counterFn();
    }
  }, [time]);

  const counterFn = () => {
    const next = (count + 1) % total;
    if (next === 0) {
      callbackFn?.();
    }
    setCount(next);
  };
  return { count, counterFn };
};

export default useCounter;
