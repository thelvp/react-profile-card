import { Skill } from './skill';
import { skills } from './../data/skills';

export const SkillList = () => {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
};
