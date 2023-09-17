import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../constants/axios'
import { API_KEY, imageUrl } from '../constants/constants'



function Banner() {
  const x = Math.random()  * 10;
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      //let x = Math.random() * 10;
      //console.log(x)
      console.log(Response.data.results[8])
      setMovie(Response.data.results[10])
    })

  },[])
  return (
    
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='botton'>Play</button>
                <button className='botton'>My list</button>

            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>

    </div>
  )
}

export default Banner