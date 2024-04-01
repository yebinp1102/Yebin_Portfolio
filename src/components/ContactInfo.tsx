
type Props = {
  icon: string,
  title :string
  text: string,
}
const ContactInfo = ({icon, title, text} : Props) => {
  return (
    <li className="flex gap-2 items-center">
    <div className="w-11 h-11 bg-pink-500 p-2.5 rounded-full flex items-center justify-center">
      <img src={icon} alt="location" className="w-full" />
    </div>
    <div className="flex flex-col text-[0.9rem]">
      <span className="text-black-500 font-semibold">{title}</span>
      <p>{text}</p>
    </div>
  </li>
  )
}

export default ContactInfo