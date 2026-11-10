import Link from 'next/link'

export default function ClassicLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 text-sm leading-relaxed">
      <nav className="mb-10 flex gap-5 text-muted">
        <Link href="/" className="text-accent hover:underline">~/terminal</Link>
        <Link href="/about" className="hover:text-fg">about</Link>
        <Link href="/blog" className="hover:text-fg">blog</Link>
      </nav>
      {children}
    </div>
  )
}
