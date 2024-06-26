import { useRef } from 'react';
import Banner from '../components/Banner';
import About from './About';
import Navbar from '../components/Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const bannerRef = useRef<HTMLDivElement>(null!);
  const aboutRef = useRef<HTMLDivElement>(null!);
  const skillsRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);


  const scrollToSection = (ref : React.RefObject<HTMLDivElement>) => {
    if(ref.current){
      ref.current.scrollIntoView( {behavior: 'smooth'} );
    }
  }
  
  return (
    <section className="relative w-screen overflow-hidden flex flex-col">
      <Navbar 
        scrollToSection={scrollToSection} 
        bannerRef={bannerRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Banner bannerRef={bannerRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef}  />
      <Contact  contactRef={contactRef} />
    </section>
  )
}

export default Home