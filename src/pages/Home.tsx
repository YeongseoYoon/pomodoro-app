import styled from "styled-components";
import { FontAwesomeIcon as ButtonIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import {
  TimerWrapper,
  TimerBox,
  TimerColonBox,
} from "../components/Timer/Timer.styled.ts";
import { Button } from "../components/Button/Button.styled.ts";
import { Counter, CounterLabel } from "../components/Counter/Counter.styled.ts";
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
  const { minutes, seconds, isTimerPlaying, rounds, goals, handleClick } =
    useTimer();
  return (
    <>
      <Wrapper>
        <Container>
          <TimerWrapper>
            <TimerBox>{minutes < 10 ? `0${minutes}` : minutes}</TimerBox>
            <TimerColonBox>:</TimerColonBox>
            <TimerBox>{seconds < 10 ? `0${seconds}` : seconds}</TimerBox>
          </TimerWrapper>
        </Container>
        <Container>
          <TimerWrapper>
            <Button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleClick}
            >
              <ButtonIcon icon={!isTimerPlaying ? faPlay : faPause} />
            </Button>
          </TimerWrapper>
        </Container>
        <Container>
          <TimerWrapper>
            <Counter>
              <CounterLabel>{rounds}/4</CounterLabel>
              <CounterLabel>ROUND</CounterLabel>
            </Counter>
            <Counter>
              <CounterLabel>{goals}/12</CounterLabel>
              <CounterLabel>GOAL</CounterLabel>
            </Counter>
          </TimerWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
