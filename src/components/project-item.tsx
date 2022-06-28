/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IProject } from 'src/types/project'
import Image from 'next/image'

const ProjectItem: React.FC<IProject> = ({
  name,
  url,
  image,
  description,
  technologies
}) => {
  return (
    <div className="flex flex-col items-center drop-shadow-lg text-center border border-gray-600 py-4 px-6 bg-white dark:bg-dark">
      <a href={url} target="_blank" rel="nopper noreferrer">
        <Image src={image} alt={name} className="w-full h-auto rounded-md object-contain" width={400} height={300} />
      </a>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
        <div className="grid grid-cols-2 gap-3">
          {technologies.map(tech => (
            <span key={tech} className="text-xs dark:bg-gray-700 bg-gray-200 rounded-md py-1 px-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
