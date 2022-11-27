import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/header'
// import { createMockRouter } from '../test-utils/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'

describe('Header', () => {
  // it('Header Created', () => {
  //   render(
  //     <RouterContext.Provider value={createMockRouter({})}>
  //       <Header />
  //     </RouterContext.Provider>
  //   )
  // })
  // it('header link is correct', () => {
  //   render(
  //     <RouterContext.Provider value={createMockRouter({})}>
  //       <Header />
  //     </RouterContext.Provider>
  //   )
  //   // check link text
  //   expect(screen.getByText('Ana Sayfa')).toBeInTheDocument()
  //   expect(screen.getByText('Hakkımda')).toBeInTheDocument()
  //   expect(screen.getByText('Projelerim')).toBeInTheDocument()
  //   // expect(screen.getByText('Yer İmleri')).toBeInTheDocument()
  //   // check link href
  //   expect(screen.getByText('Ana Sayfa')).toHaveAttribute('href', '/')
  //   expect(screen.getByText('Hakkımda')).toHaveAttribute('href', '/about')
  //   expect(screen.getByText('Projelerim')).toHaveAttribute('href', '/projects')
  //   // expect(screen.getByText('Yer İmleri')).toHaveAttribute('href', '/bookmarks')
  // })
  // it('link array should be correct', () => {
  //   render(
  //     <RouterContext.Provider value={createMockRouter({})}>
  //       <Header />
  //     </RouterContext.Provider>
  //   )
  //   const links = screen.getAllByRole('link')
  //   expect(links).toHaveLength(5)
  //   expect(links[0]).toHaveAttribute('href', '/')
  //   expect(links[1]).toHaveAttribute('href', '/about')
  //   expect(links[2]).toHaveAttribute('href', '/projects')
  //   expect(links[3]).toHaveAttribute('href', '/blog')
  //   expect(links[4]).toHaveAttribute('href', '/setup')
  //   // expect(links[3]).toHaveAttribute('href', '/bookmarks')
  // })
})
