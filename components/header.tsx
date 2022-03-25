import React from 'react';
import Link from 'next/link';

export default function header() {
  return (
    <header className='prose dark:prose-invert container mx-auto p-4 pb-5 flex flex-col'>
      <div className='flex flex-row'>
        <Link className='no-underline' href='/'>
          <code className='text-base md:text-2xl'>deniz@dev:$ </code>
        </Link>
      </div>

      <nav className='mt-2'>
        <ul className='flex flex-row flex-wrap items-center'>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/snippets'>Snippets</a>
          </li>
          <li>
            <a href='/bookmarks'>Bookmarks</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
