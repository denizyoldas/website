import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts, slugOf } from '@/lib/content'

export const metadata: Metadata = { title: 'Blog' }

export default function Blog() {
  const posts = getPosts()
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold text-accent">Blog</h1>
      {posts.length === 0 && <p className="text-muted">No posts yet.</p>}
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.name}>
            <Link href={`/blog/${slugOf(p)}`} className="group block">
              <span className="text-muted">{p.meta?.date}</span>{' '}
              <span className="font-bold group-hover:underline">{p.meta?.title}</span>
              {p.meta?.description && <p className="text-muted">{p.meta.description}</p>}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
