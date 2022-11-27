import React from 'react'
import { AiTwotoneMail } from 'react-icons/ai'
import A from './UI/a'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const ContactDetail: React.FC = () => {
  return (
    <>
      <h3 className="pt-3 underline underline-offset-4">
        Benimle iletişime geçmek için
      </h3>
      <p>
        Geliştirdiğim projeleri takip etmek isterseniz github&apos;a, attığım
        tweetlere bakmak için twitter hesabıma bakabilirsiniz. Detaylı iletişim
        için mail ile ulaşım sağlayabilirsiniz.
      </p>
      {/* <div className="flex place-content-center">
        <div className="flex w-1/3 flex-row justify-evenly">
          <A
            blank={true}
            href="https://github.com/denizyoldas"
            aria-label="github"
          >
            <BsGithub size={24} className="hightlight-hover" />
          </A>
          <A
            blank={true}
            href="https://twitter.com/yoldasaksu"
            area-label="twitter"
          >
            <BsTwitter size={24} className="hightlight-hover" />
          </A>
          <A
            blank={true}
            href="https://www.linkedin.com/in/denizyoldas/"
            area-label="linkedin"
          >
            <BsLinkedin size={24} className="hightlight-hover" />
          </A>
          <A
            blank={true}
            href="mailto:daksu30@gmail.com?subject=Web Sitesi Üzerinden"
            area-label="email"
          >
            <AiTwotoneMail size={24} className="hightlight-hover" />
          </A>
        </div>
      </div> */}
    </>
  )
}

export default ContactDetail
