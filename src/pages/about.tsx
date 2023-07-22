import Head from 'next/head'
import AboutExperiances from 'src/components/about-experiances'
import TechStack from 'src/components/tech-stack'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Deniz Aksu - About</title>
        <meta
          name="description"
          content="Deniz Aksunun kişisel websitesidir. Hakkında bilgilerini okuyup bilgi edinebilirsiniz."
        />
      </Head>
      <h3 className="pt-3 underline underline-offset-4">Hakkımda</h3>
      <p>
        Merhaba, ben Deniz Aksu. Şu anda{' '}
        <a
          href="https://www.ddtech.com.tr/"
          className="text-purple-600 dark:text-yellow-500"
        >
          DDTECH
        </a>{' '}
        şirketinde Frontend Developer olarak çalışıyorum. Meslek lisesinde
        okurken, bir staj ile yazılım geliştirmeye başladım ve Full-Stack
        pozisyonunda görev aldım. Mezun olduktan sonra üniversite eğitimine
        devam ederken aynı zamanda çalışmaya da devam ettim. Özellikle start-up
        şirketlerinde çalıştım ve kariyerimde önemli deneyimler kazandım.
        Üniversite eğitimimi tamamladıktan sonra, Front-End Developer olarak
        kariyerimine devam ediyorum ve mesleki yeteneklerimi geliştirmeye
        çalışıyorum.
      </p>
      <h4 className="underline-offset-3 underline">Deneyim</h4>
      <AboutExperiances />
      <TechStack />
    </>
  )
}

export default AboutPage
