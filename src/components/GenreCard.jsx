import React from 'react'
import { useNavigate } from 'react-router-dom'

function GenreCard() {
  const navigate=useNavigate()

  let genres=[{"name":"action"},{"name":"adventure"},{"name":"comedy"},{"name":"drama"},{"name":"fantasy"},{"name":"romance"},{"name":"sci-fi"},{"name":"horror"}]
  return (
    <div className='bg-gray-700 p-9 grid grid-cols-2 grid-rows-5 gap-2 items-center rounded-md'>
        <h1 className='col-span-2 font-semibold text-white text-xl'>Explore Genre</h1>
        {
          genres.map((genre)=>(
            <input type="text" name="" id="" value={genre.name} key={genre.name} readOnly className=' py-1 w-28 text-center outline-none rounded-md bg-gray-800 text-white cursor-pointer' onClick={(e)=>navigate(`/genre/${e.target.value}`)}/>
          ))
        }
       
      
    </div>
  )
}

export default GenreCard
