import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Home from "../assets/images/home.svg";
import User from "../assets/images/user.png";
import Pen from "../assets/images/pen.png";
import Mail from "../assets/images/mail.png";
import Docs from "../assets/images/document.png";

type ScrollToSectionType = (ref: React.RefObject<HTMLDivElement>) => void;

type Props = {
  scrollToSection: ScrollToSectionType;
  bannerRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
};

const Navbar = ({
  scrollToSection,
  bannerRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isHomeHovered, setIsHomeHovered] = useState<boolean>(false);
  const [isAboutHovered, setIsAboutHovered] = useState<boolean>(false);
  const [isSkillHovered, setIsSkillHovered] = useState<boolean>(false);
  const [isProjectHovered, setIsProjectHovered] = useState<boolean>(false);
  const [isContactHovered, setIsContactHovered] = useState<boolean>(false);

  const buttons = [
    {
      icon: Home,
      ref: bannerRef,
      text: "Home",
      state: isHomeHovered,
      stateFnc: setIsHomeHovered,
    },
    {
      icon: User,
      ref: aboutRef,
      text: "About",
      state: isAboutHovered,
      stateFnc: setIsAboutHovered,
    },
    {
      icon: Pen,
      ref: skillsRef,
      text: "Skills",
      state: isSkillHovered,
      stateFnc: setIsSkillHovered,
    },
    {
      icon: Docs,
      ref: projectsRef,
      text: "Project",
      state: isProjectHovered,
      stateFnc: setIsProjectHovered,
    },
    {
      icon: Mail,
      ref: contactRef,
      text: "Contact",
      state: isContactHovered,
      stateFnc: setIsContactHovered,
    },
  ];

  useEffect(() => {
    setTimeout(() => setShowMenu(true), 5000);
  }, []);

  return (
    <header className="bottom-10 right-10 fixed z-[100]">
      <motion.menu
        className="flex flex-col items-center gap-4 transition"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "backIn", duration: 0.5, delay: 3.5 }}
      >
        <div className="relative w-[55px] h-[335px] py-[2.5px] overflow-hidden">
            <div className={`flex flex-col items-center gap-5 transition transform ${showMenu ? 'translate-y-0' : 'translate-y-[333px]'}`}>
              {buttons.map((button) => (
                <div
                  onMouseEnter={() => button.stateFnc(true)}
                  onMouseLeave={() => button.stateFnc(false)}
                  onClick={() => scrollToSection(button.ref)}
                  className="bg-point hover:bg-pink-500 cursor-pointer rounded-full border border-white shadow-lg w-[50px] h-[50px] p-2 hover:scale-110 transition flex items-center justify-center"
                >
                  {button.state ? (
                    <p className="text-white text-xs font-semibold">
                      {button.text}
                    </p>
                  ) : (
                    <img src={button.icon} className="w-[90%] object-cover" />
                  )}
                </div>
              ))}
            </div>
          
        </div>

        <div
          className="bg-point text-white text-3xl hover:bg-pink-500 cursor-pointer rounded-full border border-white shadow-lg w-[51px] h-[51px] p-2 hover:scale-110 transition flex items-center justify-center"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <p>&#8681;</p> : <p className=" rotate-180">&#8681;</p>}
        </div>
      </motion.menu>
    </header>
  );
};

export default Navbar;
