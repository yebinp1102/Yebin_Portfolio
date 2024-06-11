import { useState } from "react";
import Arrow from "../assets/images/arrow.svg";

type ScrollToSectionType = (ref: React.RefObject<HTMLDivElement>) => void;

type Props = {
  text: string;
  hoverText: string;
  ref: React.RefObject<HTMLDivElement>,
  scrollToSection: ScrollToSectionType
};

const HoverButton = ({ text, hoverText, ref, scrollToSection }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  console.log(ref);

  return (
    <div
      className={`
        relative flex items-center justify-center w-[260px] h-[58px] 
        rounded-full shadow-lg border border-white/50 cursor-pointer
        ${isHovered ? "bg-pink-500" : "bg-gradient-to-r from-point to-pink-500"}
      `}
      onClick={()=> scrollToSection(ref)}
    >
      <div
        className="w-full absolute h-full"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <button
          className={`
            absolute top-1 left-0 bg-white transition duration-300
            w-[47px] h-[47px] rounded-full text-slate-500
            flex items-center justify-center
            ${!isHovered ? "translate-x-1.5" : " translate-x-[204px]"}
          `}
        >
          <img
            src={Arrow}
            alt="arrow"
            className={`relative w-[26px] brightness-110 ${
              !isHovered ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <p className="font-bold text-base text-white">
        {isHovered ? hoverText : text}
      </p>
    </div>
  );
};

export default HoverButton;
