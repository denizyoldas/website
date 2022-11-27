import React from 'react'

interface Props {
  title: string
  subTitle: string
  detailList: string[]
}

const AboutExperianceItem: React.FC<Props> = ({
  title,
  subTitle,
  detailList
}) => {
  return (
    <div className="border-b-2 border-slate-500">
      <h3 className="mb-0 font-bold">{title}</h3>
      <h6 className="font-extralight">{subTitle}</h6>
      <ul>
        {detailList.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutExperianceItem
