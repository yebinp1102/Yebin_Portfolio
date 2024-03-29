import SkillWrap from "../components/SkillWrap";

type Props = {
  skillsRef: React.RefObject<HTMLDivElement>;
};

const Skills = ({ skillsRef }: Props) => {
  return (
    <section
      ref={skillsRef}
      className="border-y py-28 bg-main text-white"
    >
      <p className="text-center mb-7 text-slate-100">
        아래는 웹 개발 시 사용하는 스킬들과 그에 대한 이해도에 대한 정보입니다.
        이해도는 주관적인 기준에서 작성했다는 점 유의해주세요.
      </p>
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
