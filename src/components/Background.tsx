import React from "react";
import {
  BackgroundStyled,
  ShapeOne,
  ShapeTwo,
} from "./styled/background.styled";

type TBackground = {
  children: React.JSX.Element | string;
};

const Background = ({ children }: TBackground): React.JSX.Element => {
  return (
    <BackgroundStyled>
      <ShapeOne />
      <ShapeTwo />
      {children}
    </BackgroundStyled>
  );
};

export default Background;
