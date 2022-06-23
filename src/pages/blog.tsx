import classNames from 'classnames';
import React, { useState } from 'react';
import Notion from 'src/lib/notion';

const Blog: React.FC = (props) => {
  return <div></div>;
};

export async function getStaticProps() {
  const notion = new Notion();
  const res = await notion.page();

  console.log(res);

  return {
    props: {},
  };
}

export default Blog;
