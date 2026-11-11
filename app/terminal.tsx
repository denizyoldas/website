'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { complete, pathString, run, type FsNode, type Line } from '@/lib/shell'

type Block = { cwd: string[]; cmd: string; out: Line[] }

const SUGGESTIONS = ['help', 'whoami', 'ls ~/projects', 'cat ~/skills.md', 'ls ~/blog', 'gui']
const HIDDEN_META = new Set(['image', 'name', 'title'])

function boot(tree: FsNode) {
  const blocks: Block[] = []
  let cwd: string[] = []
  for (const cmd of ['whoami', 'ls']) {
    const r = run(tree, cwd, cmd)
    blocks.push({ cwd, cmd, out: r.out })
    cwd = r.cwd
  }
  return blocks
}

function Prompt({ cwd }: { cwd: string[] }) {
  return (
    <span className="shrink-0">
      <span className="text-accent">deniz@denizaksu.dev</span>:<span className="text-link">{pathString(cwd)}</span>$&nbsp;
    </span>
  )
}

export default function Terminal({ tree }: { tree: FsNode }) {
  const router = useRouter()
  const [blocks, setBlocks] = useState<Block[]>(() => boot(tree))
  const [cwd, setCwd] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [blocks])

  function exec(cmd: string) {
    const r = run(tree, cwd, cmd)
    const block = { cwd, cmd, out: r.out }
    setBlocks(b => (r.clear ? [] : [...b, block]))
    setCwd(r.cwd)
    if (cmd.trim()) setHistory(h => [...h, cmd])
    setHistIdx(-1)
    setInput('')
    if (r.open) window.open(r.open, '_blank', 'noopener')
    if (r.navigate) router.push(r.navigate)
    inputRef.current?.focus({ preventScroll: true })
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') exec(input)
    else if (e.key === 'Tab') {
      e.preventDefault()
      setInput(complete(tree, cwd, input))
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()
      if (!history.length) return
      const next =
        e.key === 'ArrowUp'
          ? histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1)
          : histIdx === -1 ? -1 : histIdx + 1
      const idx = next >= history.length ? -1 : next
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setBlocks([])
    }
  }

  return (
    <main className="mx-auto flex h-dvh max-w-4xl flex-col p-2 sm:p-6">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-line bg-panel shadow-2xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2 text-xs text-muted">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center">deniz@denizaksu.dev: {pathString(cwd)}</span>
          <a href="/about" className="hover:text-fg">gui →</a>
        </div>

        <div
          className="min-h-0 flex-1 overflow-y-auto p-4 text-sm leading-relaxed"
          onClick={() => window.getSelection()?.isCollapsed && inputRef.current?.focus({ preventScroll: true })}
        >
          {blocks.map((b, i) => (
            <div key={i} className="mb-3">
              <div className="flex flex-wrap">
                <Prompt cwd={b.cwd} />
                <span>{b.cmd}</span>
              </div>
              {b.out.map((line, j) => (
                <Output key={j} line={line} onRun={exec} />
              ))}
            </div>
          ))}

          <div className="flex">
            <label htmlFor="cmd" className="contents">
              <Prompt cwd={cwd} />
            </label>
            <input
              id="cmd"
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal command"
              className="min-w-0 flex-1 bg-transparent caret-accent outline-none"
            />
          </div>
          <div ref={endRef} />
        </div>

        <div className="flex flex-wrap gap-2 border-t border-line px-4 py-2 text-xs">
          {SUGGESTIONS.map(s => (
            <button key={s} onClick={() => exec(s)} className="rounded border border-line px-2 py-1 text-muted hover:border-accent hover:text-fg">
              {s}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

function Output({ line, onRun }: { line: Line; onRun: (cmd: string) => void }) {
  switch (line.kind) {
    case 'text':
      return <pre className="whitespace-pre-wrap font-[inherit]">{line.text}</pre>
    case 'error':
      return <div className="text-error">{line.text}</div>
    case 'html':
      return <div className="md my-1" dangerouslySetInnerHTML={{ __html: line.html }} />
    case 'neofetch': {
      const [[name], ...rows] = line.rows
      return (
        <div className="my-2 flex flex-wrap items-center gap-x-8 gap-y-3">
          {line.art && (
            <pre aria-hidden className="font-[inherit] text-[9px] leading-[1.15] text-accent sm:text-[11px]">{line.art}</pre>
          )}
          <div>
            <div className="font-bold text-accent">{name}</div>
            <div className="text-muted">{'-'.repeat(name.length)}</div>
            {rows.map(([k, v]) => (
              <div key={k}>
                <span className="inline-block w-20 font-bold text-link">{k}</span>
                {v}
              </div>
            ))}
          </div>
        </div>
      )
    }
    case 'meta': {
      const m = line.meta
      const heading = m.name ?? m.title
      return (
        <div className="my-1">
          {heading && <div className="font-bold text-accent">{heading}</div>}
          {Object.entries(m)
            .filter(([k]) => !HIDDEN_META.has(k))
            .map(([k, v]) => (
              <div key={k}>
                <span className="text-muted">{k}:</span>{' '}
                {k === 'url' && typeof v === 'string' ? (
                  <a href={v} target="_blank" rel="noopener" className="text-link underline">{v}</a>
                ) : Array.isArray(v) ? v.join(', ') : v}
              </div>
            ))}
        </div>
      )
    }
    case 'entries':
      return (
        <div className="flex flex-wrap gap-x-6">
          {line.entries.map(e => (
            <button
              key={e.path}
              onClick={() => onRun(e.dir ? `cd ${e.path} && ls` : `cat ${e.path}`)}
              className={`hover:underline ${e.dir ? 'font-bold text-link' : ''}`}
            >
              {e.name}
              {e.dir && '/'}
            </button>
          ))}
        </div>
      )
  }
}
