import { Toolbar, Typography } from "@mui/material";
import { Button, Image, MenuBar } from "./styled/Menu.styled";

import logoRound from "@assets/logo_round.png";

const Menu = () => {
  return (
    <MenuBar elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" color={"primary"}>
          <Image src={logoRound} />
        </Typography>
        <Button  sx={{ ml: "auto" }}>
          About Us
        </Button>
      </Toolbar>
    </MenuBar>
  );
};

export default Menu;
