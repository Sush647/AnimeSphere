import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Apiprovider } from './context/ApiContext.jsx'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import Home from './components/Home.jsx'
import Singleanime from './pages/Singleanime.jsx'
import Genrepage from './pages/Genrepage.jsx'
import Searchresult from './pages/Searchresult.jsx'
import Notfound from './pages/Notfound.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/anime/undefined' element={<Notfound/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='/anime/:animeId' element={<Singleanime/>}/>
      <Route path='/genre/:genre' element={<Genrepage/>}/>
      <Route path='/search/:name' element={<Searchresult/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apiprovider>
    <RouterProvider router={router}/>
    </Apiprovider>
  </StrictMode>,
)
