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
        'px-2 py-1 hover:underline hover:underline-offset-2 dark:text-white',
        !isActive && 'no-underline',
        isActive &&
          'font-bold text-gray-900 underline-offset-1 dark:text-yellow-500'
      )}
    >
      {children}
    </Link>
  )
}

export default NavItem
