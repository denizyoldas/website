import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavItem from '../src/components/nav-item'
import { createMockRouter } from '../test-utils/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'

describe('<NavItem> nav item', () => {
  it('active link', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavItem href={'/'}>Ana Sayfa</NavItem>
      </RouterContext.Provider>
    )

    expect(screen.getByText('Ana Sayfa')).toHaveAttribute('href', '/')
    expect(screen.getByText('Ana Sayfa')).toHaveClass(
      'text-gray-900 dark:text-yellow-500 underline-offset-1 font-bold'
    )
  })

  it('inactive link', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavItem href={'/about'}>Hakkımda</NavItem>
      </RouterContext.Provider>
    )

    expect(screen.getByText('Hakkımda')).toHaveAttribute('href', '/about')
    expect(screen.getByText('Hakkımda')).toHaveClass(
      'px-2 py-1 dark:text-white hover:underline hover:underline-offset-2 no-underline'
    )
  })
})
