# mf-vite-8-named-exports

Minimal reproduction for three bugs in `@module-federation/vite@1.15.5` with Vite 8.

## Setup

- `vite-host` — host app, port `5001`
- `vite-remote` — remote app, port `5002`, exposes `./App`, `./App2`, `./utils`
- Both use React 19, TypeScript, `@module-federation/vite@1.15.5`

```
pnpm install:deps
```

## Bug 1: Broken build — remoteEntry references non-existent files

**Package:** `@module-federation/vite@1.15.5`  
**Affects:** remote app build output

After `vite build` in `vite-host`, the generated `remoteEntry.js` references chunk files that do not exist in the output directory. Loading the remote in a host results in a network 404 for every exposed module chunk.

In dev mode the problem is different but related: instead of real module imports from the remote, the host receives empty proxy objects — exposed components and utilities are effectively `undefined` at runtime.

**Steps to reproduce:**

```bash
pnpm build
pnpm preview
# inspect dist/remoteEntry.js — references missing chunk filenames
```

**Expected:** `remoteEntry.js` references actual emitted chunks.  
**Actual:** references point to files absent from `dist/`.

## Bug 2: Build crashes when `input` is an HTML file

**Package:** `@module-federation/vite@1.15.5`  
**Affects:** host app build

The host uses a named HTML entry in `rolldownOptions.input`:

```ts
// vite-host/vite.config.ts
build: {
  rolldownOptions: {
    input: {
      main: "indexProd.html",
    },
  },
},
```

Running `vite build` in `vite-host` throws an error caused by the MF plugin. Removing the `federation()` plugin from the config makes the build succeed — confirming the plugin is the root cause.

**Steps to reproduce:**

```bash
pnpm build
```

**Expected:** build completes successfully.  
**Actual:** build crashes with an error from the MF plugin when processing the HTML input entry.

## Bug 3: `filename` with hash pattern — remoteEntry file not emitted

**Package:** `@module-federation/vite@1.15.5`  
**Affects:** remote app build output

When `filename` in the `federation()` config contains a hash pattern, the file is never written to `dist/`:

```ts
// vite-remote/vite.config.ts
federation({
  name: "@test/remote",
  filename: "remoteEntry-[hash].js",
  // ...
})
```

Two failure modes depending on whether `varFileName` is set:

- **`varFileName` specified** — build completes but `remoteEntry-[hash].js` is absent; the manifest and internal references point to the `varFileName` value instead.
- **`varFileName` not specified** — build completes with no `remoteEntry` file emitted at all; the remote is completely unreachable.

Removing the hash placeholder (`filename: "remoteEntry.js"`) restores normal behavior.

**Steps to reproduce:**

```bash
pnpm build
# no remoteEntry-*.js file in dist/
```

**Expected:** `dist/remoteEntry-[hash].js` emitted and referenced correctly.  
**Actual:** file absent from `dist/`; references broken or missing entirely.
