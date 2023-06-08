import styled from "styled-components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon as ButtonIcon } from "@fortawesome/react-fontawesome";

import {
  TimerWrapper,
  TimerBox,
  TimerColonBox,
} from "../components/Timer/Timer.styled.ts";
import { Button } from "../components/Button/Button.styled.ts";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 70%;
`;

function Home() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);

  const handleClick = () => {
    setIsTimerPlaying((prev) => !prev);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTimerPlaying) {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setMinutes(2);
            setSeconds(0);
            setIsTimerPlaying(false);
            clearInterval(timer);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds, isTimerPlaying]);

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
      </Wrapper>
    </>
  );
}

export default Home;
