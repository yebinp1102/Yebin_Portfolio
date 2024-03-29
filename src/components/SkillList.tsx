
type Props = {
  skill?: string,
  icon: string,
  percentage: string
}

const SkillList = ({skill, icon, percentage}: Props) => {
  return (
    <li className='flex flex-col w-full mb-6'>

      {/* icon */}
      <div className="flex items-center gap-2">
        <img src={icon} alt={skill} className="w-[40px] object-cover" />
        <span className="text-sm font-semibold">{skill}</span>
      </div>

      {/* percent */}
      <div className="w-full flex gap-2 items-center justify-between px-1 relative">
        <div className="relative w-full h-[6px] rounded-full bg-slate-300">
          <div className={`absolute h-full rounded-full bg-main`} style={{width: percentage}} />
        </div>
        <p className="text-sm font-semibold">{percentage}</p>
      </div>

    </li>
  )
}

export default SkillList