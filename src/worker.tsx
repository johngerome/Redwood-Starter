import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/document";
import { setCommonHeaders } from "@/app/headers";
import { auth } from "@/lib/auth";
import { apiRoutes } from "@/routes/api-routes";
import { pageRoutes } from "@/routes/page-routes";
import { portalRoutes } from "@/routes/portal-routes";
import { NotFound } from "./app/pages/not-found";

export type AppContext = {
  user?: typeof auth.$Infer.Session.user | null;
  session?: typeof auth.$Infer.Session.session | null;
};

export interface Env {
  DB: D1Database;
}

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });
    ctx.user = session?.user ?? null;
    ctx.session = session?.session ?? null;
  },
  ...apiRoutes,
  render(Document, [...pageRoutes, ...portalRoutes, route("*", NotFound)]),
]);
