import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from 'app/about/page'

describe('<About> About Page', () => {
  it('about created', () => {
    render(<About />)
    expect(screen.getByText('Hakkımda')).toBeInTheDocument()
  })

  it('check skills', () => {
    render(<About />)
    const SKILLS = [
      'Angular',
      'React',
      'React Native',
      'Vue',
      'JQuery',
      'Electron',
      'RxJs',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Go'
    ]

    SKILLS.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
