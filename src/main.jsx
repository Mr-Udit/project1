import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from "../src/App"
import Navbar from './components/Navbar'
import About  from "./components/About"
import NotFound from './components/PageNotFound'
const router = createBrowserRouter([
  {
    path: '/',
    element: <><App /></>,
  },
  {
    path: '/about',
    element: <> <Navbar/> <About/> </>
  },
  {
    path: '/courses',
    element: <> <Navbar/>  </>
  },
  {
    path: '/tutorials',
    element: <> <Navbar/>  </>
  },
  {
    path: '/notes',
    element: <> <Navbar/> </>
  },
  {
    path: '*',
    element: <> <Navbar/> <NotFound/> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
