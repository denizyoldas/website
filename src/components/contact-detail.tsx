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
        Geliştirdiğim projeleri takip etmek isterseniz, github hesabıma ve
        attığım tweetlere twitter hesabımda bakabilirsiniz. Eğer detaylı
        iletişim kurmak isterseniz, mail yoluyla benimle iletişim
        kurabilirsiniz.
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <A blank={true} href="https://github.com/denizyoldas" aria-label="github">
          <BsGithub size={28} className="hightlight-hover" />
        </A>
        <A blank={true} href="https://twitter.com/yoldasaksu" area-label="twitter">
          <BsTwitter size={28} className="hightlight-hover" />
        </A>
        <A blank={true} href="https://www.linkedin.com/in/denizyoldas/" area-label="linkedin">
          <BsLinkedin size={28} className="hightlight-hover" />
        </A>
        <A
          blank={true}
          href="mailto:daksu30@gmail.com?subject=Web Sitesi Üzerinden"
          area-label="email"
        >
          <AiTwotoneMail size={28} className="hightlight-hover" />
        </A>
      </div>
    </>
  )
}

export default ContactDetail
