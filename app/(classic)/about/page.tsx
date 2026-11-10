import type { Metadata } from 'next'
import Image from 'next/image'
import { getDir, getFile } from '@/lib/content'

export const metadata: Metadata = { title: 'About' }

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-12 mb-4 text-xs font-bold tracking-widest text-muted uppercase">{children}</h2>
)

export default function About() {
  const about = getFile('about.md')
  const m = about.meta!
  const links = (['github', 'linkedin', 'twitter'] as const).filter(k => m[k])

  return (
    <>
      <h1 className="text-3xl font-bold text-accent">{m.name}</h1>
      <p className="text-muted">{m.title} · {m.location}</p>
      <p className="mt-2 flex flex-wrap gap-4">
        <a href={`mailto:${m.email}`} className="text-link hover:underline">{m.email}</a>
        {links.map(k => (
          <a key={k} href={String(m[k])} target="_blank" rel="noopener" className="text-link hover:underline">{k}</a>
        ))}
      </p>
      <div className="md mt-6" dangerouslySetInnerHTML={{ __html: about.html! }} />

      <H2>Experience</H2>
      <ol className="space-y-8">
        {getDir('experience').map(e => (
          <li key={e.name}>
            <div className="flex flex-wrap justify-between gap-x-4">
              <span><b>{e.meta?.company}</b> · {e.meta?.role}</span>
              <span className="text-muted">{e.meta?.start} – {e.meta?.end} · {e.meta?.location}</span>
            </div>
            <div className="md mt-2" dangerouslySetInnerHTML={{ __html: e.html! }} />
          </li>
        ))}
      </ol>

      <H2>Projects</H2>
      <ul className="grid gap-6 sm:grid-cols-2">
        {getDir('projects')
          .sort((a, b) => String(b.meta?.date).localeCompare(String(a.meta?.date)))
          .map(p => {
            const url = p.meta?.url as string | undefined
            return (
              <li key={p.name} className="overflow-hidden rounded-lg border border-line bg-panel">
                {p.meta?.image && (
                  <Image src={String(p.meta.image)} alt={String(p.meta.name)} width={640} height={360} className="aspect-video w-full object-cover object-top" />
                )}
                <div className="p-4">
                  <h3 className="font-bold">
                    {url ? <a href={url} target="_blank" rel="noopener" className="hover:underline">{p.meta?.name} ↗</a> : p.meta?.name}
                  </h3>
                  <div className="md mt-1 text-muted" dangerouslySetInnerHTML={{ __html: p.html! }} />
                  <p className="mt-2 text-xs text-accent">{(p.meta?.tech as string[] | undefined)?.join(' · ')}</p>
                </div>
              </li>
            )
          })}
      </ul>

      <H2>Skills</H2>
      <div className="md" dangerouslySetInnerHTML={{ __html: getFile('skills.md').html! }} />

      <H2>Education</H2>
      <div className="md" dangerouslySetInnerHTML={{ __html: getFile('education.md').html! }} />
    </>
  )
}
