import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

function NavItem({ href, children }) {
  const { pathname } = useRouter()
  const isActive = href === pathname

  return (
    <Link href={href}>
      <a
        className={cx(
          'px-2 py-1 rounded dark:text-white dark:hover:text-yellow-400',
          !isActive && 'no-underline',
          isActive &&
            'text-gray-900 dark:text-yellow-500 underline-offset-1 font-bold'
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavItem
