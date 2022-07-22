import React from 'react'
import A from 'src/components/UI/a'
import FoterMenu from './footer-menu'

function Footer() {
  return (
    <>
      <footer className="prose md:mx-auto dark:prose-invert py-8 px-4">
        <hr className="my-3" />
        <span>
          Made with Next.js by{' '}
          <A
            className="no-underline"
            href="https://github.com/denizyoldas/website"
            blank={true}
          >
            @denizyoldas
          </A>
          ; hosted on{' '}
          <A className="no-underline" href="https://vercel.com" blank={true}>
            Vercel
          </A>
          ;{' '}
          <A className="no-underline" href="referance" blank={false}>
            Reference
          </A>
        </span>
      </footer>
      {/* <FoterMenu /> */}
    </>
  )
}

export default Footer
