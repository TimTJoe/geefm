import MuiBox from "@mui/material/Box";
import styled from "@emotion/styled";
import Player from "./Player";

const Container = styled(MuiBox)`
  border-radius: 17px;
  background-color: white;
  display: flex;
  height: unset;
`;

const Controls = () => {
  return (
    <Container>
      <Player />
    </Container>
  );
};

export default Controls;
