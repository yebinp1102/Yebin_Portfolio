
type Props = {
  title: string,
  list: string[],
  icon: string
}

const AboutDiv = ({title, list, icon} : Props) => {
  return (
    <div className="border-2 border-sub rounded-md p-4 w-full">

      <div className="flex items-center gap-2.5 mb-2">
        <div className="bg-main w-[35px] h-[35px] rounded-full p-2 flex items-center justify-center">
          <img src={icon} alt="icon" />
        </div>
        <h1 className="font-bold">{title} : </h1>
      </div>

      {list.map(text => (
        <p className="text-[0.9rem] ml-4 text-slate-600">⦿ {text}</p>
      ))}

    </div>
  )
}

export default AboutDiv