import { render, screen } from '@testing-library/react'
import ProjectItem from '../src/components/project-item'
import '@testing-library/jest-dom'

const PROJECT = {
  name: 'Wordonce Game',
  description:
    'Vue kullanarak freelance olarak geliştirdiğim bir kelime oyunu. Kısaca satırda veya sütünda aynı harf bulunmaması ve okunduğunda anlamlı bir cümle oluşması kurallarına dayanan bir oyun.',
  url: 'https://wordonce.com/',
  image: '/wordonce.png',
  technologies: ['Vue', 'TypeScript', 'Pinia', 'Vite', 'sass'],
  createdAt: new Date('2022-04-20')
}

describe('<ProjectItem /> Project Item', () => {
  it('Project item created', () => {
    render(
      <ProjectItem
        name={PROJECT.name}
        description={PROJECT.description}
        url={PROJECT.url}
        image={PROJECT.image}
        technologies={PROJECT.technologies}
        createdAt={PROJECT.createdAt}
      />
    )

    expect(screen.getByText(PROJECT.name)).toBeInTheDocument()
    expect(screen.getByText(PROJECT.description)).toBeInTheDocument()

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', PROJECT.url)

    PROJECT.technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})
