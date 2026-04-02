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
| Linting   | [Biome](https://biomejs.dev/)                                                | Linter and formatter                        |
| CI/CD     | [GitHub Actions](https://github.com/features/actions)                        | Automated deployment pipeline               |

## Running the dev server

```shell
pnpm run dev
```

Point your browser to the URL displayed in the terminal (e.g. `http://localhost:5173/`). You should see the RedwoodSDK welcome page in your browser.

## Deployment

### CI/CD Pipeline

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which runs the following steps in order:

1. **Install** — `pnpm install --frozen-lockfile`
2. **Lint** — `pnpm run lint`
3. **Type Check** — `pnpm run check`
4. **Migrate** — `pnpm run migrate:prod` (applies D1 migrations to production)
5. **Build** — `pnpm run build`
6. **Deploy** — `wrangler deploy` (deploys to Cloudflare Workers)

### Manual Deployment

> [!CAUTION]
> Manual deployment is not recommended. Always prefer the CI/CD pipeline to ensure consistent and safe deployments.

```shell
pnpm run migrate:prod
pnpm run release
```

### Cloudflare API Token Setup

> [!NOTE]
> The `CLOUDFLARE_API_TOKEN` secret is required for CI deployment.

To create one:

1. Go to [Cloudflare Dashboard → API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use the **"Edit Cloudflare Workers"** template
4. Add the following permission: **Account → Cloudflare D1 → Edit**
5. Save the token

Then add it to your GitHub repository:

1. Go to **Settings → Environments → Production**
2. Add a secret named `CLOUDFLARE_API_TOKEN` with the token value

## Further Reading

- [RedwoodSDK Documentation](https://docs.rwsdk.com/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)
