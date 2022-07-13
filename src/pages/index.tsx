import React from 'react'
import Link from 'next/link'
import ContactDetail from 'src/components/contact-detail'

export default function Index() {
  return (
    <>
      <div className="text-center bg-gray-200 dark:bg-gray-600 rounded-md mt-4">
        Merhaba, ben Türkiye&apos;de yaşayan bir Frontend Geliştiricisiyim
      </div>
      <div className="pt-8">
        <div className="text-6xl font-medium">Deniz Aksu</div>
        <div className="text-sm">
          Frontend Developer{' '}
          <span className="text-xs">
            (React, Next.js, TypeScript, Angular, Node.js)
          </span>
        </div>
        <h3 className="underline underline-offset-4">Kısaca</h3>
        <p>
          4 yılı aşkın bir süredir Full-Stack ve Frontend Olarak görev alıp bu
          görev sürelerinde kendinimi geliştirmeye ve ileriye taşımaya odaklanan
          bir yazılımcıyım. Lise yıllarında{' '}
          <span className="text-purple-600 dark:text-yellow-500">
            javascript
          </span>{' '}
          ile tanışmamdan sonra genel olarak{' '}
          <span className="text-purple-600 dark:text-yellow-500">
            javascript
          </span>{' '}
          ağırlıklı geliştirmeler yaptım.
        </p>
        <ContactDetail />
      </div>
    </>
  )
}
