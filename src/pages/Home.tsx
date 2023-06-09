import styled from "styled-components";
import { FontAwesomeIcon as ButtonIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import {
  TimerWrapper,
  TimerColonCard,
} from "../components/Timer/Timer.styled.ts";
import TimerBox from "../components/Timer/TimerBox.tsx";
import { Button } from "../components/Button/Button.styled.ts";
import { Counter, CounterLabel } from "../components/Counter/Counter.styled.ts";
import { GOAL_LIMIT, ROUND_LIMIT } from "../constants/constants.ts";
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
            <Counter>
              <CounterLabel>0/{ROUND_LIMIT}</CounterLabel>
              <CounterLabel>ROUND</CounterLabel>
            </Counter>
            <Counter>
              <CounterLabel>0/{GOAL_LIMIT}</CounterLabel>
              <CounterLabel>GOAL</CounterLabel>
            </Counter>
          </TimerWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
