import { CounterWrapper, CounterLabel } from "./Counter.styled.ts";
import { GOAL_TOTAL, ROUND_TOTAL } from "../../constants/constants.ts";

interface CounterProps {
  label: string;
  value: number;
}

function Counter({ label, value }: CounterProps) {
  const total = label === "round" ? ROUND_TOTAL : GOAL_TOTAL;

  return (
    <CounterWrapper>
      <CounterLabel>
        {value}/{total}
      </CounterLabel>
      <CounterLabel>{label.toUpperCase()}</CounterLabel>
    </CounterWrapper>
  );
}

export default Counter;
