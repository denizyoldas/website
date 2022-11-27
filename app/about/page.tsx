import AboutExperiances from '@/components/about-experiances'
import Container from '@/components/container'

const SKILLS = [
  'Angular',
  'React',
  'React Native',
  'Vue',
  'JQuery',
  'Electron',
  'RxJs',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Go'
]

const AboutPage = () => {
  return (
    <Container>
      <h3 className="underline underline-offset-4 pt-3">Hakkımda</h3>
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
      <h4 className="underline underline-offset-3">Deneyim</h4>
      <AboutExperiances />
      <h4 className="underline underline-offset-3 pt-3">Yetenekler</h4>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 text-center">
        {SKILLS.map(item => (
          <span className="bg-slate-500 rounded-lg text-white" key={item}>
            {item}
          </span>
        ))}
      </div>
    </Container>
  )
}

export default AboutPage
