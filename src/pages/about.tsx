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
          href="https://www.apsiyon.com"
          className="text-purple-600 dark:text-yellow-500"
        >
          Apsiyon
        </a>{' '}
        şirketinde Frontend Developer olarak çalışıyorum. 2018 yılından beri
        yazılım sektöründe çalışıyorum. 2016 yılından beri de web teknolojileri
        üzerine çalışmalar yapıyorum. Çalışma hayatımın ilk yıllarında C# ile
        yazılım geliştirmeye başladım. 2017 yılında web teknolojileri üzerine
        yoğunlaştım. 2018 yılında ise Angular ile yazılım geliştirmeye başladım.
        2019 yılından bu yana ise React, NextJS ve Angular ile yazılım
        geliştirmeye devam ediyorum.
      </p>
      <h4 className="underline-offset-3 underline">Deneyim</h4>
      <AboutExperiances />
      <TechStack />
    </>
  )
}

export default AboutPage
