import { render, screen } from '@testing-library/react'
import PostItem from '../src/components/post-item'
import '@testing-library/jest-dom'

interface PostItemProps {
  title: string
  description: string
  tags: { text: string; color: string }[]
  url: string
}

const POST: PostItemProps = {
  title: 'test name',
  description: 'test description',
  tags: [{ text: 'angular', color: 'red' }],
  url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4'
}

describe('<PostItem /> Post Item', () => {
  it('Post item created', () => {
    render(<PostItem {...POST} />)

    // expect(screen.getByText(POST.title)).toBeInTheDocument()
    // expect(screen.getByText(POST.description)).toBeInTheDocument()
  })
})
