import React, {
  createContext,
  useContext,
} from "react";

interface IProvideDialog {
  children: React.ReactNode;
}

const withDialog = createContext<any | undefined>(undefined);

const ProvideDialog: React.FC<IProvideDialog> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const contextValues = {
    open,
    openDialog,
    closeDialog,
  };

  return (
    <withDialog.Provider value={contextValues}>{children}</withDialog.Provider>
  );
};

const useDialog = () => {
  const context = useContext(withDialog);
  if (!context) {
    console.error("useDialog must be used in ProvideDialog context provider");
  }
  return context;
};

export { ProvideDialog, useDialog };
