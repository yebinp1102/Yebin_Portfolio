import profile from "../assets/images/resume_profile.jpg";
import AboutText from "../components/AboutText";
import AboutPersonalities from "../components/AboutPersonalities";
import AboutIntro from "../components/AboutIntro";
import GitHub from "../assets/logos/github-white.svg";
import Notion from "../assets/logos/notion-white.svg";
import Velog from "../assets/logos/velog.png";

type Props = {
  aboutRef: React.RefObject<HTMLDivElement>;
};

const logos = [
  { icon: GitHub, link: "https://github.com/yebinp1102", text: "Github" },
  {
    icon: Notion,
    link: "https://www.notion.so/120f507aded64eff8a2f74641e571af2?pvs=4",
    text: "Notion",
  },
  { icon: Velog, link: "https://velog.io/@gabbie_098/posts", text: "Velog" },
];

const About = ({ aboutRef }: Props) => {
  return (
    <section
      ref={aboutRef}
      className="w-full flex items-center justify-center py-16"
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
            <div className="w-[350px] h-[450px] bg-sub flex items-center justify-center p-2">
              <img
                src={profile}
                alt="profile"
                className="w-[95%] h-[95%] object-cover"
              />
            </div>

            {/* link buttons */}
            <ul className="flex gap-6 mt-2 justify-center">
              {logos.map((logo) => (
                <li className="flex flex-col gap-1 items-center">
                  <a
                    href={`${logo.link}`}
                    target="_blank"
                    className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center"
                  >
                    <img src={logo.icon} alt="location" className="w-7" />
                  </a>
                  <p className="text-slate-500 text-xs">{logo.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col flex-1 p-4 pt-0">
            <ul className="flex flex-col gap-8 mb-4 px-3">
              <AboutText title="지원 직무" text="신입 프론트엔드 개발자" />
              <AboutPersonalities />
              <AboutIntro />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
