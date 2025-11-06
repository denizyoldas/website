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
        <ContactDetail />
        <TechStack />
      </div>
    </>
  )
}
