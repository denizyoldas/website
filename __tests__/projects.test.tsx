import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from 'app/projects/page'

describe('<Projects /> project page', () => {
  it('Projects page created', () => {
    render(<Projects />)
  })
})
