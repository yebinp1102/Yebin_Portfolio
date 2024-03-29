import { Link } from "react-router-dom";
import Github from "../assets/logos/github.svg";
import Notion from '../assets/logos/notion.svg';
import profile from "../assets/images/profile.png";
import HoverButton from "../components/HoverButton";
import AboutText from "../components/AboutText";
import React from "react";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>
}

const About = ({aboutRef}: Props) => {
  const buttonStyle = 'border border-point bg-white flex items-center gap-2 rounded-full shadow-md p-2'
  
  return (
    <section ref={aboutRef} className="w-full bg-white flex items-center justify-center py-24">
      <div className="w-full max-w-6xl h-full mx-auto flex gap-8 flex-col text-lg">
        {/* info thumbnail  */}
        <div className="flex items-center gap-12">
          <img
            src={profile}
            alt="profile"
            className="w-[400px] h-[450px] border bg-black-500 object-cover"
          />
          <div className="flex flex-col p-4">
            <h1 className="text-5xl font-bold text-main mb-12">— About Me</h1>
            <ul className="flex flex-col gap-3">
              <AboutText title="성명" text="박예빈" />
              <AboutText title="지원 직무" text="프론트엔드" />
              <AboutText title="학력" text="2018.03 ~ 2023.08 부산외국어대학교 파이데이아 창의인재학과 졸업" type="list" />
              <AboutText title="교육" text="2023.12.29 ~ 2024.05.17 [한국휴렛팩커드] 프론트엔드 개발자 아카데미 1기 - 멀티캠퍼스" type="list" />
              <AboutText title="자격증" text="정보처리기사" type="list" />
            </ul>

            {/* link buttons */}
            <div className="flex gap-2 items-center mt-10">
              <HoverButton text={'프로젝트 보러가기'} hoverText={'See Projects'} />
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
        </div>

      </div>
    </section>
  );
};

export default About;
