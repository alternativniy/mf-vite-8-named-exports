
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "ag-grid-community": async () => {
          let pkg = await import("__mf__virtual/viteViteHost__prebuild__ag_mf_2_grid_mf_2_community__prebuild__.js");
            return pkg;
        }
      ,
        "ag-grid-react": async () => {
          let pkg = await import("__mf__virtual/viteViteHost__prebuild__ag_mf_2_grid_mf_2_react__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/viteViteHost__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/viteViteHost__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "vue": async () => {
          let pkg = await import("__mf__virtual/viteViteHost__prebuild__vue__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "ag-grid-community": {
            name: "ag-grid-community",
            version: "35.2.0",
            scope: ["default"],
            loaded: false,
            from: "viteViteHost",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"ag-grid-community"}' must be provided by host`);
              }
              usedShared["ag-grid-community"].loaded = true
              const {"ag-grid-community": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "ag-grid-community" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^35.2.0",
              
            }
          }
        ,
          "ag-grid-react": {
            name: "ag-grid-react",
            version: "35.2.0",
            scope: ["default"],
            loaded: false,
            from: "viteViteHost",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"ag-grid-react"}' must be provided by host`);
              }
              usedShared["ag-grid-react"].loaded = true
              const {"ag-grid-react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "ag-grid-react" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^35.2.0",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "viteViteHost",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.4",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "viteViteHost",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "react-dom" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.4",
              
            }
          }
        ,
          "vue": {
            name: "vue",
            version: "3.5.31",
            scope: ["default"],
            loaded: false,
            from: "viteViteHost",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"vue"}' must be provided by host`);
              }
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "vue" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.5.31",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "http://localhost:5176/testbase/mf-manifest.json",
                  name: "@namespace/viteViteRemote",
                  type: "var",
                  entry: "http://localhost:5176/testbase/mf-manifest.json",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      