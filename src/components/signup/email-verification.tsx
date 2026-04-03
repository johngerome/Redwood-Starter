"use client";

import { link } from "@/app/shared/links";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EmailVerificationProps extends React.ComponentProps<"div"> {
  email: string;
}

export function EmailVerification({
  email,
  className,
  ...props
}: EmailVerificationProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Verify your email</CardTitle>
          <CardDescription>
            An activation link has been sent to your email address:{" "}
            <strong>{email}</strong>. Please check your inbox and click on the
            link to complete the activation process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button nativeButton={false} render={<a href={link("/login")} />}>
            Go to login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
