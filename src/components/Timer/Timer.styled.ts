import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  width: 200px;
  height: 300px;

  font-size: 100px;
  color: tomato;
  background-color: white;
  border-radius: 10px;
`;

export const TimerColonBox = styled(TimerBox)`
  width: auto;
  border-radius: 0px;
  color: white;
  background-color: tomato;
`;
