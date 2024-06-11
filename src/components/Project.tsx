
type Props = {
  type: string,
  title: string,
  image: string,
  desc: string,
  skills: String[],
  deploy: string,
  github: string
}

const Project = ({type, title, image, desc, skills, deploy, github} : Props) => {
  const tagStyle = 'px-4 rounded-[4px] py-[1px]';
  const skillsBgColor = (idx: number) => {
    if(idx % 6 === 0){
      return 'bg-point'
    }else if (idx % 6 === 1){
      return 'bg-sub'
    }else if (idx % 6 === 2){
      return 'bg-emerald-400'
    }else if (idx % 6 === 3){
      return 'bg-orange-300'
    } else if (idx % 6 === 4){
      return 'bg-violet-400'
    } else if (idx % 6 === 5){
      return 'bg-rose-400'
    }
  }
  return (
    <div className="w-full ">
      <p className={`${type === '개인' ? 'text-main' : 'text-pink-400'} font-semibold text-2xl mb-4`}>[{type}]</p> 
      {/* image */}
      <div className={`relative ${type === '개인' ? 'bg-main' : 'bg-pink-400'} border p-2 rounded-lg hover:scale-105 transition cursor-pointer`}>
        <img src={image} alt="project_thumb" className="w-full h-full min-h-[250px] max-h-[250px] object-cover rounded-lg" />
        <div className={`${type === '개인' ? 'bg-main' : 'bg-pink-400'} rounded-tl-3xl rounded-br-xl absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center`}>
          <div className={`bottom-0 right-0 bg-white w-12 h-12 rounded-tl-2xl rounded-br-md flex items-center justify-center text-2xl ${type === '개인' ? 'text-blue-700' : 'text-pink-500'}`}>
            &#8598;
          </div>
        </div>
      </div>


      {/* text & links */}
      <div className="flex flex-col gap-5 mt-4 px-2 text-sm text-slate-500">
        <h3 className="font-bold text-xl text-slate-800">
          {title}</h3>
        <p className="">
          {desc}</p>

        {/* tags */}
        <ul className='flex gap-2 text-sm text-white flex-wrap font-semibold'>
          {skills.map((skill, idx) => (
            <li className={`${tagStyle} ${skillsBgColor(idx)}`}>{skill}</li>
          ))}
        </ul>

        <ul className="flex flex-col gap-1.5 text-slate-600">
          <a target='_blank' href={deploy}>배포 링크 : {deploy}</a>
          <a target='_blank' href={github}>깃헙 링크 : {github}</a>
        </ul>

      </div>
      
    </div>
  )
}

export default Project