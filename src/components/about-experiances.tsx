import React from 'react'
import { nanoid } from 'nanoid'
import AboutExperianceItem from './about-experiance-item'

const EXPERIANCES = [
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Apsiyon · Kasım 2022 - Mevcut',
    detailList: [
      'Angular, React, NextJS, Vue, Electron, RxJs, HTML, CSS, JavaScript, TypeScript, Go'
    ]
  },
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Dijital Kurye · Ekim 2021 - Kasım 2022',
    detailList: [
      'Dijital kurye adı verilen projede Angular 11 kullanarak bir operasyon yönetimi, imza yönetimi vb... sistemlerin yönetildiği bir dashboard geliştirmekteyim. RxJs, Fabric, PdfJS gibi önemli kütüphaneler kullanarak birçok farklı geliştirme yaptım.',
      '"Canlı Müzayede" adı verilen uygulamada ise react kullanarak geliştirme yapıyorum. Burada Redux, Material, CraftJs gibi teknolojilere yer veriyorum.',
      'Electron.js kullanarak ekran-ses-ekran sesi olacak şekilde kayıt uygulaması geliştirdim.',
      '"Meksa verifier" adı verilen MVC projesinde JQuery ile geliştirmeler yaptım.'
    ]
  },
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Altamira Digital · Ekim 2020 - Temmuz 2021',
    detailList: [
      'Angular 8 kullanarak geliştirdiğim projelerin başında "CondLife" adı verilen yönetim paneli platformu geliyor. Avm, Site, Rezidans yönetimi için yapılan bir dashboard paneli. Diğer projelerde olduğu gibi RxJs, WebSocket vb. kütüphaneler kullanarak geliştirmeler yaptım.',
      '"Borusan Kios" Projesi geliştirdim. Angular 8 ve Electron.js kullanarak Borusan Otomotiv için tamamiyle SignalR ile çalışan bir Para Ödeme Kiosk\'u geliştirmesinde yer aldım.',
      'Istanbul\'da bulunan "Acarkent" sitesinin yönetimi için tasarlanmış dashboard\'a Angular 8 ile geliştirmelerde bulundum.'
    ]
  },
  {
    key: nanoid(),
    title: 'Full-Stack Developer',
    subTitle: 'İdeal Bilişim · Eylül 2018 - Kasım 2019',
    detailList: [
      'PHP kullanarak mobil uygulama için API yazdım.',
      "Laravel Framework'ü kullanarak Veteriner yönetim uygulaması geliştirdim.",
      'HTML, CSS, JQuery kullanarak websiteleri geliştirmesi yaptım.',
      'Ionic - Angular 2 kullanarak mobil uygulama geliştirdim.',
      'Angular.js kullanarak Front-End geliştirmeleri yaptım.'
    ]
  }
]

const AboutExperiances: React.FC = () => {
  return (
    <>
      {EXPERIANCES.map(item => (
        <AboutExperianceItem {...item} key={item.key} />
      ))}
    </>
  )
}

export default AboutExperiances
