import type { AppContext } from "../src/worker";

declare module "rwsdk/worker" {
  interface DefaultAppContext extends AppContext {}

  // App is the type of the defineApp result in src/worker.tsx
  export type App = typeof import("../src/worker").app;
}
