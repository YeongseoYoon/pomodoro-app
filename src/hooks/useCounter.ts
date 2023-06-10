import { useEffect, useState } from "react";

const useCounter = (total: number, time: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (time === 0) {
      setCount((prev) => prev + 1);
    }
  }, [time]);

  useEffect(() => {
    if (count !== 0 && count % total === 0) {
      setCount(0);
    }
  }, [count, total]);

  return { count, counterTotal: total };
};

export default useCounter;
