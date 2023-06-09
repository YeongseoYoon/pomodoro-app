import { motion } from "framer-motion";
import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px 0px;
`;

export const TimerCard = styled(motion.div)`
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

export const TimerColonCard = styled(TimerCard)`
  width: auto;
  border-radius: 0px;
  color: white;
  background-color: tomato;
`;
