const AboutIntro = () => {
  return (
    <li className={`flex flex-col mb-4 gap-2 `}>
      <p className="font-bold">소개 글</p>
      <p className="text-[0.95rem] text-slate-500">
        “사용자와 기업은 좋은 UX에 마음을 움직인다”
      </p>
      <p className="text-[0.95rem] text-slate-500 mb-4 leading-6">
        저는 개발자이면서 사용자이기도 합니다. 다양한 웹 서비스를 사용할 때
        사용자의 관점에서 UI/UX를 평가하며, 이 평가는 이후 서비스 사용을 유지할
        것인가에 대한 기준이 됩니다. 프론트엔드 개발자는 사용자에게 긍정적인
        UX를 제공하기 위해 좋은 UI뿐만 아니라 에러 핸들링이나 성능 최적화와 같은
        보이지 않는 것에도 노력을 기울여야 합니다. 저는 양측면을 고민하고
        결과물로 도출하는 과정이 즐겁습니다. 사용자에게 좋은 UX를 제공하기 위한
        기능과 서비스들을 제작하면서 긍정적이고 의미있는 상호작용을 만들어내고
        싶습니다.
      </p>
    </li>
  );
};

export default AboutIntro;
