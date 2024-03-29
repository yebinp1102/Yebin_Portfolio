import SkillList from "./SkillList";
import { skills } from "../data/dummy";

const SkillWrap = () => {
  return (
    <div className="w-full flex gap-16 py-2">
      {skills.map(skill => (
        <div className="flex-1 w-full">
          <h1 className='text-white bg-pink-400 border w-fit px-8 font-semibold mb-12 py-1 ml-1 rounded-md'>{skill.title}</h1>
          <ul>
            {skill.skillList.map(list => (
              <SkillList icon={list.icon} percentage={list.percentage} skill={list.skillName} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillWrap;
