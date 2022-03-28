import React, { useState,useEffect } from 'react'
import "./Banner.css"
import Axios from "./Axios"
import Requests from "./Requests"
export default function Banner() {
    const [movie,setmovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await Axios.get(Requests.fetchNetflixOriginals)
            // console.log(request);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            return request;
        }
        fetchData()
    },[]);
    function trancate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;

    }
    // console.log(movie)
  return (
   <header className='banner'
   style={
       {
           backgroundSize:"cover",
           backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
           backgroundPosition:"center center",
       }
   }
   >

<div className='banner__contents'>
    <h1 className='banner__title'>
        {movie?.title||movie?.name||movie.original_name}

    </h1>
    <div className='banner__buttons'>
        <button className='banner__button'>Play</button>
        <button className='banner__button'>My list</button>
    </div>
    <h1 className='banner__description'>{trancate(movie?.overview,150)}</h1>

</div>
<div className='banner__fadeBottom'/>
   </header>
  )
}
