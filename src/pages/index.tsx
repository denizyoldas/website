import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import A from 'src/components/UI/a'
import Link from 'next/link'

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
          <span className="text-purple-600 dark:text-blue-400">javascript</span>{' '}
          ile tanışmamdan sonra genel olarak{' '}
          <span className="text-purple-600 dark:text-blue-400">javascript</span>{' '}
          ağırlıklı geliştirmeler yaptım. <Link href="about">devamı</Link>
        </p>
        <h3 className="underline underline-offset-4 pt-3">
          Benimle iletişim için
        </h3>
        <p>
          Geliştirdiğim projeleri takip etmek için github&apos;a attığım saçma
          tweetlere bakmak isterseniz de twitter hesabıma bakabilirsiniz. Önmeli
          gördüğünüz konular için lütfen mail atın.
        </p>
        <div className="flex place-content-center">
          <div className="flex flex-row justify-evenly w-1/3">
            <A blank={true} href="https://github.com/denizyoldas">
              <BsGithub size={24} />
            </A>
            <A blank={true} href="https://twitter.com/yoldasaksu">
              <BsTwitter size={24} />
            </A>
            <A blank={true} href="https://www.linkedin.com/in/denizyoldas/">
              <BsLinkedin size={24} />
            </A>
            <A
              blank={true}
              href="mailto:daksu30@gmail.com?subject=Web Sitesi Üzerinden"
            >
              <AiTwotoneMail size={24} />
            </A>
          </div>
        </div>
      </div>
    </>
  )
}
