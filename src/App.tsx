import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Root from './Root'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/about', element: <About />},
      {path: '/skills', element: <Skills />},
      {path: '/projects', element: <Projects />},
      {path: '/contact', element: <Contact />}
    ]
  }
])


const App = () => {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
