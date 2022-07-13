import Head from 'next/head'
import React from 'react'
import AboutExperiances from 'src/components/about-experiances'

const SKILLS = [
  'Angular',
  'Angular.js',
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
    <>
      <Head>
        <title>Deniz Aksu - About</title>
      </Head>
      <h3 className="underline underline-offset-4 pt-3">Hakkımda</h3>
      <p>
        Meslek lisesinden mezun olmadan staj yaparak yazılım geliştirmeye
        başladım. Bu süreçte Full-Stack olarak görev aldım. Sonrasında
        üniversiteye gidip aynı dönemde çalışma hayatında bulunmaya devam ettim.
        Genel olarak Start-Up firmalarında yer aldım. Üniversiteden sonra
        kariyer hayatıma Front-End Developer olarak devam ediyorum.
      </p>
      <h4 className="underline underline-offset-3">Deneyim</h4>
      <AboutExperiances />
      <h4 className="underline underline-offset-3 pt-3">Yetenekler</h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
        {SKILLS.map(item => (
          <span className="bg-slate-500 rounded-lg" key={item}>
            {item}
          </span>
        ))}
      </div>
    </>
  )
}

export default AboutPage
