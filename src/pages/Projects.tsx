import Project from "../components/Project"
import sparkleTale from '../assets/images/project01.gif'
import MusicProject from '../assets/images/MusicProject.png';

type Props = {
  projectsRef: React.RefObject<HTMLDivElement>
}

const Projects = ({projectsRef}: Props) => {
  return (
    <section ref={projectsRef} className="w-full py-24 flex justify-center items-center px-4">
      <div className="max-w-7xl w-full mx-auto">

        <header className="flex flex-col gap-4 mb-20 text-sm">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <p className=" text-slate-400 font-semibold">모든 프로젝트는 풀스택으로 진행했으며, 배포 링크와 깃헙 링크 정보를 제공합니다.</p>
        </header>


        {/* 개인 프로젝트 */}
        <div className="flex flex-col mb-28">
          <h1 className="font-bold text-2xl text-end text-main mb-8 border-b border-main pb-4">개인 프로젝트</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
            <Project image={sparkleTale} />
            <Project image={MusicProject} />
            <Project image={MusicProject} />
          </div>
        </div>

        {/* 팀 프로젝트 */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-end text-pink-500 mb-8 border-b border-pink-500 pb-4">팀 프로젝트</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
            <Project image={MusicProject} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects