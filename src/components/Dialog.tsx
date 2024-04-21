import * as React from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "./styled/button.styled";
import { useDialog } from "../Providers/ProvideDialog";


export const Dialog = () => {
  const { open, closeDialog } = useDialog();
  return (
    <React.Fragment>
      <MuiDialog open={open} onClose={closeDialog}>
        <DialogTitle>{"Gee Broadcasting Corporation"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Founded by Cllr. Kunkunyon Wleh Teh, Gee Broadcasting Corporation
            informs and educates residents of southeastern Liberia. Their focus
            areas include conflict resolution, rural development, and promoting
            gender equality and community involvement.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disableElevation onClick={closeDialog}>
            Contact
          </Button>
          <Button color="error" onClick={closeDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </MuiDialog>
    </React.Fragment>
  );
};

export default Dialog;
