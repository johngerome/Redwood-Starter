"use client";

import { useState } from "react";

export const Welcome = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Welcome to RedwoodSDK
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          You've just installed the starter project. Here's what to do next.
        </p>
      </header>

      <main className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Next steps</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>
              Read the{" "}
              <a
                href="https://docs.rwsdk.com/getting-started/quick-start/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Quick Start
              </a>{" "}
              to learn the basics.
            </li>
            <li>
              Explore React Server Components and Server Functions in the{" "}
              <a
                href="https://docs.rwsdk.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Docs
              </a>
              .
            </li>
            <li>
              Join the community to ask questions and share what you're
              building.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Deploy to Cloudflare
          </h2>
          <p className="mt-2 text-muted-foreground">
            RedwoodSDK runs on Cloudflare Workers. Here's the quickest way to
            deploy.
          </p>
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-muted px-4 py-3 font-mono text-sm">
            <span className="text-muted-foreground">$</span>
            <code className="flex-1 text-foreground">pnpm release</code>
            <Copy textToCopy="pnpm release" />
          </div>
          <p className="mt-4 text-muted-foreground">
            Need more detail? Read the{" "}
            <a
              href="https://docs.rwsdk.com/core/hosting/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Cloudflare deployment guide
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

const Copy = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};
