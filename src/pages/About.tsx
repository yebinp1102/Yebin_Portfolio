import { Link } from "react-router-dom";
import Github from "../assets/logos/github.svg";
import Notion from "../assets/logos/notion.svg";
import profile from "../assets/images/profile.png";
import HoverButton from "../components/HoverButton";
import AboutText from "../components/AboutText";
import React from "react";
import Education from "../assets/images/graduation.png";
import University from "../assets/images/university.png";
import Certification from "../assets/images/document.png";
import AboutDiv from "../components/AboutDiv";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

const About = ({ aboutRef }: Props) => {
  const buttonStyle =
    "border border-point bg-white flex items-center gap-2 rounded-full shadow-md p-2 hover:scale-110 transition";

  return (
    <section
      ref={aboutRef}
      className="w-full flex items-center justify-center py-32"
    >
      <div className="w-full max-w-6xl h-full mx-auto flex gap-8 flex-col text-lg">
        {/* info thumbnail  */}
        <div className="flex gap-4 border-b-2 border-b-slate-700 items-center justify-end text-5xl font-black tracking-wider mr-4">  
          <h1 className="border-t-2 border-slate-700 py-4 px-10">
            About <br />
            <span className="text-main self-end">Me</span>
          </h1>
        </div>

        <div className="flex gap-10">

          <div className="flex flex-col justify-evenly">
            <div className="relative w-[400px] h-[550px] bg-slate-700">
              <img
                src={profile}
                alt="profile"
                className="w-[95%] h-[full] object-cover absolute bottom-0"
              />
            </div>

            {/* link buttons */}
            <div className="flex gap-2 items-center mt-10 mx-auto">
              <HoverButton
                text={"프로젝트 보러가기"}
                hoverText={"See Projects"}
              />
              <Link
                to="https://github.com/yebinp1102?tab=overview&from=2024-01-01&to=2024-12-09"
                className={`${buttonStyle}`}
                target="_blank"
              >
                <img src={Github} alt="github" className="w-[35px]" />
              </Link>
              <Link
                to="https://www.notion.so/120f507aded64eff8a2f74641e571af2?pvs=4"
                target="_blank"
                className={`${buttonStyle}`}
              >
                <img src={Notion} alt="notion" className="w-[35px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 p-4">
            <ul className="flex flex-col gap-3 mb-4 px-3">
              <AboutText title="이름" text="박예빈" />
              <AboutText title="지원 직무" text="신입 프론트엔드 개발자" />
              <AboutText
                title="자기소개"
                text="안녕하세요! 저는 열정적이고 창의적인 프론트엔드 개발자입니다. UI/UX 디자인에 대한 관심을 가지고 있으며, 사용자 경험을 개선하기 위해 항상 노력합니다.  새로운 기술에 대한 열린 마음과 끊임없는 학습 의지를 가지고 있으며, 동료들과의 협업을 통해 함께 성장하는 것을 중요하게 생각합니다. 함께 일하고 싶은 열정적인 개발자로서 기회를 기다리고 있습니다."
              />
            </ul>
            <ul className="grid grid-cols-1 gap-4">
              <AboutDiv
                title="학력"
                list={[
                  "2018.03 ~ 2023.08 부산외국어대학교 파이데이아 창의인재학과 졸업",
                ]}
                icon={University}
              />
              <AboutDiv
                title="교육"
                list={[
                  "2023.12.29 ~ 2024.05.17 [한국휴렛팩커드] 프론트엔드 개발자 아카데미 1기 수료 - 멀티캠퍼스",
                ]}
                icon={Education}
              />
              <AboutDiv
                title="자격증"
                list={["정보처리기사"]}
                icon={Certification}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
