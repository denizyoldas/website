import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../src/components/header'

describe('Header', () => {
  beforeEach(() => {
    jest.mock('next/router', () => ({
      useRouter: () => ({
        pathname: '/'
      })
    }))
  })
  it('Header Created', () => {
    render(<Header />)
  })
})
