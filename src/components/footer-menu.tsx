import React from 'react'
import NavItem from './nav-item'
import ThemeToggle from './theme-toggle'

const FoterMenu = () => {
  return (
    <div className="motion-safe:animate-slide-up-fade pointer-events-none fixed inset-x-0 bottom-0 z-10 flex justify-center bg-gradient-to-t from-neutral-900/50 to-transparent sm:hidden">
      <nav className="container pointer-events-auto relative m-4 flex max-w-xl snap-x items-stretch overflow-x-auto overflow-y-hidden rounded-xl bg-neutral-800/80 p-1 shadow-lg shadow-black/50 backdrop-blur-sm sm:snap-none">
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
