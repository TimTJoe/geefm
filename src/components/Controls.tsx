import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import Duration from "./controls/Duration";
import PlayButton from "./controls/PlayButton";
import Volume from "./controls/Volume";
import ReactPlayer from "react-player";
import { usePlayer } from "../providers/ProvidePlayer";

const Container = styled(Stack)`
  margin-top: auto;
`;

const Controls = () => {
  const { url, playing, handleDuration, handleProgress } = usePlayer();
  return (
    <Container>
      <Duration />
      <Container direction="row" spacing={3}>
        <PlayButton />
        <Volume />
      </Container>
      <ReactPlayer
        playing={playing}
        url={url}
        onDuration={handleDuration}
        onProgress={handleProgress}
        style={{ display: "none" }}
      />
    </Container>
  );
};

export default Controls;
