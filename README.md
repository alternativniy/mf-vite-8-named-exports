# mf-vite-8-named-exports

A minimal reproduction repository for a bug with named exports in Module Federation on Vite 8.

## The Bug

When a remote module exposes a file with named exports (e.g. `routes.jsx` exports `routes` and `getRoutes`), the host application cannot consume them correctly via namespace import:

```js
import * as routesRemote from "@namespace/viteViteRemote/routes";
```

The imported object does not contain the expected named exports. The console log labeled `"NAMED EXPORTS NOT WORKING"` in the host's `App.jsx` demonstrates this.

## Setup

This is a pnpm workspace with two applications:

| Package | Port | Role |
| --- | --- | --- |
| `vite-host` | 5175 | Host — consumes remote modules |
| `vite-remote` | 5176 | Remote — exposes components and `routes.jsx` |

## Steps to Reproduce

1. Install dependencies:

   ```sh
   pnpm run install:deps
   ```

2. Start both applications in parallel:

   ```sh
   pnpm run dev
   ```

3. Open the host app at `http://localhost:5175` and check the browser DevTools console.

4. Find the log entry that starts with `"NAMED EXPORTS NOT WORKING"` — it will show the value of `import * as routesRemote from "@namespace/viteViteRemote/routes"`, which should contain `{ routes, getRoutes }` but does not.

## Expected Behavior

`routesRemote` should be an object containing all named exports from `routes.jsx`:

```js
{
  routes: [...],
  getRoutes: [Function]
}
```

## Actual Behavior

`routesRemote` does not contain the named exports as expected.
