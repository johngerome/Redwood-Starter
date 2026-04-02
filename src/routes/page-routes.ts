import { route } from "rwsdk/router";
import { Home } from "@/app/pages/home";
import { LoginPage } from "@/app/pages/login";
import { SignupPage } from "@/app/pages/signup";

export const pageRoutes = [
  route("/", Home),
  route("/login", LoginPage),
  route("/signup", SignupPage),
];
