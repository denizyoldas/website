import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import A from './UI/a'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const ContactDetail: React.FC = () => {
  return (
    <>
      <h3 className="underline underline-offset-4 pt-3">
        Benimle iletişime geçmek için
      </h3>
      <p>
        Geliştirdiğim projeleri takip etmek github&apos;a, attığım tweetlere
        bakmak için twitter hesabıma bakabilirsiniz. Önemli gördüğünüz konular
        için lütfen mail atın.
      </p>
      <div className="flex place-content-center">
        <div className="flex flex-row justify-evenly w-1/3">
          <A blank={true} href="https://github.com/denizyoldas">
            <BsGithub size={24} className="hover:text-yellow-300" />
          </A>
          <A blank={true} href="https://twitter.com/yoldasaksu">
            <BsTwitter size={24} className="hover:text-blue-300" />
          </A>
          <A blank={true} href="https://www.linkedin.com/in/denizyoldas/">
            <BsLinkedin size={24} className="hover:text-blue-400" />
          </A>
          <A
            blank={true}
            href="mailto:daksu30@gmail.com?subject=Web Sitesi Üzerinden"
          >
            <AiTwotoneMail size={24} className="hover:text-yellow-300" />
          </A>
        </div>
      </div>
    </>
  )
}

export default ContactDetail
