import React from 'react'
import NavItem from './nav-item'
import Head from 'next/head'
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
    <header className="container prose mx-auto flex flex-row items-center justify-between p-4 pb-5 dark:prose-invert">
      <Head>
        <title>Deniz Aksu - Home</title>
      </Head>

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
