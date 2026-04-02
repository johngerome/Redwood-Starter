import { layout, prefix, route } from "rwsdk/router";
import { PortalLayout } from "@/app/layouts/portal-layout";
import { PortalDashboardPage } from "@/app/pages/portal/dashboard";
import { NotFound } from "@/app/pages/portal/not-found";
import { requireAuth } from "@/lib/middleware";

export const portalRoutes = prefix("/portal", [
  requireAuth,
  layout(PortalLayout, [route("/", PortalDashboardPage), route("*", NotFound)]),
]);
