import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from 'react';

type Props = {
  skill?: string,
  icon: string,
  percentage: string
}

const SkillList = ({skill, icon, percentage}: Props) => {
  const ref = useRef<HTMLLIElement>(null!);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <li className='flex flex-col w-full mb-8 bg-white/90 p-2 text-slate-900 rounded-lg shadow-lg hover:scale-105 transition' ref={ref}>

      {/* icon */}
      <div className="flex items-center gap-2 mb-1 ml-2">
        <img src={icon} alt={skill} className="w-[36px] object-cover" />
        <span className="text-sm font-semibold">{skill}</span>
      </div>

      {/* percent */}
      <div className="w-full flex gap-2 items-center justify-between px-1 relative">
        <div className="relative w-full h-[8px] rounded-full bg-slate-400">
          <motion.div 
            variants={{
              hidden: {width: 0},
              visible: {width: percentage}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.25, delay: 0.75}}
            className={`absolute h-full rounded-full bg-pink-500`} 
            style={{width: percentage}} 
          />
        </div>
        <p className="font-semibold">{percentage}</p>
      </div>

    </li>
  )
}

export default SkillList