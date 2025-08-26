# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, server actions.
- `components/` and `components/ui/`: Reusable React components (export components in PascalCase).
- `lib/`: Utilities and helpers (e.g., `lib/utils.ts`).
- `hooks/`: Reusable React hooks (e.g., `hooks/use-toast.ts`).
- `public/`: Static assets (images, video, SVGs).
- `styles/`: Global styles and Tailwind CSS files.
- `scripts/`: SQL and setup scripts (e.g., `create-waitlist-table.sql`).

## Build, Test, and Development Commands
- `pnpm install`: Install dependencies (project uses pnpm; see `pnpm-lock.yaml`).
- `pnpm dev`: Run the app locally with hot reload.
- `pnpm build`: Create a production build.
- `pnpm start`: Start the production server (after `pnpm build`).
- `pnpm lint`: Run ESLint via Next.js.

## Coding Style & Naming Conventions
- **Language**: TypeScript + React (Next.js App Router) with Tailwind CSS.
- **Indentation**: 2 spaces; keep lines focused and readable.
- **Components**: Export in PascalCase; file names in kebab/lowercase (e.g., `theme-provider.tsx`, `button.tsx`).
- **Hooks/Utils**: `use-*.ts` for hooks; colocate simple helpers in `lib/`.
- **Styling**: Prefer Tailwind utility classes; use `tailwind-merge` patterns already present.
- **Linting**: Fix issues before committing: `pnpm lint`.

## Testing Guidelines
- No test runner is configured yet. If adding non-trivial logic, include a brief plan for tests in your PR (unit or e2e) and propose tooling before introducing dependencies.

## Commit & Pull Request Guidelines
- **Commits**: Use clear, imperative messages (e.g., “add waitlist server action”). Group related changes; avoid noisy refactors.
- **PRs must include**:
  - Purpose and scope with before/after context or screenshots for UI.
  - Linked issue (if applicable) and any migration notes.
  - Verification steps (commands to run, flags, env required).

## Security & Configuration Tips
- Environment variables: set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. Do not commit secrets; keep the service role key server-only (used in `app/actions.ts`).
- Database: use `scripts/create-waitlist-table.sql` to provision the `waitlist` table.
- Review assets in `public/` for licensing before adding new media.

