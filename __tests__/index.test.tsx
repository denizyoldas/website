import { render, screen } from '@testing-library/react'
import Index from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a name', () => {
    render(<Index />)
    expect(screen.getByText('Deniz Aksu')).toBeInTheDocument()
  })
})
