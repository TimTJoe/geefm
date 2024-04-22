import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import { styled, useTheme } from "@mui/material/styles";


const PlayButton = () => {
     const theme = useTheme();
    const [paused, setPaused] = React.useState(false);
    const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
    const lightIconColor =
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.4)"
        : "rgba(0,0,0,0.4)";
    

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: -1,
      }}
    >
      <IconButton aria-label="previous song">
        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
      </IconButton>
      <IconButton
        aria-label={paused ? "play" : "pause"}
        onClick={() => setPaused(!paused)}
      >
        {paused ? (
          <PlayArrowRounded
            sx={{ fontSize: "3rem" }}
            htmlColor={mainIconColor}
          />
        ) : (
          <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
        )}
      </IconButton>
      <IconButton aria-label="next song">
        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
      </IconButton>
    </Box>
  );
};

export default PlayButton;
