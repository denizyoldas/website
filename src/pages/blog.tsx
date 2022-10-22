import ms from 'ms'
import Head from 'next/head'
import React from 'react'
import PostItem from 'src/components/post-item'
import Notion from 'src/lib/notion'

interface Props {
  posts: any[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Deniz Aksu - Blog</title>
        <meta
          name="description"
          content="yazdığım yazıları ve notları buradan okuyabilirsiniz."
        />
      </Head>
      {posts.length && (
        <div>
          <ul>
            {posts.map((p, index) => (
              <PostItem key={p.id} {...p} isLast={index === posts.length - 1} />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export async function getStaticProps() {
  const notion = new Notion()
  const res = notion.databases()
  const databases = await res.query({
    database_id: 'd0c8e4df-3355-4a69-9706-ddf0213bd0b9'
  })

  const posts = databases.results.map((pageObj: any) => ({
    id: pageObj.id,
    title: pageObj.properties.title.title[0].plain_text,
    description: pageObj.properties.description.rich_text[0].plain_text,
    tags: pageObj.properties.tags.multi_select.map(notionTag => ({
      color: notionTag.color,
      text: notionTag.name
    })),
    url: pageObj.properties.url.rich_text[0].plain_text
  }))

  return {
    props: { posts },
    revalidate: ms('1d') / 1000
  }
}

export default Blog
