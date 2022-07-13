import { render, screen } from '@testing-library/react'
import ContactDetail from '../src/components/contact-detail'
import '@testing-library/jest-dom'

describe('<PostItem /> Post Item', () => {
  it('Post item created', () => {
    render(<ContactDetail />)

    expect(
      screen.getByText('Benimle iletişime geçmek için')
    ).toBeInTheDocument()
  })
})
