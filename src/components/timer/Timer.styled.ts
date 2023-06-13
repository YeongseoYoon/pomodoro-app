import { motion } from "framer-motion";
import styled from "styled-components";

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
