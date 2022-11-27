'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cx from 'classnames'

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  // onChange?: () => void
}

function NavItem({ href, children }: Props) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      href={href}
      className={cx(
        'px-2 py-1 dark:text-white hover:underline hover:underline-offset-2',
        !isActive && 'no-underline',
        isActive &&
          'text-gray-900 dark:text-yellow-500 underline-offset-1 font-bold'
      )}
      // onClick={onChange}
    >
      {children}
    </Link>
  )
}

export default NavItem
