import React, { useEffect, useState } from "react";
import { useapicontext } from "../context/ApiContext";
import Card from "./Card";
import GenreCard from "./GenreCard";
import Toplist from "./Toplist";
import { useNavigate } from "react-router-dom";

function Home() {
  const api = useapicontext();
  const navigate=useNavigate();
  let [page, setpage] = useState(0);
  let [offset, setoffset] = useState(0);

  useEffect(() => {
    api.gethero();
    api.gethomelist();
  }, []);
  

  const getnextpage = () => {
    const newoffset = offset + 20;
    setoffset(newoffset);
    api.getnextpage(newoffset);
    setpage(page + 1);
  };

  const getprevpage = () => {
    const newoffset = offset - 20;
    setoffset(newoffset);
    api.getnextpage(newoffset);
    setpage(page - 1);
  };


  

  return (
    <div className="w-full ">
      <div
        className=" h-[30rem] w-full bg-no-repeat bg-center bg-cover  p-3 mt-2 rounded-md"
        style={{
          backgroundImage:
            api.hero && `url(${api.hero.data[0].attributes.coverImage.large})`,
        }}
      >
        <div className="w-full h-full backdrop-blur-sm flex justify-start items-center px-3 rounded-md">
          <div className="">
            <h1 className="text-yellow-500 font-semibold text-xl">
              #MostPopular
            </h1>
            <h1 className="font-semibold text-4xl text-white">
              {api.hero && api.hero.data[0].attributes.canonicalTitle}
            </h1>
            {/* <div className='hidden lg:block text-black mt-2'><p>{api.hero&&api.hero.data[0].attributes.description}</p></div> */}
            <div>
              <button className="p-2 px-5 bg-yellow-500 rounded-md text-white mt-4 active:bg-yellow-600" onClick={()=>navigate(`/anime/${api.hero.data[0].id}`)}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h1 className="font-semibold text-xl text-white">OUR RECOMENDATIONS</h1>
      </div>

      <div className=" w-full flex  gap-5  ">

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 w-full lg:w-[55rem] mt-3  ">
        {api.homepage ? (
          api.homepage.data.map((anime) => (
            <div key={anime.id}>
              <Card
                title={anime.attributes.canonicalTitle}
                image={anime.attributes.posterImage.large}
                onClick={()=>navigate(`/anime/${anime.id}`)}
              />
            </div>
          ))
        ) : (
          <h1 className="text-white font-semibold">Loading...</h1>
        )}
      </div>

      <div className="mt-3 xl:flex flex-col gap-8 hidden ">
        <GenreCard/>
        <Toplist/>
      </div>



      </div>






      <div className="w-full flex justify-center mt-10 gap-5">
        {api.homepage ? (
          <>
            {page > 0 && (
              <button
                className="p-2 px-4 text-white bg-yellow-500 active:bg-yellow-600 rounded-md"
                onClick={getprevpage}
              >
                Previous Page
              </button>
            )}
            <button
              className="p-2 px-4 text-white bg-yellow-500 active:bg-yellow-600 rounded-md"
              onClick={getnextpage}
            >
              Next Page
            </button>
          </>
        ) : null}
      </div>

      <div className="h-10">

      </div>
    </div>
  );
}

export default Home;
