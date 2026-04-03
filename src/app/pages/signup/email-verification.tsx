import type { RequestInfo } from "rwsdk/worker";
import { EmailVerification } from "@/components/signup/email-verification";

export function EmailVerificationPage({ request }: RequestInfo) {
  const email = new URL(request.url).searchParams.get("email") ?? "";
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-secondary">
      <div className="w-full max-w-md">
        <EmailVerification email={email} />
      </div>
    </div>
  );
}
