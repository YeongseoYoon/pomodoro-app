import styled from "styled-components";

import { TimerWrapper, TimerBox } from "../components/Timer/Timer.styled.ts";

import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;

function Home() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setMinutes(1);
          setSeconds(0);
          clearInterval(countdown);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <>
      <Wrapper>
        //타이머
        <Container>
          <TimerWrapper>
            <TimerBox>{minutes < 10 ? `0${minutes}` : minutes}</TimerBox>
            <TimerBox>{seconds < 10 ? `0${seconds}` : seconds}</TimerBox>
          </TimerWrapper>
        </Container>
        //버튼
        <Container></Container>
        // round/goal
      </Wrapper>
    </>
  );
}

export default Home;
