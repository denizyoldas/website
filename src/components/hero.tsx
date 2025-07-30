import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={160}
        height={160}
        className="rounded-full shadow-lg"
      />
      <h1 className="mt-6 bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
        Deniz Aksu
      </h1>
      <p className="mt-2 text-lg font-medium">
        Frontend Developer <span className="text-sm">(JavaScript)</span>
      </p>
      <p className="mt-4 max-w-xl text-gray-700 dark:text-gray-300">
        Eğlenceli bir yazılım geliştiricisi
      </p>
    </section>
  )
}

export default Hero
