import React, { useEffect } from "react";
import { useapicontext } from "../context/ApiContext";
import { useParams } from "react-router-dom";

function Singleanime() {
  const api = useapicontext();
  const params = useParams();

  useEffect(() => {
    api.getanimebyId(params.animeId);
    api.getgenre(params.animeId);
    api.getwatchlink(params.animeId);
    window.scrollTo(0,0);

    return()=>{
      api.clearsingleanimepage();
    }
  }, []);

  
  

  return (
    <div>
      <div
        className="h-[25rem] bg-center bg-no-repeat bg-cover p-4 rounded-md"
        style={{
          backgroundImage:
            api.singleanime &&
            `url(${api.singleanime&&api.singleanime.data?.attributes.coverImage?.large})`,
        }}
      >
        <div className="h-full w-full backdrop-blur-sm flex justify-start p-2 items-center">
          <h1 className="font-semibold text-yellow-500 text-4xl lg:underline">
            {api.singleanime && api.singleanime.data?.attributes.canonicalTitle}
          </h1>

        </div>
      </div>


      <div className="bg-gray-700 p-3 mt-4">
        <div className="flex flex-col items-center gap-3 sm:flex-row ">
            <img src={api.singleanime && api.singleanime.data.attributes.posterImage.large} alt="" className="w-44 h-60 rounded-md" />
            <div className="flex flex-col gap-1 items-center text-center sm:text-start sm:items-start">
            <h1 className="text-white font-semibold text-3xl"> {api.singleanime && api.singleanime.data?.attributes.canonicalTitle}</h1>
            <h1 className="text-white text-lg">{api.singleanime && api.singleanime.data?.attributes.titles.en_jp}</h1>
            <h1 className="text-white text-lg">{api.singleanime && api.singleanime.data?.attributes.titles.ja_jp}</h1>
            <h1 className="text-white ">Average Rating: {api.singleanime && api.singleanime.data?.attributes.averageRating}</h1>
            </div>
        </div>

        <div className="para flex flex-col text-white h-80 lg:h-40 overflow-x-scroll gap-2 mt-5">
            <h1 className="font-semibold text-2xl ">About:</h1>
            <p className="">{api.singleanime && api.singleanime.data?.attributes.description}</p>
        </div>

        <div className="flex flex-col gap-3 mt-5">
            <h1 className="font-semibold text-2xl text-white">Trailer:</h1>
            <iframe src={`https://www.youtube.com/embed/${api.singleanime &&api.singleanime.data?.attributes.youtubeVideoId}`} className="w-full h-96 lg:h-[32rem]"></iframe>
        </div>

        <div className="mt-5">
            <h1 className="font-semibold text-2xl text-white"> More:</h1>
            <div className="text-base text-white font-semibold mt-4">
                <h1>Total Episodes: {api.singleanime &&api.singleanime.data?.attributes.episodeCount}</h1>
                <h1>Episode Length: {api.singleanime &&api.singleanime.data?.attributes.episodeLength} minutes</h1>
                <h1>Status: {api.singleanime &&api.singleanime.data?.attributes.status}</h1>
                <h1>Genre:{
                    api.genre?(
                        ` ${api.genre&&api.genre.data[0]?.attributes.slug}, ${api.genre&&api.genre.data[1]?.attributes.slug}, ${api.genre&&api.genre.data[2]?.attributes.slug}`
                    )
                    :
                    "N/A"
                    }</h1>

                    <h1>
                      Watch Here:{
                        api.link?(
                         <a href={`${api.link.data[1]?.attributes.url}`} target="_blank" > Click here</a> 
                        ):
                        "not available"
                      }
                    </h1>

            </div>
        </div>

        <div className="h-5">

        </div>


      </div>
    </div>
  );
}

export default Singleanime;
