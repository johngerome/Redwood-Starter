import { route } from "rwsdk/router";
import { auth } from "@/lib/auth";

export const apiRoutes = [
  route("/api/auth/*", ({ request }) => {
    return auth.handler(request);
  }),
];
