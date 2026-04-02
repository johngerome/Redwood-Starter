"use client";

import { Button } from "@/components/ui/button";

export const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold tracking-tight">Oops!</h1>
    <h2 className="mt-4 text-3xl font-bold tracking-tight">
      Something went wrong
    </h2>
    <p className="mt-3 text-muted-foreground">
      The page you're looking for isn't found, we suggest you back to the
      Dashboard.
    </p>
    <Button
      className="mt-6"
      size="lg"
      nativeButton={false}
      render={<a href="/portal" />}
    >
      Back to Dashboard
    </Button>
  </div>
);
