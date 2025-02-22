import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' h-fit w-full lg:px-36 px-4'>
     <Navbar/>
     <div className='min-h-screen'>
     <Outlet/>
     </div>
     <div className='h-10'></div>
     <Footer/>
    </div>
    </>
  )
}

export default App
