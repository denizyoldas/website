import React from 'react'
import A from './UI/a'
import cx from 'classnames'

interface Props {
  title: string
  description: string
  tags: { text: string; color: string }[]
  url: string
  isLast?: boolean
}

const PostItem: React.FC<Props> = ({
  title,
  description,
  tags,
  url,
  isLast
}) => {
  return (
    <div className={cx({ 'border-b-2 pb-4 border-slate-600': !isLast })}>
      <h3>
        <A blank href={url}>
          {title}
        </A>
      </h3>
      <p>{description}...</p>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span
            key={tag.text}
            className={cx(
              'bg-slate-300 dark:text-white dark:bg-slate-500 px-2 rounded-lg',
              `bg-${tag.color}-500`
            )}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PostItem
