import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className='w-14 h-14 rounded-lg  bg-white items-center justify-center flex font-bold shadow-md'>
        <p className="blue-gradient_text">Yebin</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
          자기소개
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
          프로젝트
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar