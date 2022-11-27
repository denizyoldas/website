'use client'

// import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import useTheme from 'hooks/use-theme'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.button
      area-label="toggle the theme"
      style={{ display: 'inline-block' }}
      key={theme}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      className="bg-purple-400 hover:bg-purple-300 dark:bg-yellow-400 p-2 rounded-md hover:dark:bg-yellow-300"
    >
      {mounted && theme === 'dark' ? (
        <BsFillSunFill color="black" />
      ) : (
        <BsFillMoonFill color="white" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
