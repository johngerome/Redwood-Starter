# RedwoodSDK Starter

## Tech Stack

| Category  | Tool                                                                         | Description                                 |
| --------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| Framework | [RedwoodSDK](https://docs.rwsdk.com/)                                        | Full-stack framework for Cloudflare Workers |
| ORM       | [Drizzle ORM](https://orm.drizzle.team/)                                     | TypeScript ORM with migrations              |
| Auth      | [Better Auth](https://www.better-auth.com/)                                  | Authentication library                      |
| UI        | [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)        | Accessible component primitives             |
| Styling   | [Tailwind CSS](https://tailwindcss.com/)                                     | Utility-first CSS framework                 |
| Forms     | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)    | Form handling and validation                |
| Icons     | [Phosphor Icons](https://phosphoricons.com/) + [Lucide](https://lucide.dev/) | Icon libraries                              |
| Email     | [Resend](https://resend.com/)                                                | Transactional email service                 |
| Queues    | [Cloudflare Queues](https://developers.cloudflare.com/queues/)               | Background message processing               |
| Security  | [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)         | Bot protection (CAPTCHA alternative)        |
| Linting   | [Biome](https://biomejs.dev/)                                                | Linter and formatter                        |
| CI/CD     | [GitHub Actions](https://github.com/features/actions)                        | Automated deployment pipeline               |

## Installation & Setup

1. Install dependencies:

   ```shell
   pnpm install
   ```

2. Set up pre-commit hooks:

   ```shell
   pnpm run prepare
   ```

3. Copy `.env.example` to `.env` and update the values:

   ```shell
   cp .env.example .env
   ```

4. Generate and apply database migrations:

   ```shell
   pnpm migrate:new
   pnpm migrate:dev
   ```

5. Start the dev server:

   ```shell
   pnpm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

## Pre-deployment Setup

> [!IMPORTANT]
> You need a [Cloudflare](https://dash.cloudflare.com/) account and a [GitHub](https://github.com/) account before proceeding.

### 1. Log in to Cloudflare

```shell
npx wrangler login
```

### 2. Create a D1 Database

```shell
npx wrangler d1 create <your-database-name>
```

> [!NOTE]
> If prompted "Would you like Wrangler to add it on your behalf?", select **No**. Manually copy the `database_id` from the output and update `wrangler.jsonc`:

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "rwstarter",
    "database_id": "<your-database-id>",
    "migrations_dir": "drizzle",
  },
]
```

### 3. Create a Queue

```shell
npx wrangler queues create email-queue
```

### 4. Configure GitHub Environment (for CI/CD)

> [!NOTE]
> GitHub is the source of truth for all production secrets and variables. Go to your repo **Settings → Environments**, create a **"Production"** environment, then add the following:

#### Secrets

| Secret                 | Description                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN` | [Create a token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) using the **"Edit Cloudflare Workers"** template, then add **Account → Cloudflare D1 → Edit** permission |
| `TURNSTILE_SECRET_KEY` | Go to **Application Security → Turnstile** and copy the **Secret Key**                                                                                                                               |
| `BETTER_AUTH_SECRET`   | Auth secret key (`openssl rand -base64 32`)                                                                                                                                                          |
| `RESEND_API_KEY`       | [Create an API key](https://resend.com/api-keys) in your Resend dashboard                                                                                                                           |

#### Variables

| Variable                  | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_ACCOUNT_ID`   | Select your account → **Workers & Pages**, copy the **Account ID** from the right sidebar    |
| `BETTER_AUTH_URL`         | Production URL (e.g. `https://your-domain.com`)                                              |
| `VITE_TURNSTILE_SITE_KEY` | Go to **Application Security → Turnstile** and copy the **Site Key**                         |
| `EMAIL_FROM`              | Sender email address (e.g. `noreply@your-domain.com`), must be a [verified domain in Resend](https://resend.com/docs/dashboard/domains/introduction) |

## Deployment

### CI/CD Pipeline

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`).

## Further Reading

- [RedwoodSDK Documentation](https://docs.rwsdk.com/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)
