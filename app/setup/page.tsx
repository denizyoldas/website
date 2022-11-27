import React from 'react'

export default function Setup() {
  return (
    <>
      <h1 id="mac-setupum">Mac Setupum</h1>
      <p>
        Standart bir Frontend geliştirici olarak Mac kullanıyorum. Bu yazımda
        Mac kullanıcıları için gerekli gördüğüm programları ve ayarları
        paylaşacağım. Bunlar tamamiyle benim şahsi paylaşımlarımdır.
      </p>
      <h2 id="1-homebrew">1. Homebrew</h2>
      <p>
        Mac’te birçok programı kurmak için Homebrew kullanıyorum. Homebrew’u
        kurmak için aşağıdaki komutu terminalde çalıştırmanız yeterli.
      </p>
      <pre>
        <code className="lang-bash">
          /<span className="hljs-keyword">bin/bash </span>-c{' '}
          <span className="hljs-string">
            $(curl -fsSL
            https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
          </span>
        </code>
      </pre>
      <h2 id="2-fig">2. Fig</h2>
      <p>
        Fig, terminaldeki komutları ve çıktıları görsel olarak gösteren bir
        araç. kullanmaya başladığımdan beri büyük kolaylıklar sunan bu araç,
        hayatımı büyük ölçüde kolaylaştırdı. Fig’i kurmak için aşağıdaki komutu
        terminalde çalıştırmanız yeterli. <br />
        <em>
          ( fig için yaptığım ayarları ve kullandığım eklentileri bir medium
          yazısında paylaşacağım. )
        </em>
      </p>
      <pre>
        <code className="lang-bash">
          <span className="hljs-keyword">brew </span>
          <span className="hljs-keyword">install </span>fig
        </code>
      </pre>
      <h2 id="3-raycast">3. Raycast</h2>
      <p>
        Raycast, Mac’teki uygulamaları bulmanızı, açmanızı uygulamalara özel
        eklentiler kurup kullanmanızı sağlayan bir araç. İstediğiniz eklentiyi
        kendiniz için yazıp kullanmanıza olanak sağlıyor. İsterseniz yazdığınız
        eklentiyi store yükleyip paylaşabilirsiniz. Benimde geliştirdiğim basit
        bir raycast eklentisi var.{' '}
        <a href="https://www.raycast.com/denizyoldas/tc-no-generator">Bu</a>
        linkten ulaşabilirsiniz. Raycast’i kurmak için aşağıdaki komutu
        terminalde çalıştırmanız yeterli.
      </p>
      <pre>
        <code className="lang-bash">
          <span className="hljs-keyword">brew </span>
          <span className="hljs-keyword">install </span>--cask raycast
        </code>
      </pre>
      <h2 id="4-visual-studio-code">4. Visual Studio Code</h2>
      <p>
        Visual Studio Code, Microsoft’un geliştirdiği açık kaynak kodlu bir
        editördür. Benim için en iyi editörlerden biri. Aslinda bütün editörleri
        kullanıyorum. Fakat Visual Studio Code, en çok kullandığım editörlerden
        biri. Visual Studio Code’u kurmak için aşağıdaki komutu terminalde
        çalıştırmanız yeterli.
      </p>
      <pre>
        <code className="lang-bash">
          <span className="hljs-keyword">brew </span>install --cask
          visual-studio-
          <span className="hljs-meta">code</span>
        </code>
      </pre>
      <h2 id="5-cron">5. Cron</h2>
      <p>
        Cron, Mac’te kullanabileceğiniz Google Takvim ile senkronize
        edebileceğiniz bir takvim uygulaması. Şu an için sadece Google Takvim
        ile senkronize edebiliyor ve beta sürümde olduğu için davetli olmanız
        gerekiyor.
      </p>
      <h2 id="6-browser">6. Browser</h2>
      <p>
        Bir Frontend Developer olduğum için bilgisayarımda bütün tarayıcılar
        mevcut. Aktif olarak Chrome ve Safariyi kullanıyorum. Ama geliştirme
        yaparken
        <a href="https://minbrowser.org/">Min</a> browserini tercih ediyorum.
        Çünkü Min browser Çok minimal bir tasarıma sahip ve gereksiz dikkat
        dağıtıcı özelliklerden arındırılmış.
      </p>
      <h2 id="di-er-uygulamalar">Diğer uygulamalar</h2>
      <ul>
        <li>
          <a href="https://www.figma.com/">figma</a>
        </li>
        <li>
          <a href="https://www.notion.so/">notion</a>
        </li>
        <li>
          <a href="https://slack.com/">slack</a>
        </li>
        <li>
          <a href="https://www.spotify.com/">spotify</a>
        </li>
        <li>
          <a href="https://zoom.us/">zoom</a>
        </li>
        <li>
          <a href="https://www.whatsapp.com/">whatsapp</a>
        </li>
        <li>
          <a href="https://discord.com/">discord</a>
        </li>
        <li>
          <a href="https://apps.apple.com/us/app/amphetamine/id937984704?mt=12">
            amphetamine
          </a>
        </li>
        <li>
          <a href="https://www.postman.com/">postman</a>
        </li>
        <li>
          <a href="https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12">
            Microsoft Remote Desktop
          </a>
        </li>
        <li>
          <a href="https://anydesk.com/en">Anydesk</a>
        </li>
        <li>
          <a href="https://zeplin.io/">zeplin</a>
        </li>
      </ul>
      <p>
        <em>
          <strong>Not:</strong>
        </em>
        <em>
          <strong>
            Bu yazımda paylaştığım programlar ve ayarlar, benim şahsi
            tercihlerimdir.
          </strong>
        </em>
      </p>
    </>
  )
}
