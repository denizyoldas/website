import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.button
      style={{ display: 'inline-block' }}
      key={theme}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="bg-purple-400 hover:bg-purple-300 dark:bg-yellow-400 p-2 rounded-md hover:dark:bg-yellow-300"
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <BsFillSunFill color="black" />
      ) : (
        <BsFillMoonFill color="white" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
