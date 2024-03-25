import Y from '../assets/images/Y.svg';
import E from '../assets/images/E.svg'
import B from '../assets/images/B.svg'
import I from '../assets/images/I.svg'
import N from '../assets/images/N.svg'
import profile from '../assets/images/profile.png';
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <section className="relative w-screen bg-black-500 overflow-hidden">
      
    <div className="w-full relative h-screen bg-sub bg-gradient-to-b from-white to-main/90">

      {/* drop alphabet effects */}
      <div className="absolute w-full h-full">
        <motion.img 
          src={Y} 
          alt='Y' 
          className='absolute w-[29vw] -left-12 -bottom-6 -rotate-12'
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1.25, y: -10, rotate: -12}}
          transition={{ease: "backInOut",duration: 1, delay: 0.5}}
        />
        <motion.img src={E} 
          alt='E' 
          className='absolute w-[29vw] left-[16vw] -bottom-3' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1.25, y: 0}}
          transition={{ease: "backInOut",duration: 1, delay: 1.25}}
        />
        <motion.img 
          src={B} 
          alt='B' 
          className='absolute w-[29vw] left-[37vw] -bottom-8 rotate-12' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1.25, y: -10, rotate: 12}}
          transition={{ease: "backInOut",duration: 1, delay: 1}}
        />
        <motion.img 
          src={I} 
          alt='I' 
          className='absolute w-[29vw] left-[54vw] -bottom-3' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1.25, y: 0}}
          transition={{ease: "backInOut",duration: 1, delay: 0.75}}
        />
        <motion.img 
          src={N} 
          alt='N' 
          className='absolute w-[29vw] left-[74vw] bottom-0 -rotate-12' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1.25, y: -10, rotate: -12}}
          transition={{ease: "backInOut",duration: 1, delay: 1.5}}
        />
      </div>

      <div className="absolute w-full h-full">
        <div className="relative flex items-center justify-center h-full border">
          <div className="absolute bg-gradient-to-br from-blue-400 via-sky-400 to-emerald-400 bg_shape w-[500px] h-[500px]"></div>
          <div className="absolute top-2 left-16 bg-gray-800 overflow-hidden bg_shape w-[480px] h-[480px]">
            <img src={profile} className='absolute -bottom-1 w-[90%] left-[5%]' />
          </div>

        </div>

      </div>

    </div>

    </section>
  )
}

export default Home