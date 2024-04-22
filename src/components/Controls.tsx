import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Duration from "./controls/Duration";
import PlayButton from "./controls/PlayButton";
import Volume from "./controls/Volume";

const Container = styled(Stack)`
  border: auto;
`;

const Controls = () => {
  return (
    <Container>
      <Duration />
      <PlayButton />
      <Volume />
    </Container>
  );
};

export default Controls;
