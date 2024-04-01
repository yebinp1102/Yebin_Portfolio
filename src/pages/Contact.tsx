import Group from "../assets/images/group.jpg";
import Location from "../assets/images/location.png";
import Phone from "../assets/images/phone.png";
import Mail from "../assets/images/mail.png";
import ContactInfo from "../components/ContactInfo";

type Props = {
  contactRef: React.RefObject<HTMLDivElement>;
};

const Contact = ({ contactRef }: Props) => {
  return (
    <div
      ref={contactRef}
      className="relative h-screen w-full bg-[#83b6e1] text-white flex items-center justify-center"
    >
      <img
        src={Group}
        alt="send_me"
        className="absolute w-[65%] object-cover max-h-[700px] top-0 z-[5]"
      />
      <div className="max-w-7xl w-full mx-auto absolute top-0">
          {/* Contact me - label */}
          <div className="absolute bg-pink-500 w-fit h-[250px] flex -top-4 rounded-md shadow-lg z-[10]">
            <h1 className="text-3xl font-bold flex self-end mb-10 px-6">
              Contact Me
            </h1>
            <div className=" absolute h-[7px] w-full bg-white bottom-3" />
          </div>
      </div>

      <div className="bg-white h-[600px] w-full relative mt-40 z-[10]">
        <div className="max-w-7xl mx-auto w-full border h-full relative flex justify-between gap-20">

          <div className="text-slate-400 flex-1 self-center">
            <p>
              제게 연락할 수 있는 방법을 소개합니다. 이메일을 통해 언제든지
              저에게 메시지를 보내실 수 있으며, 저에 대한 추가적인 정보들도
              살펴볼 수 있습니다. 언제든지 연락주세요!{" "}
            </p>

            <ul className="flex flex-col gap-5 border-b py-12">
              <ContactInfo
                icon={Location}
                title="Location"
                text="서울특별시 동작구"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                text="82+ 010-3088-XXXX"
              />
              <ContactInfo
                icon={Mail}
                title="E-mail"
                text="yebinp1102@naver.com"
              />
            </ul>

            <h3 className="text-black-500 font-semibold">About Me</h3>
            <ul className="flex gap-4 mt-4">
              <li className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center">
                <img src={Location} alt="location" className="w-7 " />
              </li>
              <li className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center">
                <img src={Location} alt="location" className="w-7 " />
              </li>
              <li className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center">
                <img src={Location} alt="location" className="w-7 " />
              </li>
              <li className="w-11 h-11 bg-pink-500 rounded-full flex items-center justify-center">
                <img src={Location} alt="location" className="w-7 " />
              </li>
            </ul>
          </div>

          <div className="flex-1 ">
            <h3 className="text-black-500">Send me a message</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
