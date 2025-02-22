import React, { useState } from 'react'
import { useapicontext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom';
import GenreCard from './GenreCard';
import logo from "../assets/anime.png"
import icon from "../assets/search.png"
import menu from "../assets/menu.png"
import cross from "../assets/cross.png"
function Navbar() {
    let[visible,setvisible]=useState(false)
    const api=useapicontext();
    const navigate=useNavigate();
    let [search,setsearch]=useState("");
   

    const getsearchresult=()=>{
      if(search==""){
        return
      }
      
      navigate(`/search/${search}`)
      setsearch("")
      setvisible(false)

    }

    const togglecard=()=>{
      api.setgenrecard(!api.genrecard)
      api.setx(!api.x);
    }

    


    
  return (
    <>
    <div className='h-20 flex items-center justify-between '>
      <div className='flex items-center gap-2 lg:gap-5 '>
        <img src={api.x?cross:menu} className='text-white lg:hidden h-10' onClick={togglecard}/>
        <div className='text-white flex gap-2 justify-center items-center cursor-pointer' onClick={()=>navigate('/')}>
          <img src={logo} alt="" className='h-16'/>
          <h1 className='font-semibold'>AnimeSphere</h1>
        </div>
        <div className={`${visible?
        "flex":"hidden"} flex gap-5 items-center lg:flex absolute top-20 lg:relative lg:top-0 z-10`}>
        <input type="search" name="" id="" placeholder='search...' value={search} onChange={(e)=>setsearch(e.target.value)} className={`  p-2 lg:p-3 lg:w-96 rounded-full outline-none text-white bg-gray-700 px-3` } />
         <div className='h-12 w-12 rounded-full bg-gray-700 text-white flex justify-center items-center cursor-pointer' onClick={getsearchresult}>
          <img src={icon} alt="" className='h-6' />
         </div>
         </div> 
      </div>

      <div className='flex items-center gap-4'>
      <div className='h-10 w-10 rounded-full bg-gray-700 text-white flex justify-center items-center cursor-pointer lg:hidden ' onClick={()=>setvisible(!visible)}>
          <img src={icon} alt="" className='h-6' />
         </div>
        <a className='lg:block lg:p-3 lg:px-8 hidden text-white bg-yellow-500 rounded-full active:bg-yellow-600' href="https://sushantporfolio.netlify.app/" target="_blank">About me</a>
      </div>
    </div>

    <div className={`${api.genrecard?"absolute":"hidden"} lg:hidden  z-10`}>
      <GenreCard/>
    </div>


    </>
  )
}

export default Navbar
