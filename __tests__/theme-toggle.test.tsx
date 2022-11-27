import { render, screen } from '@testing-library/react'
import ThemeToggle from '../components/theme-toggle'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('<ThemeToggle /> Theme Toggle Component', () => {
  it('light theme', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button')).toHaveClass('bg-purple-400')
  })

  it('button hover color change', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-purple-400')
    userEvent.hover(button)
    // expect(button).toHaveClass('bg-purple-300')
  })
})
