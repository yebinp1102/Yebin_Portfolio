import SkillWrap from "../components/SkillWrap";

type Props = {
  skillsRef: React.RefObject<HTMLDivElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return (
    <section
      ref={skillsRef}
      className="flex gap-7 border-2 border-main relative p-8 rounded-lg"
    >
      <h1
        className="text-sub font-bold border-l-2 border-sub pl-6 text-5xl text-center tracking-widest"
        style={{
          writingMode: "vertical-lr",
          rotate: "180deg",
        }}
      >
        — My Skills
      </h1>
      <SkillWrap />
    </section>
  );
};

export default Skills;
