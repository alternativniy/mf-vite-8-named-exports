import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "@test/remote",
      filename: "remoteEntry.js",
      hostInitInjectLocation: "entry",
      dts: false,
      remotes: {},
      exposes: {
        "./App": "./src/App",
        "./App2": "./src/App2",
        "./utils": "./src/utils",
      },
      manifest: true,
      shared: {
        react: {
          singleton: true,
          requiredVersion: "19.2.6",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "19.2.6",
        },
        "react/": {
          singleton: true,
          requiredVersion: "19.2.6",
        },
        "react-dom/": {
          singleton: true,
          requiredVersion: "19.2.6",
        },
      },
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  oxc: {
    target: "esnext",
  },
  server: {
    port: 5002,
    cors: true,
  },
  preview: {
    port: 5002,
    cors: true,
  },
  build: {
    target: "esnext",
  },
});
