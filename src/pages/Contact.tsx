import Group from "../assets/images/group.jpg";
import Location from "../assets/images/location.png";
import Phone from "../assets/images/phone.png";
import Mail from "../assets/images/mail.png";
import GitHub from "../assets/logos/github-white.svg";
import Notion from "../assets/logos/notion-white.svg";
import Velog from "../assets/logos/velog.png";

import ContactInfo from "../components/ContactInfo";

const logos = [
  { icon: GitHub, link: "https://github.com/yebinp1102", text: "Github" },
  {
    icon: Notion,
    link: "https://www.notion.so/120f507aded64eff8a2f74641e571af2?pvs=4",
    text: "Notion",
  },
  { icon: Velog, link: "https://velog.io/@gabbie_098/posts", text: "Velog" },
];

type Props = {
  contactRef: React.RefObject<HTMLDivElement>;
};

const Contact = ({ contactRef }: Props) => {
  return (
    <div
      ref={contactRef}
      className="relative w-full bg-[#83b6e1] text-white flex items-center justify-center"
    >
      <img
        src={Group}
        alt="send_me"
        className="absolute w-[65%] object-cover max-h-[700px] top-0 z-[5]"
      />
      <div className="max-w-7xl w-full mx-auto absolute top-0">
        {/* Contact me - label */}
        <div className="absolute bg-pink-500 w-fit h-[250px] flex -top-4 rounded-md shadow-lg z-[10]">
          <h1
            className="text-3xl font-bold flex self-end mb-10 px-10 tracking-wider
            "
          >
            Contact <br />
            Me
          </h1>
          <div className=" absolute h-[7px] w-full bg-white bottom-3" />
        </div>
      </div>

      <div className="bg-white h-[600px] w-full relative mt-[300px] z-[10]">
        <div className="max-w-7xl mx-auto w-full h-full relative flex justify-between gap-20">
          <div className="text-slate-400 flex-1 self-center">
            <p>
              제게 연락할 수 있는 방법을 소개합니다. 이메일을 통해 언제든지 저에게 메시지를 보내실 수 있으며,<br/>
              Github, Notion, Velog를 통해 저에 대한 추가적인 정보들도 살펴볼 수 있습니다. 연락을 기다리겠습니다.
            </p>

            <ul className="flex flex-col gap-5 border-b py-10">
              <ContactInfo
                icon={Location}
                title="Location"
                text="서울특별시 동작구"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                text="82+ 010-3088-2540"
              />
              <ContactInfo
                icon={Mail}
                title="E-mail"
                text="yebinp1102@naver.com"
              />
            </ul>

            <h3 className="text-black-500 font-semibold mt-10">About Me :</h3>
            <ul className="flex gap-6 mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
