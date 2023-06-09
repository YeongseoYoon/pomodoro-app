import styled from "styled-components";
import { FontAwesomeIcon as ButtonIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import {
  TimerWrapper,
  TimerColonCard,
} from "../components/timer/Timer.styled.ts";
import TimerBox from "../components/timer/TimerBox.tsx";
import { Button } from "../components/button/Button.styled.ts";
import Counter from "../components/counter/Counter.tsx";
import useTimer from "../hooks/useTimer.ts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 70%;
`;

function Home() {
  const { time, toggleIsTimerPlaying, isTimerPlaying } = useTimer();
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
            <Button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={toggleIsTimerPlaying}
            >
              <ButtonIcon icon={!isTimerPlaying ? faPlay : faPause} />
            </Button>
          </TimerWrapper>
        </Container>
        <Container>
          <TimerWrapper>
            <Counter label="round" time={time} />
            <Counter label="goal" time={time} />
          </TimerWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
