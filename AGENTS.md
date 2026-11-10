<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project notes

- **Content is the source of truth.** Everything shown on the site lives in `content/**/*.md` (frontmatter + markdown). The terminal's file tree is generated from that folder by `lib/content.ts`; never hardcode profile/project/experience data in components. `NN-` filename prefixes only set order and are stripped from display names.
- **Terminal logic stays pure.** `lib/shell.ts` has no React/fs imports so it can run under `node --test` with native type stripping (`npm test`). Keep it that way; UI lives in `app/terminal.tsx`. Imports inside `lib/` tests use explicit `.ts` extensions (`allowImportingTsExtensions` is on, `package.json` is `"type": "module"`).
- **Markdown HTML is trusted** only because it comes from repo files. Don't feed user or remote input into `dangerouslySetInnerHTML`.
- **Static only.** All routes are prerendered; `cacheComponents` is intentionally off. Blog slugs come from `generateStaticParams` with `dynamicParams = false`.
- **Deliberately removed** in the redesign (don't "restore" without asking): Notion blog, Raindrop bookmarks, jest, `public/pdfs/*`, `app-ads.txt` (AdMob verification — re-add at `public/app-ads.txt` if an app serves AdMob ads).
- **Privacy:** the CV phone number is intentionally not published.
- **Dev preview:** open `http://localhost:3000`, not `127.0.0.1` — Next 16 blocks dev assets from other origins, so the page renders but never hydrates.
