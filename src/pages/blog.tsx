import classNames from 'classnames'
import React, { useState } from 'react'
import PostItem from 'src/components/post-item'
import Notion from 'src/lib/notion'

const Blog: React.FC = (props: any) => {
  return (
    <div>
      <ul>
        {props.posts.map(p => (
          <PostItem key={p.id} {...p} />
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const notion = new Notion()
  const res = await notion.databases()
  const databases = await res.query({
    database_id: 'd0c8e4df-3355-4a69-9706-ddf0213bd0b9'
  })

  const posts = databases.results.map(pageObj => ({
    id: pageObj.id,
    title: pageObj.properties.title.title[0].plain_text,
    description: pageObj.properties.description.rich_text[0].plain_text,
    tags: pageObj.properties.tags.multi_select.map(notionTag => notionTag.name),
    url: pageObj.properties.url.rich_text[0].plain_text
  }))

  console.log(posts)

  return {
    props: { posts }
  }
}

export default Blog
