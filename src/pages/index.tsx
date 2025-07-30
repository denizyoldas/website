import ContactDetail from 'src/components/contact-detail'
import TechStack from 'src/components/tech-stack'
import Hero from 'src/components/hero'

export default function Index() {
  return (
    <>
      <Hero />
      <div className="prose dark:prose-invert">
        <h3 className="underline underline-offset-4">Kısaca</h3>
        <p>
          Merhaba, ben Deniz Aksu. Şu anda{' '}
          <a href="https://www.ddtech.com.tr/" className="hightlight">
            DDTECH
          </a>{' '}
          şirketinde Frontend Developer olarak çalışıyorum. Kendimi geliştirmek
          için bir çok side project yapmaktayım. Bu projeleri{' '}
          <a href="https://github.com/denizyoldas" className="hightlight">
            Github
          </a>{' '}
          üzerinde paylaşıyorum. Ayrıca{' '}
          <a href="https://yoldasaksu.medium.com/" className="hightlight">
            Medium
          </a>{' '}
          üzerinde yazılar yazıyorum.
        </p>
        <ContactDetail />
        <TechStack />
      </div>
    </>
  )
}
