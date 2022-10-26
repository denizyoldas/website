import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

function NavItem({ href, children }) {
  const { pathname } = useRouter()
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
    >
      {children}
    </Link>
  )
}

export default NavItem
