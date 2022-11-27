'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import NProgress from './UI/n-progress'

interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  const pathname = usePathname()

  return (
    <>
      <NProgress />
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          key={pathname}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
