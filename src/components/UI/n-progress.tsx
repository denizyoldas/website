import { useTheme } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { useEffect, useMemo, useState } from 'react'

const NProgress = () => {
  const { theme } = useTheme()
  const [color, setColor] = useState('#facc14')

  useEffect(() => {
    if (theme === 'dark') {
      setColor('#facc14')
    } else {
      setColor('#c084fc')
    }
  }, [theme])

  // const NProgressColor = useMemo(() => {
  //   if (theme === 'dark') {
  //     return '#facc14'
  //   }
  //   return '#c084fc'
  // }, [theme])

  return <NextNProgress color={color} />
}

export default NProgress
