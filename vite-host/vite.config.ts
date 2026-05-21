import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "host",
      filename: "remoteEntry.js",
      dts: false,
      remotes: {
        "@test/remote": "http://localhost:5002/mf-manifest.json",
      },
      ignoreOrigin: true,
      shareStrategy: "version-first",
      hostInitInjectLocation: "entry",
      exposes: {},
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
  server: {
    port: 5001,
    cors: true,
  },
  preview: {
    port: 5001,
    cors: true,
  },
  build: {
    rolldownOptions: {
      input: {
        main: "indexProd.html",
      },
    },
  },
});
