import TechIcon from './UI/tech-icon'

import { Skill } from 'src/types/skill'

const SKILLS: Skill[] = [
  { tech: 'Angular', logo: 'angular', color: 'red' },
  { tech: 'React', logo: 'react' },
  { tech: 'React Native', logo: 'react' },
  { tech: 'Vue', logo: 'vue.js' },
  { tech: 'JQuery', logo: 'jquery', color: '0769AD' },
  { tech: 'Electron', logo: 'electron' },
  { tech: 'RxJs', logo: 'reactivex', color: 'B7178C' },
  { tech: 'HTML', logo: 'html5', color: 'E34F26' },
  { tech: 'CSS', logo: 'css3', color: '1572B6' },
  { tech: 'JavaScript', logo: 'javascript' },
  { tech: 'TypeScript', logo: 'typescript' },
  { tech: 'Go', logo: 'go' },
  { tech: 'NextJS', logo: 'next.js' }
]

export default function TechStack() {
  return (
    <>
      <h4 className="underline-offset-3 pt-3 underline">Yetenekler</h4>
      <div className="flex flex-wrap">
        {SKILLS.map(item => (
          <>
            <TechIcon
              tech={item.tech}
              key={item.tech}
              logo={item.logo}
              color={item.color}
            />
            &nbsp;
          </>
        ))}
      </div>
    </>
  )
}
