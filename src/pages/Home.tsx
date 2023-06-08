import styled from "styled-components";

import {
  TimerWrapper,
  TimerBox,
  TimerColonBox,
} from "../components/Timer/Timer.styled.ts";

import { Button } from "../components/Button/Button.styled.ts";

import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 70%;
`;

function Home() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isButtonToggled, setIsButtonToggled] = useState(false);

  const handleClick = () => {
    setIsButtonToggled((prev) => !prev);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setMinutes(1);
          setSeconds(0);
          clearInterval(timer);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);

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
              {isButtonToggled ? <LogoutButton /> : <LogoutButton />}
            </Button>
          </TimerWrapper>
        </Container>
        // round/goal
      </Wrapper>
    </>
  );
}

export default Home;
