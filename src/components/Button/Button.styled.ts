import styled from "styled-components";

import { motion } from "framer-motion";

export const Button = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  cursor: pointer;
  font-size: 100px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 54%);
`;
