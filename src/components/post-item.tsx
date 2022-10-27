import React from 'react'
import A from './UI/a'
import cx from 'classnames'
import { format } from 'date-fns'

interface Props {
  title: string
  description: string
  tags: { text: string; color: string }[]
  url: string
  isLast?: boolean
  date: string
}

const PostItem: React.FC<Props> = ({
  title,
  description,
  tags,
  url,
  isLast,
  date
}) => {
  return (
    <div className={cx({ 'border-b-2 pb-4 border-slate-600': !isLast })}>
      <h3>
        <A blank href={url}>
          {title}
        </A>

        <span className="text-slate-500 text-sm ml-2">
          {format(new Date(date), 'dd.MM.yy')}
        </span>
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
