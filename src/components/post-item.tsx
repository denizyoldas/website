import React from 'react'
import A from './UI/a'

interface Props {
  title: string
  description: string
  tags: string[]
  url: string
}

const PostItem: React.FC<Props> = ({ title, description, tags, url }) => {
  return (
    <div>
      <h2>
        <A blank href={url}>
          {title}
        </A>
      </h2>
      <p>{description}</p>
      {tags.map(t => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

export default PostItem
