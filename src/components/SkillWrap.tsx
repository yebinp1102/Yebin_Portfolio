import Skill from "./Skill";
import { skills } from "../data/dummy";

const SkillWrap = () => {
  return (
    <div className="w-full flex gap-12">
      {skills.map(skill => (
        <div className="flex-1 w-full">
          <h1 className='text-white w-fit px-8 font-semibold mb-10 py-0.5 ml-1 rounded-md bg-main'>{skill.title}</h1>
          <ul>
            {skill.skillList.map(list => (
              <Skill icon={list.icon} percentage={list.percentage} skill={list.skillName} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillWrap;
