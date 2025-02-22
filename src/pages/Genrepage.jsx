import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useapicontext } from '../context/ApiContext';
import Card from '../components/Card';

function Genrepage() {
    const params=useParams();
    const api=useapicontext();
    const navigate=useNavigate();
    let [offset,setoffset]=useState(20)
    let [page,setpage]=useState(0)

    useEffect(()=>{
      
        api.getanimebygenre(params.genre,offset);
        window.scrollTo(0,0);
        api.setgenrecard(false)
        api.setx(false)

        return()=>{
          api.cleargenrepage()
        }
    },[params.genre])

    const nextpage=()=>{
      const newoffset = offset + 20;
    setoffset(newoffset);
    api.getanimebygenre(params.genre,newoffset);
    setpage(page + 1);
    }

    const prevpage=()=>{
      const newoffset = offset - 20;
    setoffset(newoffset);
    api.getanimebygenre(params.genre,newoffset);
    setpage(page - 1);
    }

    

    
  return (
    <div>
      <h1 className='text-white font-semibold text-xl mt-3'>{params.genre.toUpperCase()}:</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 w-full  mt-3  ">
        {
            api.animebygenre?(
                
                    api.animebygenre.data.map((anime)=>(
                        <div key={anime.id}>
              <Card
                title={anime.attributes.canonicalTitle}
                image={anime.attributes.posterImage.large}
                onClick={()=>navigate(`/anime/${anime.id}`)}
              />
            </div>
                    ))
                
            ):
            (
            <h1 className='text-white'>Loading...</h1>
            )
        }
      </div>

      <div className="w-full flex justify-center mt-10 gap-5">
        {api.animebygenre ? (
          <>
            {page > 0 && (
              <button
                className="p-2 px-4 text-white bg-yellow-500 active:bg-yellow-600 rounded-md"
                onClick={prevpage}
              >
                Previous Page
              </button>
            )}
            <button
              className="p-2 px-4 text-white bg-yellow-500 active:bg-yellow-600 rounded-md"
              onClick={nextpage}
            >
              Next Page
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Genrepage
