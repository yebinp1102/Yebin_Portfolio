import SkillWrap from "../components/SkillWrap";

type Props = {
  skillsRef: React.RefObject<HTMLDivElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return (
    <section
      ref={skillsRef}
      className="border-y py-14 bg-main text-white"
    >
      <div className="max-w-7xl mx-auto w-full flex gap-7 border-2 border-white  relative p-8 rounded-lg">
        <h1
          className="font-bold border-l-2 border-white pl-6 text-5xl text-center tracking-widest"
          style={{
            writingMode: "vertical-lr",
            rotate: "180deg",
          }}
        >
          — My Skills
        </h1>
        <SkillWrap />
      </div>
    </section>
  );
};

export default Skills;
