import { Toolbar, Typography } from "@mui/material";
import { Button, Image, MenuBar } from "./styled/Menu.styled";
import logoRound from "@assets/logo_round.png";
import { useDialog } from "../Providers/ProvideDialog";
import Dialog from "./Dialog";

const Menu = () => {
  const {openDialog} = useDialog()
  return (
    <MenuBar elevation={0} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" color={"primary"}>
          <Image src={logoRound} />
        </Typography>
        <Button onClick={openDialog} sx={{ ml: "auto" }}>
          About Us
        </Button>
        <Dialog />
      </Toolbar>
    </MenuBar>
  );
};

export default Menu;
