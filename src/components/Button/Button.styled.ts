import styled from "styled-components";

import { motion } from "framer-motion";

export const Button = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 180px;
  cursor: pointer;
  font-size: 90px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 54%);
`;
