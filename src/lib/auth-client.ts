import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";

export const authClient = createAuthClient({
  basePath: "/api/auth",
  plugins: [inferAdditionalFields<typeof auth>()],
});
