import { useTheme } from 'next-themes'
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      style={{ display: 'inline-block' }}
      key={theme}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-purple-400 hover:bg-purple-300 dark:bg-yellow-400 p-2 rounded-md hover:dark:bg-yellow-300"
    >
      {theme === 'light' ? (
        <BsFillMoonFill color="white" />
      ) : (
        <BsFillSunFill color="black" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
