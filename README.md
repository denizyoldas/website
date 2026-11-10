# denizaksu.dev

Personal site with a terminal UI (`/`) and a classic view (`/about`, `/blog`). Next.js App Router, fully static.

## Editing content

Everything lives in `content/` as Markdown with frontmatter. The terminal's file tree **is** this folder.

| File | What |
| --- | --- |
| `content/about.md` | name, title, location, links + bio |
| `content/experience/NN-company.md` | one job per file; `NN-` sets the order and is hidden |
| `content/projects/*.md` | `name`, `url`, `image` (put it in `public/projects/`), `tech`, `date` |
| `content/blog/*.md` | `title`, `date`, `description`; file name = URL slug |
| `content/skills.md`, `education.md`, `contact.md` | free Markdown |

Add a new `.md` anywhere under `content/` and it shows up in the terminal (`ls`, `cat`) after the next build.

## Commands

```bash
npm run dev    # http://localhost:3000
npm run build
npm test       # terminal logic tests (lib/shell.test.ts)
```
