import styled from "@emotion/styled";
import React from "react";
import { Stack } from "@mui/material";

const Wrapper = styled(Stack)`
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  margin: 0 auto;
  padding: 17px;
`;

interface IContainer {
  children: React.ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <Wrapper maxWidth="sm" spacing={2}>{children}</Wrapper>;
};

export default Container;
