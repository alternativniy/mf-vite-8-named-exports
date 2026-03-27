import R from "react";
import RD from "react-dom/client";

import App from "@namespace/viteViteRemote";
import AgGridDemo from "@namespace/viteViteRemote/AgGridDemo";
import App1 from "@namespace/viteViteRemote/App1";
import App2 from "@namespace/viteViteRemote/App2";
import EmotionDemo from "@namespace/viteViteRemote/EmotionDemo";
import MuiDemo from "@namespace/viteViteRemote/MuiDemo";
import StyledDemo from "@namespace/viteViteRemote/StyledDemo";

import * as routesRemote from "@namespace/viteViteRemote/routes";

console.log("Share React", R, RD);
console.log("NAMED EXPORTS NOT WORKING", routesRemote);

export default function HostApp() {
  return (
    <div style={{ background: "lightgray" }}>
      <p>
        Vite React (v {R.version}) app running from Host in{" "}
        <i> {import.meta.env.DEV ? " Dev " : " prod "} mode </i>
      </p>

      <hr />

      <h2>Vite Remote Default App</h2>
      <App />

      <h2>Vite Remote App1</h2>
      <App1 />

      <h2>Vite Remote App2</h2>
      <App2 />

      <h2>Emotion Styled Components Demo</h2>
      <EmotionDemo />

      <h2>Vite Remote MuiDemo</h2>
      <MuiDemo />

      <h2>Styled Components Demo</h2>
      <StyledDemo />

      <h2>Vite Remote AgGridDemo</h2>
      <AgGridDemo />

      <hr />
    </div>
  );
}
