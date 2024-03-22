import Y from '../assets/images/Y.svg';
import E from '../assets/images/E.svg'
import B from '../assets/images/B.svg'
import I from '../assets/images/I.svg'
import N from '../assets/images/N.svg'

const Home = () => {
  return (
    <section className="relative w-screen bg-black-500 overflow-hidden">
      
    <div className="w-full relative h-screen bg-sub bg-gradient-to-b from-white via-sub to-main">

      <div className="relative -bottom-3 w-full h-full">
        <img src={Y} alt='Y' className='absolute w-[34vw] -left-28 -bottom-6 -rotate-12' />
        <img src={E} alt='E' className='absolute w-[34vw] left-[13vw] -bottom-3' />
        <img src={B} alt='B' className='absolute w-[34vw] left-[35.5vw] -bottom-8 rotate-12' />
        <img src={I} alt='I' className='absolute w-[34vw] left-[51vw] -bottom-6' />
        <img src={N} alt='N' className='absolute w-[34vw] left-[70vw] bottom-4 -rotate-12' />
      </div>

    </div>

    </section>
  )
}

export default Home