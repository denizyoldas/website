import { render } from '@testing-library/react'
import Index from '../src/pages/index'
import About from '../src/pages/about'
import Projects from '../src/pages/projects'

it('renders homepage unchanged', () => {
  const { container } = render(<Index />)
  expect(container).toMatchSnapshot()
})

it('renders about unchanged', () => {
  const { container } = render(<About />)
  expect(container).toMatchSnapshot()
})

it('renders projects unchanged', () => {
  const { container } = render(<Projects />)
  expect(container).toMatchSnapshot()
})
