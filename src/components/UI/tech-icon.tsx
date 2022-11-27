import React from 'react'

interface Props {
  tech: string
  logo: string
  color?: string
}

const TechIcon = ({ tech, logo, color }: Props) => {
  const techName = tech.toLowerCase()
  const imgSrc = `https://img.shields.io/badge/-${techName}-05122A?style=flat&logo=${logo}${
    color ? `&logoColor=${color}` : ''
  }`

  return <img className="m-0 h-5" src={imgSrc} alt={tech} />
}

export default TechIcon
