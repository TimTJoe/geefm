import MuiBox from "@mui/material/Box";
import styled from "@emotion/styled";
const url = import.meta.env.VITE_STREAM_URL_TEST;

import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import {
  PauseCircle,
  PlayArrow,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import { useState } from "react";

import ReactPlayer from "react-player";

const Container = styled(MuiBox)`
  border-radius: 50px;
  background-color: white;
  height: unset;
  padding: 12px;
  position: absolute;
  bottom: 12px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  min-width: 343px;
`;

const PauseButton = styled(IconButton)``;
const PlayButton = styled(IconButton)``;
const VolUp = styled(IconButton)``;
const VolDown = styled(IconButton)``;

const Player = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [state, setState] = useState({
    volume: 0.8,
    duration: 0,
  });

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolume = (event: Event, newValue: number | number[]) => {
    setState({ ...state, volume: newValue as number });
  };

  return (
    <>
      <ReactPlayer
        style={{ display: "none" }}
        url={url}
        playing={playing}
        volume={state.volume}
        controls
      />
      <Container>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {playing ? (
            <PauseButton onClick={handlePlayPause} size="large">
              <PauseCircle fontSize="large" />
            </PauseButton>
          ) : (
            <PlayButton onClick={handlePlayPause} size="large">
              <PlayArrow fontSize="large" />
            </PlayButton>
          )}

          <Typography variant="body1">duration</Typography>

          <Box sx={{ width: 200 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <VolumeDown />
              <Slider
                aria-label="Volume"
                valueLabelDisplay="auto"
                value={typeof state.volume === "number" ? state.volume : 0}
                onChange={handleVolume}
                min={0}
                max={1}
              />
              <VolumeUp />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Player;
