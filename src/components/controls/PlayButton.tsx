import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { useTheme } from "@mui/material/styles";
import { usePlayer } from "@provider/ProvidePlayer";

const PlayButton = () => {
  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const { playing, handlePlay } = usePlayer();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: -1,
      }}
    >
      <IconButton aria-label={playing ? "play" : "pause"} onClick={handlePlay}>
        {playing ? (
          <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
        ) : (
          <PlayArrowRounded
            sx={{ fontSize: "3rem" }}
            htmlColor={mainIconColor}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default PlayButton;
