import React from 'react'
import NavItem from './nav-item'
import Head from 'next/head'
import ThemeToggle from './theme-toggle'

const MENU = {
  '/': 'Ana Sayfa',
  '/about': 'Hakkımda',
  '/projects': 'Projelerim',
  '/blog': 'Blog',
  // '/bookmarks': 'Yer İmleri'
}

function Header() {
  return (
    <header className="prose dark:prose-invert container mx-auto p-4 pb-5 flex flex-row justify-between items-center">
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
