import React from 'react'
import ProjectItem from 'src/components/project-item'
import { IProject } from 'src/types/project'

const PROJECTS: IProject[] = [
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  },
  {
    name: 'Vue',
    description:
      'Vue.js is a progressive JavaScript framework for building user interfaces.',
    url: 'https://vuejs.org/',
    // image: 'https://cdn.worldvectorlogo.com/logos/vue.svg',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['Vue', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  },
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  },
  {
    name: 'Vue',
    description:
      'Vue.js is a progressive JavaScript framework for building user interfaces.',
    url: 'https://vuejs.org/',
    // image: 'https://cdn.worldvectorlogo.com/logos/vue.svg',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['Vue', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  },
  {
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['React', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  },
  {
    name: 'Vue',
    description:
      'Vue.js is a progressive JavaScript framework for building user interfaces.',
    url: 'https://vuejs.org/',
    // image: 'https://cdn.worldvectorlogo.com/logos/vue.svg',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    technologies: ['Vue', 'TypeScript', 'JavaScript'],
    createdAt: new Date('2020-01-01')
  }
]

const Projects = () => {
  return (
    <>
      <h3 className="underline underline-offset-4 pt-3">Projeler</h3>
      <div className="grid grid-cols-2 gap-10">
        {PROJECTS.map(project => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </>
  )
}

export default Projects
