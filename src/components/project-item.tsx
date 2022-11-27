/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IProject } from 'src/types/project'
import Image from 'next/image'
import format from 'date-fns/format'

const ProjectItem: React.FC<IProject> = ({
  name,
  url,
  image,
  description,
  technologies,
  createdAt
}) => {
  return (
    <li className="group flex max-w-md flex-col items-center bg-white py-4 px-6 text-center drop-shadow-lg dark:bg-neutral-900">
      <a href={url} target="_blank" rel="nopper noreferrer">
        <Image
          src={image}
          alt={name}
          className="h-auto w-full rounded-md object-contain"
          width={400}
          height={300}
        />
      </a>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <span>{format(createdAt, 'dd-MM-yyyy')}</span>
        <p className="text-sm">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          {technologies.map(tech => (
            <span
              key={tech}
              className="rounded-md bg-gray-200 py-1 px-2 text-xs dark:bg-gray-700 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
