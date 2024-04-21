import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
import MuiButton from "@mui/material/Button";

export const MenuBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.589);
  backdrop-filter: blur(40px);
`;

export const Image = styled.img`
  max-width: 70px;
`;

export const Button = styled(MuiButton)`
  border-radius: 17px;
  text-transform: capitalize;
  font-weight: bolder;
`;
