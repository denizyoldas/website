import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { getFile } from '@/lib/content'
import './globals.css'

const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin', 'latin-ext'] })

const about = getFile('about.md').meta!

export const metadata: Metadata = {
  metadataBase: new URL(String(about.website)),
  title: { default: `${about.name} — ${about.title}`, template: `%s — ${about.name}` },
  description: `${about.name}, ${about.title} based in ${about.location}.`,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${mono.variable} font-mono antialiased`}>
      <body>{children}</body>
    </html>
  )
}
