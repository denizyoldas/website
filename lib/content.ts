import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import type { FsNode, Meta } from './shell'

const ROOT = path.join(process.cwd(), 'content')

// "01-bimasraf.md" -> "bimasraf.md": numeric prefixes only control order.
const displayName = (file: string) => file.replace(/^\d+-/, '')

function toMeta(data: Record<string, unknown>): Meta {
  const meta: Meta = {}
  for (const [k, v] of Object.entries(data)) {
    if (v instanceof Date) meta[k] = v.toISOString().slice(0, 10)
    else if (Array.isArray(v)) meta[k] = v.map(String)
    else if (v != null) meta[k] = String(v)
  }
  return meta
}

function readFile(file: string): FsNode {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'))
  return {
    name: displayName(path.basename(file)),
    type: 'file',
    meta: toMeta(data),
    html: marked.parse(content, { async: false }),
  }
}

function readDir(dir: string): FsNode {
  const children = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(d => !d.name.startsWith('.') && (d.isDirectory() || d.name.endsWith('.md')))
    .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || a.name.localeCompare(b.name))
    .map(d => (d.isDirectory() ? readDir(path.join(dir, d.name)) : readFile(path.join(dir, d.name))))
  return { name: displayName(path.basename(dir)), type: 'dir', children }
}

export const getTree = () => readDir(ROOT)

export const getFile = (...segs: string[]) => readFile(path.join(ROOT, ...segs))

export function getDir(name: string): FsNode[] {
  return getTree().children?.find(c => c.name === name)?.children ?? []
}

export const slugOf = (node: FsNode) => node.name.replace(/\.md$/, '')

/** Blog posts, newest first. */
export const getPosts = () =>
  getDir('blog').sort((a, b) => String(b.meta?.date).localeCompare(String(a.meta?.date)))
