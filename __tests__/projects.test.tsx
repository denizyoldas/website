import { render, screen } from '@testing-library/react'
import Projects from '../src/pages/about'
import '@testing-library/jest-dom'

describe('<Projects /> project page', () => {
  it('Projects page created', () => {
    render(<Projects />)
  })
})
