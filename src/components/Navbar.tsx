import { motion } from "framer-motion";
import React from "react";
import Home from "../assets/images/home.svg";
import User from "../assets/images/user.png";
import Pen from '../assets/images/pen.png';
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

const Navbar = ({ scrollToSection, bannerRef, aboutRef, skillsRef, projectsRef, contactRef}: Props) => {
  const buttons = [
    {
      icon: Home,
      ref: bannerRef,
    },
    {
      icon: User,
      ref: aboutRef,
    },
    {
      icon: Pen,
      ref: skillsRef
    },
    {
      icon: Docs,
      ref: projectsRef
    },
    {
      icon: Mail,
      ref: contactRef
    }
  ];

  return (
    <motion.header
      className="bottom-10 right-10 fixed z-[100]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: "0" }}
      transition={{ ease: "backIn", duration: 0.5, delay: 3.5 }}
    >
      <menu className="flex flex-col items-center gap-5">
        {buttons.map((button) => (
          <div className="bg-point cursor-pointer rounded-full border border-white shadow-lg w-[50px] h-[50px] p-2 hover:scale-110">
            <img
              src={button.icon}
              onClick={() => scrollToSection(button.ref)}
              className="w-full object-cover"
            />
          </div>
        ))}
      </menu>
    </motion.header>
  );
};

export default Navbar;
