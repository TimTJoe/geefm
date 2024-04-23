import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProvideDialog } from "@provider/ProvideDialog.tsx";
import { ProvidePlayer } from "@provider/ProvidePlayer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvidePlayer>
      <ProvideDialog>
        <App />
      </ProvideDialog>
    </ProvidePlayer>
  </React.StrictMode>
);
