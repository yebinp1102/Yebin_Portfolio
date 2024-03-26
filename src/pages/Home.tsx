import Y from '../assets/images/Y.svg';
import E from '../assets/images/E.svg'
import B from '../assets/images/B.svg'
import I from '../assets/images/I.svg'
import N from '../assets/images/N.svg'
import profile from '../assets/images/profile.png';
import dots from '../assets/images/dots-w.png';
import brush from '../assets/images/brush.png';
import {easeIn, motion} from 'framer-motion';

const Home = () => {
  return (
    <section className="relative w-screen bg-black-500 overflow-hidden">
      
    <div className="w-full relative h-screen bg-sub bg-gradient-to-b from-white to-main/95">

      {/* drop alphabet effects */}
      <div className="absolute w-full h-full">
        <motion.img 
          src={Y} 
          alt='Y' 
          className='absolute w-[29vw] -left-12 -bottom-6 -rotate-12'
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1, y: -10, rotate: -12}}
          transition={{ease: "backInOut",duration: 1, delay: 0.5}}
        />
        <motion.img src={E} 
          alt='E' 
          className='absolute w-[29vw] left-[16vw] -bottom-3' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ease: "backInOut",duration: 1, delay: 0.8}}
        />
        <motion.img 
          src={B} 
          alt='B' 
          className='absolute w-[29vw] left-[37vw] -bottom-8 rotate-12' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1, y: -10, rotate: 12}}
          transition={{ease: "backInOut",duration: 1, delay: 1}}
        />
        <motion.img 
          src={I} 
          alt='I' 
          className='absolute w-[29vw] left-[54vw] -bottom-3' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ease: "backInOut",duration: 1, delay: 0.75}}
        />
        <motion.img 
          src={N} 
          alt='N' 
          className='absolute w-[29vw] left-[74vw] bottom-0 -rotate-12' 
          initial={{opacity: 0, y: -800}}
          whileInView={{opacity: 1, y: -10, rotate: -12}}
          transition={{ease: "backInOut",duration: 1, delay: 1.5}}
        />
      </div>

      <motion.div 
        className="absolute bg-main rounded-br-full"
        initial={{width: "0", height: "0"}}
        whileInView={{width: "100vw", height: "100vh", borderRadius: 0}}
        transition={{ease: "backIn", duration:1.5, delay: 2}}
      />


      <motion.div 
        className="absolute w-full h-full flex gap-12 justify-center items-center"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ease: easeIn, duration: 1, delay: 4}}
      >
        
        {/* text */}
        <motion.div 
          className='h-full flex justify-center text-white flex-col'
          initial={{opacity: 0, x: -100 }}
          whileInView={{opacity: 1, x: 0}}
          transition={{ease: easeIn, duration: 0.75, delay: 4}}
        >
          <p className='text-xl font-normal bg-point w-fit px-6 rounded-md py-0.5 mb-6'>Front-End Developer</p>
          <h1 className='text-7xl font-black leading-[1.2]'>Hello, <br /> I am <span className='text-point'>Yebin Park.</span></h1>
          <p className='mt-12 text-xl'>디자인과 기술의 조화를 항상 추구하는 창의적인 웹 개발자 입니다.</p>
          <p className='text-lg mt-2 leading-relaxed'>
            I am a creative web developer who always strives for <br/> the harmony between design and technology.
          </p>
          <button className='w-fit border-2 border-point text-point bg-white px-8 py-1 font-bold text-xl mt-10'>더보기</button>
        </motion.div>
        
        {/* images */}
        <motion.div 
          className='h-fit relative flex justify-center items-center w-[560px]'
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 4.5}}
        >

          {/* brush */}
          <img src={brush} alt='brush' className='absolute brightness-150 rotate-45 -right-48 top-12 w-[90%] opacity-60' />

          {/* 점선 */}
          <img src={dots} alt='dots' className='relative w-full object-cover' />
          
          {/* 도형들 */}
          <div className="bg-gray-300 w-[22%] h-[22%] opacity-60 absolute top-[50%] left-[20%]"></div>
          <div className="bg-point w-[32%] h-[32%] rounded-full opacity-60 absolute -top-8 left-2"></div>
          <div className="bg-point w-[20%] h-[20%] rounded-full opacity-60 absolute bottom-6 left-6"></div>
          
          
          {/* profile */}
          <div className="bg-point rounded-full overflow-hidden w-[60%] h-[60%] right-[13%] absolute">
            <img src={profile} alt='profile' className='relative -bottom-[7.5%] w-full object-cover' />
          </div>

        </motion.div>

      </motion.div>



    </div>

    </section>
  )
}

export default Home