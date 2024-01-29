import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <main className='bg-slate-300/20'>
      <BrowserRouter>
        Navbar
        <Routes>
          <Route path='/' element={'Home'} />
          <Route path='/about' element={'About'} />
          <Route path='/projects' element={'Projects'} />
          <Route path='/contact' element={'Contact'} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
