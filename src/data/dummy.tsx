import JsIcon from '../assets/logos/javascript-icon.svg';
import TsIcon from '../assets/logos/typescript-icon.svg';
import ReactIcon from '../assets/logos/react-icon.svg';
import TailWindIcon from '../assets/logos/tailwind-css.svg';
import ReduxIcon from '../assets/logos/redux.svg';
import ReactQueryIcon from '../assets/logos/react-query.svg';
import SassIcon from '../assets/logos/sass.svg';
import GitIcon from '../assets/logos/git.svg';
import NotionIcon from '../assets/logos/notion.svg';
import MongoDBIcon from '../assets/logos/mongo-db.png';
import FigmaIcon from '../assets/logos/figma.svg';

export const skills = [
  {
    title: 'Language',
    skillList : [
      {
        skillName: 'Javascript',
        icon: JsIcon,
        percentage: '90%'
      },
      {
        skillName: 'Typescript',
        icon: TsIcon,
        percentage: '85%'
      }
    ]
  },
  {
    title: 'Library',
    skillList: [
      {
        skillName: 'React',
        icon: ReactIcon,
        percentage: '95%'
      },
      {
        skillName: 'Tailwind CSS',
        icon: TailWindIcon,
        percentage: '95%'
      },
      {
        skillName: 'Redux',
        icon: ReduxIcon,
        percentage: '80%'
      },
      {
        skillName: 'React-Query',
        icon: ReactQueryIcon,
        percentage: '75%'
      },
      {
        skillName: 'Sass',
        icon: SassIcon,
        percentage: '60%'
      },
    ]
  },
  {
    title: 'Deploy & Tool',
    skillList: [
      {
        skillName: 'Git',
        icon: GitIcon,
        percentage: '85%'
      },
      {
        skillName: 'Notion',
        icon: NotionIcon,
        percentage: '70%'
      },
      {
        skillName: 'MongoDB',
        icon: MongoDBIcon,
        percentage: '80%'
      },
      {
        skillName: 'Figma',
        icon: FigmaIcon,
        percentage: '65%'
      }
    ]
  }
]