import React, { useEffect } from 'react'
import { useapicontext } from '../context/ApiContext'
import Card from '../components/Card';
import { useNavigate, useParams } from 'react-router-dom';

function Searchresult() {

    const api=useapicontext();
    const navigate=useNavigate();
    const params=useParams();

    useEffect(()=>{

        api.getanimebyname(params.name.toLowerCase());
        return()=>{
            api.clearsearch()
        }
    },[params.name])


  return (
    <div>
      <h1 className='text-white font-semibold text-xl mt-3'>Search Result: </h1>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 w-full  mt-3  ">
        {
            api.animebyname?(
                    api.animebyname.data.map((anime)=>(
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
    </div>
  )
}

export default Searchresult
