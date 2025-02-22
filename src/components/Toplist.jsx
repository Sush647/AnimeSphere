import React, { useEffect } from 'react'
import { useapicontext } from '../context/ApiContext'
import { useNavigate } from 'react-router-dom';

function Toplist() {
    const api=useapicontext();
    const navigate=useNavigate();

    useEffect(()=>{
        api.gettoplist();
    },[])

   
  return (
    <div className='bg-gray-700 p-5 flex flex-col  rounded-md '>
        <h1 className='font-semibold text-white text-xl'>TOP-10</h1>
      {
        api.toplist?(
            <ol className='list-decimal flex flex-col justify-center gap-8 mt-4'>
                {
                    api.toplist.data.map((anime)=>(
                            <li className='text-white flex gap-2 cursor-pointer' key={anime.id} onClick={()=>navigate(`/anime/${anime.id}`)}>
                            <img src={anime.attributes.posterImage.tiny} alt="" className='h-12 w-12' />
                            <div>
                            <h1>{anime.attributes.canonicalTitle}</h1>
                            <h1>{anime.attributes.averageRating}</h1>
                            </div>
                            </li>
                    ))
                }

            </ol>
        )
        :

        null
        
      }
    </div>
  )
}

export default Toplist
