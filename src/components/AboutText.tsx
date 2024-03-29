type Props = {
  title: string;
  text: string;
};

const AboutText = ({ title, text }: Props) => {
  return (
    <li className={`flex flex-col mb-4 `}>
      <p className="font-bold">{title} :</p>
        <p className="text-[0.95rem] text-slate-500">{text}</p>
    </li>
  );
};

export default AboutText;
