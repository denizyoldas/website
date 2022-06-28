import React from 'react'
import ProjectItem from 'src/components/project-item'
import { IProject } from 'src/types/project'

const PROJECTS: IProject[] = [
  {
    name: 'Wordonce Game',
    description: 'Vue kullanarak freelance olarak geliştirdiğim bir kelime oyunu. Kısaca satırda veya sütünda aynı harf bulunmaması ve okunduğunda anlamlı bir cümle oluşması kurallarına dayanan bir oyun.',
    url: 'https://wordonce.com/',
    image: '/wordonce.png',
    technologies: ['Vue', 'TypeScript', 'Pinia', 'Vite'],
    createdAt: new Date('2022-04-20')
  },
  {
    name: 'Hotel App',
    description: 'Bir case olarak gelen ve yaparken keyif aldığım. Kendim için geliştirdiğim bir otel puanlama ekleme uygulaması',
    url: 'https://github.com/denizyoldas/hotel-app',
    image: '/hotel-app.png',
    technologies: ['React', 'TypeScript'],
    createdAt: new Date('2022-06-20')
  },
]

const Projects = () => {
  return (
    <>
      <h3 className="underline underline-offset-4 pt-3">Projeler</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map(project => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </>
  )
}

export default Projects
