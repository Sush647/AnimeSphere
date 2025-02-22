import {  createContext,useContext,useEffect,useState } from "react";

const apicontext=createContext(null);

export const Apiprovider=(props)=>{

    let [hero,sethero]=useState(null);
    let [homepage,sethomepage]=useState(null);
    let [toplist,settoplist]=useState(null);
    let [singleanime,setsingleanime]=useState(null);
    let [genre,setgenre]=useState(null);
    let [animebygenre,setanimebygenre]=useState(null);
    let [animebyname,setanimebyname]=useState(null);
    let [genrecard,setgenrecard]=useState(false);
    let [link,setlink]=useState(null);
    let [x,setx]=useState(false);
    const baseurl=`https://kitsu.io/api/edge/`

    const gethero=()=>{
        fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=1`)
        .then((response)=>response.json())
        .then((data)=>sethero(data))
        .catch((e)=>console.log(e))
    }

    const gethomelist=()=>{
        fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0`).then((response)=>response.json())
        .then((data)=>sethomepage(data)).catch((e)=>console.log(e))
    }

    const getnextpage=(offset)=>{
        fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=${offset}`).then((response)=>response.json())
        .then((data)=>sethomepage(data)).catch((e)=>console.log(e))
    }

    const gettoplist=()=>{
        fetch(`https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=10`).then((response)=>response.json())
        .then((data)=>settoplist(data)).catch((e)=>console.log(e))
    }

    const getanimebyId=(id)=>{
        fetch(`https://kitsu.io/api/edge/anime/${id}`).then((response)=>response.json())
        .then((data)=>setsingleanime(data)).catch((e)=>console.log(e))
    }
    
    const getgenre=(id)=>{
        fetch(`https://kitsu.io/api/edge/anime/${id}/genres`).then((response)=>response.json())
        .then((data)=>setgenre(data)).catch((e)=>console.log(e))
    }

    const getanimebygenre=(genre,offset)=>{
        fetch(`https://kitsu.io/api/edge/anime?filter[genres]=${genre}&page[limit]=20&page[offset]=${offset}`).then((response)=>response.json())
        .then((data)=>setanimebygenre(data)).catch((e)=>console.log(e))
    }

    const getanimebyname=(name)=>{
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${name}&page[limit]=20`).then((response)=>response.json())
        .then((data)=>setanimebyname(data)).catch((e)=>console.log(e))
    }

    const getwatchlink=(id)=>{
        fetch(`https://kitsu.io/api/edge/anime/${id}/streaming-links`).then((response)=>response.json())
        .then((data)=>setlink(data)).catch((e)=>console.log(e))
    }
    
    const cleargenrepage=()=>{
        setanimebygenre(null);
    }

    const clearsingleanimepage=()=>{
        setsingleanime(null);
    }

    const clearsearch=()=>{
        setanimebyname(null)
    }


    return(
        <apicontext.Provider value={{gethero,hero,gethomelist,homepage,getnextpage,gettoplist,toplist,getanimebyId,singleanime,getgenre,genre,getanimebygenre,animebygenre,cleargenrepage,clearsingleanimepage,getanimebyname,animebyname,clearsearch,genrecard,setgenrecard,link,getwatchlink,x,setx}}> 
            {props.children}
        </apicontext.Provider>
    )
}

export const useapicontext=()=>{
    return useContext(apicontext)
}