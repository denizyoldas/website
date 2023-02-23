import { nanoid } from 'nanoid'
import { IProject } from 'types/project'
import ProjectItem from '@/components/project-item'
import Container from '@/components/container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Deniz Aksu - Projects'
}

const PROJECTS: IProject[] = [
  {
    id: nanoid(),
    name: 'siparislio.com',
    description: `
    Siparlio e-ticaret sitesinde Next.JS kullanarak
    geliştirmeler yaptım. Bu projede Next.JS, Redux, 
    react-hook-form, gibi teknolojileri kullandım. Ödeme entegrasyonu, admin paneli yeni featurelar eklenmesi,
    ürünlerin listelenmesi, filtrelenmesi, aranması gibi işlemleri yaptım. Bunun yanı sıra vercel config ve seri deployment ayarları yaptım.`,
    url: 'https://siparislio.com/',
    image: '/siparislio.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'sass',
      'tailwindcss',
      'react-hook-form',
      'redux'
    ],
    createdAt: new Date('2022-09-16')
  },
  {
    id: nanoid(),
    name: 'Mai Organizasyon',
    description:
      'Mai Organizasyon web sitesi tasarımı, kodlanması ve google işletmem hesabı kurulumu.',
    url: 'https://maiorganizasyon.com/',
    image: '/mai-org.png',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'sass',
      'tailwindcss',
      'Figma'
    ],
    createdAt: new Date('2022-08-04')
  },
  {
    id: nanoid(),
    name: 'Digital Agancy',
    description: 'Digital Agancy web sitesi tasarımı.',
    url: 'https://digital-website-kappa.vercel.app/',
    image: '/digital-agency.png',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'sass',
      'tailwindcss',
      'Figma'
    ],
    createdAt: new Date('2022-10-30')
  },
  {
    id: nanoid(),
    name: 'Wordonce Game',
    description:
      'Vue kullanarak freelance olarak geliştirdiğim bir kelime oyunu. Kısaca satırda veya sütünda aynı harf bulunmaması ve okunduğunda anlamlı bir cümle oluşması kurallarına dayanan bir oyun.',
    url: 'https://wordonce.com/',
    image: '/wordonce.png',
    technologies: ['Vue', 'TypeScript', 'Pinia', 'Vite', 'sass'],
    createdAt: new Date('2022-04-20')
  },
  {
    id: nanoid(),
    name: 'Google Chrome Bookmarks Extension',
    description: 'Google Chrome Bookmarks Extension',
    url: 'https://google.com/chrome-bookmarks-extension',
    image: '/chrome-bookmarks.png',
    technologies: ['React', 'TypeScript', 'sass', 'Styled Components'],
    createdAt: new Date('2022-08-27')
  },
  {
    id: nanoid(),
    name: 'Portfolio',
    description:
      'React js kullanarak youtube da gördüklerime ekleyerek oluşturdum eski portfolio sitem.',
    url: 'https://portfolio-denizyoldas.vercel.app',
    image: '/portfolio.png',
    technologies: ['React', 'sass', 'css'],
    createdAt: new Date('2021-10-27')
  },
  {
    id: nanoid(),
    name: 'Hotel App',
    description:
      'Bir case olarak gelen ve yaparken keyif aldığım. Kendim için geliştirdiğim bir otel puanlama ekleme uygulaması',
    url: 'https://github.com/denizyoldas/hotel-app',
    image: '/hotel-app.png',
    technologies: ['React', 'TypeScript', 'Tailwindcss'],
    createdAt: new Date('2022-06-20')
  },
  {
    id: nanoid(),
    name: 'Screen Record App',
    description:
      'Electron js kullanarak geliştirdiğim ekran kayıt uygulaması. Ekranın sesini ve bilgisayarın mikrofonundan gelen sesi kayıt altına alıp belirlenen dosyaya mp4 uzantılı bir çıktı alarak izlemenize olanak sağlıyor.',
    url: '#',
    image: '/no-image.webp',
    technologies: ['Electron', 'Bulma', 'JavaScript'],
    createdAt: new Date('2022-04-24')
  },
  {
    id: nanoid(),
    name: 'ToDo App',
    description:
      'React Native kullanarak geliştirdiğim bir not tutma uygulaması. Genel olarak ios uyumlu bir app olarak basit düzeyde not tutmaya yardımcı bir uygulama',
    url: 'https://github.com/denizyoldas/todo-app',
    image: '/no-image.webp',
    technologies: ['React Native', 'Chakra UI', 'TypeScript', 'Jotai'],
    createdAt: new Date('2022-05-13')
  }
]

const Projects = () => {
  return (
    <Container>
      <h3 className="underline underline-offset-4 pt-3">Projeler</h3>
      <ul className="grid grid-flow-row gap-10 place-items-center">
        {PROJECTS.map(project => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </ul>
    </Container>
  )
}

export default Projects
