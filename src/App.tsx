import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path='/' element={<Home  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
