
type Props = {
  image: string;
}

const Project = ({image} : Props) => {
  const tagStyle = 'px-4 rounded-[4px] py-[1px]';
  return (
    <div className="w-full ">
      
      {/* image */}
      <div className=" relative bg-sub border p-2 rounded-lg hover:scale-105 transition cursor-pointer">
        <img src={image} alt="project_thumb" className="h-full min-h-[250px] object-cover rounded-lg" />
        <div className="bg-sub rounded-tl-3xl rounded-br-xl absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center">
          <div className='bottom-0 right-0 bg-white w-12 h-12 rounded-tl-2xl rounded-br-md flex items-center justify-center text-2xl text-blue-700'>
            &#8598;
          </div>
        </div>
      </div>


      {/* text & links */}
      <div className="flex flex-col gap-5 mt-4 px-2 text-sm text-slate-500">
        <h3 className="font-bold text-2xl text-slate-800">3D 템플릿 판매 쇼핑몰 : Sparkle Tale</h3>
        <p className="">
          자투리 시간에 전자기기에 집착하는 아이들이 시간을 좀 더 유의미하게 쓸 순 없을까?"라는 고민에서 탄생한 프로젝트.
          3D 모델을 직접 움직이며 재밌으면서 생산적인 경험을 할 수 있는 3D 템플릿을 판매하는 웹사이트.</p>

        {/* tags */}
        <ul className='flex gap-2 text-sm text-white flex-wrap font-semibold'>
          <li className={`bg-point ${tagStyle}`}>React</li>
          <li className={`bg-sub ${tagStyle}`}>Typescript</li>
          <li className={`bg-emerald-400 ${tagStyle}`}>Node.js</li>
          <li className={`bg-orange-300 ${tagStyle}`}>MongoDB</li>
        </ul>

        <ul className="flex flex-col gap-1.5 text-slate-600">
          <a target='_blank' href='https://github.com/yebinp1102'>배포 링크 : https://github.com/yebinp1102</a>
          <a target='_blank' href='https://github.com/yebinp1102/3D-storybook'>깃헙 링크 : https://github.com/yebinp1102/3D-storybook</a>
          <a target='_blank' href='https://github.com/yebinp1102/3D-storybook'>Notion 링크 : https://github.com/yebinp1102/3D-storybook</a>
        </ul>

      </div>
      
    </div>
  )
}

export default Project