import { route } from "rwsdk/router";
import { Home } from "@/app/pages/home";
import { LoginPage } from "@/app/pages/login";
import { SignupPage } from "@/app/pages/signup";
import { EmailVerificationPage } from "@/app/pages/signup/email-verification";

export const pageRoutes = [
  route("/", Home),
  route("/login", LoginPage),
  route("/signup", SignupPage),
  route("/signup/email-verification", EmailVerificationPage),
];
