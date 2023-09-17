import React, { useState ,useEffect} from 'react'
import NavBar from './NavBar'
import './Banner.css'
import Footer from "./Footer"
import { useLocation, } from 'react-router-dom'
import axios from '../constants/axios'
import {API_KEY,imageUrl} from '../constants/constants'
import YouTube from 'react-youtube'

function Movie() {

  const [movie,setMovie] = useState()
  useEffect(()=>{
    window.scrollTo(0, 0);
    axios.get(`movie/${ids}?api_key=${API_KEY}&with_networks=213`).then((Response)=>{
      //let x = Math.random() * 10;
      //console.log(x)
      //console.log(Response.data)
      setMovie(Response.data)
    })

  },[])
    const [urlId,setUrlId] = useState()
    const {state} = useLocation();
    const {id,colour} = state;
    const ids =id;
    console.log(ids)
    axios.get(`https://api.themoviedb.org/3/movie/${ids}/videos?api_key=${API_KEY}&with_networks=213`).then(Response =>{
      //console.log(Response.data)
      if(Response.data.results.length != 0){
        setUrlId(Response.data.results[0])
      }
    })

   

    const opts = {
        height: '700',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          
        },
        
      };
  return (
    <div>
        <NavBar></NavBar>
    <div
        
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <h3>{movie? movie.tagline : ""}</h3>
            <div className='banner_buttons'>
              
                <button className='botton'>Play</button>
                
                <button className='botton'>My list</button>

            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
        <div  class="grid-container-element">
            <div class="grid-child-element">
            <h1>{movie ? movie.title : ""}</h1>
            <h4 className='status'>Status    </h4>
            <span className='status-sub'>{movie ? movie.status : ''}</span>
            <h4 className='status'>Release Date    </h4>
            <span className='status-sub'>{movie ? movie.release_date : ''}</span>
            <h4 className='status'>Budget</h4>
            <span className='status-sub'>{movie ? movie.budget : ''}&nbsp;USD</span>
            <h4 className='status'>Revenue    </h4>
            <span className='status-sub'> {movie ? movie.revenue : ''}&nbsp;USD</span>
            <h4 className='status'>Popularity</h4>
            <span className='status-sub'>{movie ? movie.popularity : ''}</span>
            
            </div>
            <div class="grid-child-element-img">
                <img className='imgposter' src={`${movie ? imageUrl+movie.poster_path : ""}`}></img>
            </div>
        </div>
        <div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}  />}
        </div>
        <div>
        <Footer></Footer>
        </div>
        </div>
        
        </div>
  )
}

export default Movie