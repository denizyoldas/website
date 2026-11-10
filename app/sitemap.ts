import type { MetadataRoute } from 'next'
import { getFile, getPosts, slugOf } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = String(getFile('about.md').meta?.website)
  return [
    { url: base },
    { url: `${base}/about` },
    { url: `${base}/blog` },
    ...getPosts().map(p => ({ url: `${base}/blog/${slugOf(p)}`, lastModified: String(p.meta?.date) })),
  ]
}
