import React from 'react'
import ContactDetail from 'src/components/contact-detail'

export default function Index() {
  return (
    <>
      <div className="pt-8">
        <div className="text-6xl font-medium">Deniz Aksu</div>
        <div className="text-sm">
          Frontend Developer <span className="text-xs">(JavaScript)</span>
        </div>
        <div className="text-center bg-gray-200 dark:bg-gray-600 rounded-md mt-4">
          Eğlenceli bir yazılım geliştiricisi
        </div>
        <h3 className="underline underline-offset-4">Kısaca</h3>
        <p>
          Merhaba, ben Deniz Aksu. Şu anda{' '}
          <a
            href="https://dijitalkurye.com.tr/"
            className="text-purple-600 dark:text-yellow-500"
          >
            Dijital Kurye
          </a>{' '}
          şirketinde Frontend Developer olarak çalışıyorum. Kendimi geliştirmek
          için bir çok side project yapmaktayım. Bu projeleri{' '}
          <a
            href="https://github.com/denizyoldas"
            className="text-purple-600 dark:text-yellow-500"
          >
            Github
          </a>{' '}
          üzerinde paylaşıyorum. Ayrıca{' '}
          <a
            href="https://yoldasaksu.medium.com/"
            className="text-purple-600 dark:text-yellow-500"
          >
            Medium
          </a>{' '}
          üzerinde yazılar yazıyorum.
        </p>
        <ContactDetail />
      </div>
    </>
  )
}
