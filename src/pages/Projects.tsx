import Project from "../components/Project";
import sparkleTale from "../assets/images/project01.gif";
import HotBody from "../assets/images/HotBody.png";
import Dashboard from "../assets/images/dashboard-thumb.png";

type Props = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

const Projects = ({ projectsRef }: Props) => {
  return (
    <section
      ref={projectsRef}
      className="w-full pt-16 pb-40 flex justify-center items-center px-4"
    >
      <div className="max-w-7xl w-full mx-auto">
        <header className="flex flex-col gap-4 mb-6 text-sm">
          <h1 className="text-4xl font-bold">
            My
            <span className="text-main ml-2">Projects</span>
          </h1>
        </header>

        {/* 개인 프로젝트 */}
        <div className="flex flex-col">
          <hr className="mb-8 border-main border-[1px]" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
            <Project
              type="팀"
              title="모임 및 매칭 중심 운동 커뮤니티 | HOT BODY"
              desc="운동이라는 구체적인 분야에 대한 커뮤니티가 활성화 되어있지 않다. HOT BODY 운동 커뮤니티를 통해, 커뮤니티 이외에 PT 트레이너와 모임 주선을 통해 함께하는 운동의 사회적 가치를 널리 알리겠다는 취지로 개발한 웹 사이트이다."
              skills={[
                "React",
                "Typescript",
                "Node.js",
                "MongoDB",
                "React Query",
                "Figma",
                "Notion"
              ]}
              image={HotBody}
              github="https://github.com/hpe2/HOT_BODY"
              deploy="https://hot-body.vercel.app"
            />
            <Project
              type="개인"
              title="3D 템플릿 판매 쇼핑몰 | Sparkle Tale"
              image={sparkleTale}
              desc='자투리 시간에 전자기기에 집착하는 아이들이 시간을 좀 더 유의미하게 쓸 순 없을까?"라는 고민에서 탄생한 프로젝트.
                    3D 모델을 직접 움직이며 재밌으면서 생산적인 경험을 할 수 있는 3D 템플릿을 판매하는 웹 사이트이다.'
              skills={[
                "React",
                "Typescript",
                "Node.js",
                "MongoDB",
                "three.js",
                "React Query",
              ]}
              deploy="https://3-d-storybook.vercel.app"
              github="https://github.com/yebinp1102/3D-storybook"
            />
            <Project
              type="개인"
              title="데이터 시각화 | 따릉이 Dashboard"
              image={Dashboard}
              desc="서울 공공시의 오픈 API 중 자전거 사용 통계에 대한 데이터를 rechart.js 라이브러리를 사용해서 도식화 한 프로젝트. 
                    기존 따릉이 웹 사이트의 일부 페이지를 리뉴얼 하고 API 응답으로 받은 데이터 월/일별 통계를 차트화 했다."
              skills={[
                "React",
                "Typescript",
                "rechart.js"
              ]}
              deploy="https://dashboard-v2-coral.vercel.app"
              github="https://github.com/yebinp1102/Dashboard-v2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
