import styled from "@emotion/styled";
import { BoxProps, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

export const BackgroundStyled = styled(Box)<BoxProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  overflow: hidden;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(80px);
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;

const ShapeOneAnim = keyframes`
        0%{
        right:0; 
        bottom:20%;
        width:300px;
        height:300px;
    }
    50%{
        right:200px; 
        bottom:100px;
        border-radius: 21% 79% 18% 82% / 82% 30% 70% 18%;
        width:500px;
        height:500px;
    }

    100%{
        right:0; 
        bottom:-20%;
        width:500px;
        height:500px;
    }
`;

let ShapeTwoAnim = keyframes`
    0%{
        left:0; 
        top:-20%;
        width:300px;
        height:300px;
    }
    50%{
        left:500px; 
        top:100px;
        border-radius: 21% 79% 18% 82% / 82% 30% 70% 18%;
        width:500px;
        height:500px;
    }

    100%{
        left:0; 
        top:20%;
        width:400px;
        height:400px;
    }

`;

const Shape = styled(Box)<BoxProps>`
  position: absolute;
  z-index: -2;
`;

export const ShapeOne = styled(Shape)<BoxProps>`
  height: 400px;
  width: 400px;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgb(1, 22, 10) 0%,
    rgba(120, 230, 116, 0.541) 35%,
    rgb(13, 242, 5) 100%
  );
  animation: ${ShapeOneAnim} 10s ease 0s infinite alternate;
`;

export const ShapeTwo = styled(Shape)<BoxProps>`
  height: 400px;
  width: 400px;
  background: rgb(66, 1, 144);
  background: linear-gradient(90deg, #6201d8 0%, #9a57e773 35%, #bb0624 100%);
  animation: ${ShapeTwoAnim} 10s ease 0s infinite alternate;
  transform: rotate(45deg);
  border-radius: 79% 21% 70% 30% / 30% 30% 70% 70%;
`;
