import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPosts, slugOf } from '@/lib/content'

export const dynamicParams = false

export const generateStaticParams = () => getPosts().map(p => ({ slug: slugOf(p) }))

const findPost = (slug: string) => getPosts().find(p => slugOf(p) === slug)

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const post = findPost((await params).slug)
  return { title: String(post?.meta?.title ?? 'Blog'), description: post?.meta?.description as string | undefined }
}

export default async function Post({ params }: PageProps<'/blog/[slug]'>) {
  const post = findPost((await params).slug)
  if (!post) notFound()
  return (
    <article>
      <p className="text-muted">{post.meta?.date}</p>
      <h1 className="mb-6 text-2xl font-bold text-accent">{post.meta?.title}</h1>
      <div className="md" dangerouslySetInnerHTML={{ __html: post.html! }} />
    </article>
  )
}
