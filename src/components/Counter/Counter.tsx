import useCounter from "../../hooks/useCounter.ts";
import { CounterWrapper, CounterLabel } from "./Counter.styled.ts";
import { GOAL_TOTAL, ROUND_TOTAL } from "../../constants/constants.ts";

interface CounterProps {
  label: string;
  time: number;
}

function Counter({ label, time }: CounterProps) {
  const total = label === "round" ? ROUND_TOTAL : GOAL_TOTAL;
  const { count, counterTotal } = useCounter(total, time);

  return (
    <CounterWrapper>
      <CounterLabel>
        {count}/{counterTotal}
      </CounterLabel>
      <CounterLabel>{label}</CounterLabel>
    </CounterWrapper>
  );
}

export default Counter;
