import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
import "./Row.css"
import Axios from './Axios' 

const base_url="https://image.tmdb.org/t/p/original";

export default function Row({title,fetchURL,isLargeRow}) {
    const [movies,setmovies]=useState([]);
    const [trailerUrl,settrailerUrl]=useState("")
    useEffect(()=>{
        async function fetchData(){
            const request=await Axios.get(fetchURL)
            // console.log(request);
            setmovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchURL])
    // console.log(movies)
    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    const handlclick=(movie)=>{
        if(trailerUrl){
            settrailerUrl("")
        }else{
            movieTrailer(movie?.title||movie?.name ||movie?.original_name)
            .then((url)=>{
const urlparams=new URLSearchParams(new URL(url).search);
settrailerUrl(urlparams.get("v"))
            })
            .catch((error)=>console.log(error))
        }
    }
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies.map((movie)=>(
                <img
                onClick={()=>handlclick(movie)}
                 className={`row_poster ${isLargeRow &&"row__posterLarge"}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
            ))}
        </div>
        <div style={{padding:"40px"}}>
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    </div>
  )
}
