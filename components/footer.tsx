import React from "react";
import A from "components/UI/a";

function Footer() {
  return (
    <footer className="prose md:mx-auto dark:prose-invert py-8 px-4">
      <hr className="my-3" />
      <span>
        <A
          className="no-underline"
          href="https://github.com/bufgix/website"
          blank={true}
        >
          @denizyoldas
        </A>
        ; hosted on 
        <A href="https://vercel.com" blank={true}>
          Vercel
        </A>
      </span>
    </footer>
  );
}

export default Footer;
