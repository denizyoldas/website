// Run: npm test  (node's built-in runner, Node 24 strips types natively)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { complete, resolve, run, type FsNode } from './shell.ts'

const root: FsNode = {
  name: '~',
  type: 'dir',
  children: [
    {
      name: 'projects',
      type: 'dir',
      children: [{ name: 'site.md', type: 'file', meta: { url: 'https://x.dev' }, html: '<p>hi</p>' }],
    },
    { name: 'about.md', type: 'file', meta: { name: 'D', title: 'Dev', location: 'Ist', github: 'https://github.com/d' }, html: '<p>me</p>' },
    { name: 'avatar.txt', type: 'file', text: ':-)' },
  ],
}

test('resolve', () => {
  assert.deepEqual(resolve(['projects'], '..'), [])
  assert.deepEqual(resolve(['projects'], '~'), [])
  assert.deepEqual(resolve([], 'projects/../projects/./site.md'), ['projects', 'site.md'])
  assert.deepEqual(resolve([], '../..'), [])
})

test('cd / ls / cat', () => {
  assert.deepEqual(run(root, [], 'cd projects').cwd, ['projects'])
  assert.equal(run(root, [], 'cd nope').out[0].kind, 'error')
  assert.equal(run(root, [], 'cd about.md').out[0].kind, 'error')
  const ls = run(root, [], 'ls').out[0]
  assert.ok(ls.kind === 'entries' && ls.entries[0].dir && ls.entries[0].path === '~/projects')
  assert.equal(run(root, [], 'cat projects').out[0].kind, 'error')
  assert.deepEqual(run(root, ['projects'], 'cat site.md').out.map(l => l.kind), ['meta', 'html'])
})

test('chaining, open, clear, unknown', () => {
  const r = run(root, [], 'cd projects && ls')
  assert.deepEqual(r.cwd, ['projects'])
  assert.equal(r.out[0].kind, 'entries')
  assert.equal(run(root, [], 'open site').open, 'https://x.dev')
  assert.ok(run(root, [], 'ls && clear').clear)
  assert.equal(run(root, [], 'rm -rf /').out[0].kind, 'error')
})

test('whoami + txt files', () => {
  const nf = run(root, [], 'whoami').out[0]
  assert.ok(nf.kind === 'neofetch' && nf.art === ':-)')
  assert.deepEqual(nf.rows, [['D', ''], ['Role', 'Dev'], ['Location', 'Ist'], ['GitHub', 'github.com/d']])
  assert.deepEqual(run(root, [], 'cat avatar.txt').out, [{ kind: 'text', text: ':-)' }])
})

test('complete', () => {
  assert.equal(complete(root, [], 'wh'), 'whoami ')
  assert.equal(complete(root, [], 'cd pro'), 'cd projects/')
  assert.equal(complete(root, [], 'cat projects/s'), 'cat projects/site.md')
  assert.equal(complete(root, [], 'cat zzz'), 'cat zzz')
})
