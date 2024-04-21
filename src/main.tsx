import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProvideDialog } from "./Providers/ProvideDialog.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvideDialog>
      <App />
    </ProvideDialog>
  </React.StrictMode>
);
