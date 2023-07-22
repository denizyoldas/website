import React from 'react'
import { nanoid } from 'nanoid'
import AboutExperianceItem from './about-experiance-item'

const EXPERIANCES = [
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'DDTECH · Mayıs 2023 - Devam Ediyor',
    detailList: [
      'Development of an admin panel for the "Know Your X" project utilizing React, Material-UI (MUI), React-Query, Redux, and Axios.'
    ]
  },
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Apsiyon · Kasım 2022 - Mayıs 2023',
    detailList: [
      'Apsiyon legacy projesinde, yönetim paneli kısmında jquery kullanarak geliştirmeler yaptım. Gerektiğinde de Vanilla.JS kullandım.',
      'Apsis UI, Account ve ApsiPay gibi projelerde, içerisinde bulunan micro frontend sayesinde geliştirmeler yaptım. Bu projelerde, micro frontend teknolojisini kullanarak mesleki becerilerimi geliştirme fırsatı buldum.'
    ]
  },
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Dijital Kurye · Ekim 2021 - Kasım 2022',
    detailList: [
      'Ana projem olarak, operasyon yönetimi, canlı takip ve pdf imza gibi birçok özelliği içeren dashboard projesine katkıda bulundum. Bu projede, RxJS, Fabric, PdfJS ve Leaflet gibi harici kütüphaneleri kullanarak çeşitli geliştirmeler yaptım.',
      'React, Material UI, CraftJS ve Redux kullanarak, "Emlak Müzayede" projesinin canlı müzayedelerin yapıldığı dashboardında çeşitli geliştirmeler yaptım. Bu projede, bu teknolojileri kullanarak mesleki becerilerimi geliştirme fırsatı buldum.',
      'Call center ile yapılacak görüşmeleri kaydetmek için, Electron.JS ve Vanilla.JS kullanarak bir proje geliştirdim. Bu projenin amacı, ekran kaydı, call center çalışanının ses kaydı ve müşterinin ses kaydını yapmaktı.',
      'JQuery kullanarak, "Meksa Verifier" adı verilen MVC projesinde çeşitli geliştirmeler yaptım. Bu proje, bir veri doğrulama sistemine sahipti ve kullanıcıların girdiği verilerin doğruluğunu kontrol etmek amacıyla tasarlandı. JQuery ile yaptığım geliştirmeler sayesinde, proje daha kullanışlı hale geldi ve kullanıcı deneyimi iyileşti. '
    ]
  },
  {
    key: nanoid(),
    title: 'Front-End Developer',
    subTitle: 'Altamira Digital · Ekim 2020 - Temmuz 2021',
    detailList: [
      'Angular 8 kullanarak, "CondoLife" yönetim paneli platformunu geliştirdim. Bu platform, AVM, Site ve Rezidans yönetimi için tasarlandı ve bir dashboard paneli olarak kullanılıyor. Bu projede, RxJs, WebSocket gibi kütüphaneleri de kullanarak çeşitli geliştirmeler yaptım.',
      'Eltemtek ArGe portali projesi için başlangıç ve bitiş aşamalarını gerçekleştirdim. Angular 8 ve WebSocket kullanarak, canlı mesajlaşma, proje revize adımları ve proje oluşturma gibi birçok geliştirme yaptım. Bu projeyi baştan sona ben yönettim ve bazı konularda takım arkadaşlarımdan destek aldım.',
      'Angular 8 ve Electron.js kullanarak, "Borusan Kiosk" adlı projeyi geliştirdim. Bu proje, Borusan Otomotiv için tamamiyle SignalR ile çalışan bir Para Ödeme Kiosk\'u olarak tasarlandı ve ben bu projede yer aldım.',
      `Istanbul'da bulunan "Acarkent" sitesinin yönetimi için tasarlanmış dashboard'a Angular 8 ile geliştirmelerde bulundum.`
    ]
  },
  {
    key: nanoid(),
    title: 'Full-Stack Developer',
    subTitle: 'İdeal Bilişim · Eylül 2018 - Kasım 2019',
    detailList: [
      `PHP kullanarak, mobil uygulamalar için API yazdım. Laravel Framework'ü kullanarak, Veteriner yönetim uygulamasını geliştirdim. HTML, CSS, JQuery kullanarak, websitelerin geliştirilmesinde yer aldım. Ionic ve Angular 2 kullanarak, bir mobil uygulama geliştirdim. Ayrıca, Angular.js kullanarak Front-End geliştirmeleri yaptım. `
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
