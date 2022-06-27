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
    <div className="flex flex-col items-center drop-shadow-lg text-center border border-gray-400 p-10">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className="w-full h-auto" />
      </a>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-col items-center">
          {technologies.map(tech => (
            <span key={tech} className="text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
