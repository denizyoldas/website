// Pure terminal logic: no React, no fs. Tested in shell.test.ts.

export type Meta = Record<string, string | string[]>

export type FsNode = {
  name: string // display name, e.g. "bimasraf.md" (sort prefix "01-" stripped)
  type: 'dir' | 'file'
  children?: FsNode[]
  meta?: Meta
  html?: string
}

export type Entry = { name: string; path: string; dir: boolean }

export type Line =
  | { kind: 'text'; text: string }
  | { kind: 'error'; text: string }
  | { kind: 'html'; html: string }
  | { kind: 'meta'; meta: Meta }
  | { kind: 'entries'; entries: Entry[] }

export type Result = {
  cwd: string[]
  out: Line[]
  clear?: boolean
  open?: string // url to open in new tab
  navigate?: string // internal route
}

export const COMMANDS: Record<string, string> = {
  help: 'list commands',
  whoami: 'who is this guy',
  ls: 'list files  (ls [dir])',
  cd: 'change directory  (cd projects, cd .., cd ~)',
  cat: 'print a file  (cat about.md)',
  tree: 'show every file',
  open: 'open a project in a new tab  (open siparislio)',
  blog: 'go to the blog',
  gui: 'switch to the classic view',
  clear: 'clear the screen',
}

export const pathString = (segs: string[]) => ['~', ...segs].join('/')

/** Resolve `arg` against cwd into path segments. Does not check existence. */
export function resolve(cwd: string[], arg = ''): string[] {
  const segs = arg.startsWith('~') || arg.startsWith('/') ? [] : [...cwd]
  for (const part of arg.replace(/^~/, '').split('/')) {
    if (!part || part === '.') continue
    if (part === '..') segs.pop()
    else segs.push(part)
  }
  return segs
}

export function find(root: FsNode, segs: string[]): FsNode | undefined {
  let node: FsNode | undefined = root
  for (const s of segs) node = node?.children?.find(c => c.name === s)
  return node
}

const entries = (node: FsNode, segs: string[]): Entry[] =>
  (node.children ?? []).map(c => ({
    name: c.name,
    path: pathString([...segs, c.name]),
    dir: c.type === 'dir',
  }))

function treeLines(node: FsNode, prefix = ''): string[] {
  const kids = node.children ?? []
  return kids.flatMap((c, i) => {
    const last = i === kids.length - 1
    const line = prefix + (last ? '└── ' : '├── ') + c.name + (c.type === 'dir' ? '/' : '')
    return c.type === 'dir' ? [line, ...treeLines(c, prefix + (last ? '    ' : '│   '))] : [line]
  })
}

/** Find a project file by name with or without ".md". */
function findProject(root: FsNode, name: string) {
  const projects = find(root, ['projects'])?.children ?? []
  return projects.find(p => p.name === name || p.name === `${name}.md`)
}

function runOne(root: FsNode, cwd: string[], input: string): Result {
  const [cmd = '', ...args] = input.trim().split(/\s+/)
  const arg = args.join(' ')
  const err = (text: string): Result => ({ cwd, out: [{ kind: 'error', text }] })

  switch (cmd) {
    case '':
      return { cwd, out: [] }
    case 'help':
      return {
        cwd,
        out: Object.entries(COMMANDS).map(([c, d]) => ({ kind: 'text', text: `${c.padEnd(8)} ${d}` })),
      }
    case 'whoami': {
      const about = find(root, ['about.md'])
      if (!about?.meta) return err('whoami: about.md not found')
      return {
        cwd,
        out: [
          { kind: 'text', text: `${about.meta.name} — ${about.meta.title} @ ${about.meta.location}` },
          { kind: 'html', html: about.html ?? '' },
          { kind: 'text', text: "Type 'help' or click a file below." },
        ],
      }
    }
    case 'ls': {
      const segs = resolve(cwd, arg)
      const node = find(root, segs)
      if (!node) return err(`ls: ${arg}: No such file or directory`)
      if (node.type === 'file') return { cwd, out: [{ kind: 'text', text: node.name }] }
      return { cwd, out: [{ kind: 'entries', entries: entries(node, segs) }] }
    }
    case 'cd': {
      const segs = resolve(cwd, arg || '~')
      const node = find(root, segs)
      if (!node) return err(`cd: ${arg}: No such file or directory`)
      if (node.type !== 'dir') return err(`cd: ${arg}: Not a directory`)
      return { cwd: segs, out: [] }
    }
    case 'cat': {
      if (!arg) return err('cat: missing file name')
      const node = find(root, resolve(cwd, arg))
      if (!node) return err(`cat: ${arg}: No such file or directory`)
      if (node.type === 'dir') return err(`cat: ${arg}: Is a directory`)
      const out: Line[] = []
      if (node.meta && Object.keys(node.meta).length) out.push({ kind: 'meta', meta: node.meta })
      if (node.html) out.push({ kind: 'html', html: node.html })
      return { cwd, out }
    }
    case 'tree':
      return { cwd, out: [{ kind: 'text', text: ['~', ...treeLines(find(root, cwd) ?? root)].join('\n') }] }
    case 'open': {
      if (!arg) return err('open: which project? try: ls ~/projects')
      const node = findProject(root, arg) ?? find(root, resolve(cwd, arg))
      const url = node?.meta?.url
      if (typeof url !== 'string') return err(`open: ${arg}: no link to open`)
      return { cwd, out: [{ kind: 'text', text: `opening ${url}` }], open: url }
    }
    case 'blog':
      return { cwd, out: [{ kind: 'text', text: 'opening /blog' }], navigate: '/blog' }
    case 'gui':
      return { cwd, out: [{ kind: 'text', text: 'opening /about' }], navigate: '/about' }
    case 'clear':
      return { cwd, out: [], clear: true }
    case 'sudo':
      return err('nice try.')
    default:
      return err(`command not found: ${cmd}. Type 'help'.`)
  }
}

/** Run a command line; supports `a && b`. */
export function run(root: FsNode, cwd: string[], input: string): Result {
  let res: Result = { cwd, out: [] }
  for (const part of input.split('&&')) {
    const r = runOne(root, res.cwd, part)
    res = { ...r, out: r.clear ? [] : [...res.out, ...r.out], clear: res.clear || r.clear }
    if (r.out.some(l => l.kind === 'error')) break
  }
  return res
}

/** Tab completion: returns the completed input, or the input unchanged. */
export function complete(root: FsNode, cwd: string[], input: string): string {
  const parts = input.split(' ')
  const word = parts.pop() ?? ''
  let options: string[]
  let base = ''
  if (parts.length === 0) {
    options = Object.keys(COMMANDS)
  } else {
    const slash = word.lastIndexOf('/')
    base = slash >= 0 ? word.slice(0, slash + 1) : ''
    const dir = find(root, resolve(cwd, base))
    options = (dir?.children ?? []).map(c => c.name + (c.type === 'dir' ? '/' : ''))
  }
  const rest = word.slice(base.length)
  const hits = options.filter(o => o.startsWith(rest))
  if (hits.length === 0) return input
  // longest common prefix of all hits
  let common = hits[0]
  for (const h of hits) while (!h.startsWith(common)) common = common.slice(0, -1)
  const done = hits.length === 1 && parts.length === 0 ? common + ' ' : common
  return [...parts, base + done].join(' ')
}
