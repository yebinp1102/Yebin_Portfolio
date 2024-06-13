
const AboutPersonalities = () => {
  return (
    <li className={`flex flex-col mb-4 `}>
      <p className="font-bold">나의 특징</p>
      <hr className='my-1.5' />
      <ul>
        <li className="text-[0.95rem] text-slate-500">
            - <span className='text-pink-500 font-semibold'>사용자 중심</span>적인 사고로 개발합니다.
        </li>
        <li className="text-[0.95rem] text-slate-500">
            - 최근엔 <span className='text-pink-500 font-semibold'>성능 개선</span>과
            <span className='text-pink-500 font-semibold'> 최적화</span>
            에 관심이 많습니다.
        </li>
        <li className="text-[0.95rem] text-slate-500">
            - <span className='text-pink-500 font-semibold'>책임감</span>이 강하고
            <span className='text-pink-500 font-semibold'> 성실</span>하기 때문에 
            밤 새워 작업하는 것을 잘합니다.
        </li>
        <li className="text-[0.95rem] text-slate-500">
            - 팀 프로젝트와 2년간의 서비스직 경험으로 협업에서 중요한 
            <span className='text-pink-500 font-semibold'> 커뮤니케이션 능력</span>을 길렀습니다.
        </li>
      </ul>
    </li>
  )
}

export default AboutPersonalities