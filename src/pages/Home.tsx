import { TimerBox, ControlButton, Counter } from "../components";
import { TimerColonCard } from "../components/timer/Timer.styled";
import { GOAL_TOTAL, ROUND_TOTAL } from "../constants/constants.ts";
import { useTimer, useCounter } from "../hooks";
import { Wrapper, Container, TimerWrapper } from "./Home.styled";

function Home() {
  const { time, toggleIsTimerPlaying, isTimerPlaying } = useTimer();
  const { count: goalCount, counterFn: goalCounter } = useCounter({
    total: GOAL_TOTAL,
  });
  const { count: roundCount } = useCounter({
    total: ROUND_TOTAL,
    time,
    callbackFn: goalCounter,
  });

  return (
    <>
      <Wrapper>
        <Container>
          <TimerWrapper>
            <TimerBox label="minute" time={time} />
            <TimerColonCard>:</TimerColonCard>
            <TimerBox label="second" time={time} />
          </TimerWrapper>
        </Container>
        <Container>
          <TimerWrapper>
            <ControlButton
              onClick={toggleIsTimerPlaying}
              isTimerPlaying={isTimerPlaying}
            />
          </TimerWrapper>
        </Container>
        <Container>
          <TimerWrapper>
            <Counter label="round" value={roundCount} />
            <Counter label="goal" value={goalCount} />
          </TimerWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
