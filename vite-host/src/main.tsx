import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppRemote from "@test/remote/App";
import AppRemote2 from "@test/remote/App2";
import * as utils from "@test/remote/utils";

console.log(AppRemote, AppRemote2, utils);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App />
      <AppRemote />
      <AppRemote2 />
    </>
  </StrictMode>,
);
