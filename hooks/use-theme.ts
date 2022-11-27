import { useEffect, useState } from 'react'
import useLocalStorage from './use-localstorage'

export default function useTheme() {
  const [storedValue, setStoredValue] = useLocalStorage('theme', 'dark')
  const [theme, setTheme] = useState(storedValue)

  // class
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    setStoredValue(theme)
  }, [setStoredValue, theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
