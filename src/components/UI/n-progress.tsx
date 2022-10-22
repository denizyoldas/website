import { useTheme } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { useMemo } from 'react'

const NProgress = () => {
  const { theme } = useTheme()

  const NProgressColor = useMemo(() => {
    if (theme === 'dark') {
      return '#facc14'
    } else {
      return '#c084fc'
    }
  }, [theme])

  return <NextNProgress color={NProgressColor} />
}

export default NProgress
