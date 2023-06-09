import { useState } from "react";

function useCounter(limit: number, callbackFn?: () => void) {
  const [count, setCount] = useState(0);
}

export default useCounter;
