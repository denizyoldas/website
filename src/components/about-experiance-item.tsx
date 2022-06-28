import React from 'react'

interface Props {
  title: string
  subTitle: string
  detailList: string[]
}

const AboutExperianceItem: React.FC<Props> = ({ title, subTitle, detailList }) => {
  return <div>
    <h5>{title}</h5>
    <h6>{subTitle}</h6>
    <ul>
      {detailList.map((item, index) => (
        <li key={index}>
          <p>
            {item}
          </p>
        </li>
      ))}
    </ul>
  </div>
}

export default AboutExperianceItem
