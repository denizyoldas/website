'use client'

import NavItem from './nav-item'
import ThemeToggle from './theme-toggle'

const MENU = {
  '/': 'Ana Sayfa',
  '/about': 'Hakkımda',
  '/projects': 'Projelerim',
  '/blog': 'Blog',
  '/setup': 'Setup'
  // '/bookmarks': 'Yer İmleri'
}

function Header() {
  return (
    // hidden sm:flex
    <header className="flex prose dark:prose-invert container mx-auto p-4 pb-5 flex-row justify-between items-center">
      <nav className="mt-2">
        <ul className="flex flex-row flex-wrap items-center">
          {Object.keys(MENU).map(path => (
            <NavItem key={path} href={path}>
              {MENU[path]}
            </NavItem>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Header
