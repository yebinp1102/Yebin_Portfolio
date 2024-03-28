type Props = {
  title: string;
  text: string;
  type?: string
};

const AboutText = ({ title, text, type }: Props) => {
  return (
    <li className={`flex gap-2 font-semibold ${type && 'flex-col gap-0'}`}>
      <p className=" text-main">{title} :</p>
      {type ? (
        <p className="text-[0.95rem] pl-4">&#183; {text}</p>
      ): (
        <p className="text-[0.95rem]">{text}</p>
      )}
    </li>
  );
};

export default AboutText;
