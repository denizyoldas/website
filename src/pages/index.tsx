import Image from 'next/image'
import ContactDetail from 'src/components/contact-detail'
import TechStack from 'src/components/tech-stack'

export default function Index() {
  return (
    <>
      <div className="pt-8">
        {/* <div className=''>
          <Image src="/avatar.png" alt="avatar" width={100} height={0} />
        </div> */}
        <div className="text-6xl font-medium">Deniz Aksu</div>
        <div className="text-sm">
          Frontend Developer <span className="text-xs">(JavaScript)</span>
        </div>
        <div className="mt-4 rounded-md bg-gray-200 text-center dark:bg-gray-600">
          Eğlenceli bir yazılım geliştiricisi
        </div>
        <h3 className="underline underline-offset-4">Kısaca</h3>
        <p>
          Merhaba, ben Deniz Aksu. Şu anda{' '}
          <a href="https://www.apsiyon.com/" className="hightlight">
            Apsiyon
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
