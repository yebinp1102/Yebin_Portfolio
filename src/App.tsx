import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {

  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={'About'} />
          <Route path='/projects' element={'Projects'} />
          <Route path='/contact' element={'Contact'} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
