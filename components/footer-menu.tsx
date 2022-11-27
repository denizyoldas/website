import React from 'react'
import NavItem from './nav-item'
import ThemeToggle from './theme-toggle'

const FoterMenu = () => {
  return (
    <div className="flex sm:hidden fixed inset-x-0 bottom-0 z-10 justify-center motion-safe:animate-slide-up-fade pointer-events-none bg-gradient-to-t from-neutral-900/50 to-transparent">
      <nav className="container flex overflow-x-auto overflow-y-hidden relative items-stretch p-1 m-4 max-w-xl bg-neutral-800/80 rounded-xl shadow-lg shadow-black/50 backdrop-blur-sm pointer-events-auto snap-x sm:snap-none">
        <ThemeToggle />
        {[1, 2, 3, 4].map(item => (
          <NavItem
            href={`/page-${item}`}
            key={item}
            // className="flex relative justify-center items-center py-1 px-2 rounded-lg transition-colors snap-end md:px-4 before:absolute before:inset-x-2 before:rounded-t-full before:border-b before:pointer-events-none before:shadow motion-safe:before:transition-all before:bottom-[-8px] hover:before:bottom-[-4px] hover:before:shadow-neutral-400 before:border-neutral-400 before:border-opacity-0 hover:before:border-opacity-100"
          >
            home
          </NavItem>
        ))}
      </nav>
    </div>
  )
}

export default FoterMenu
