import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../constants/axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'
import {createSearchParams, useNavigate} from 'react-router-dom'

function RowPost(props) {
  
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(Response=>{
      console.log(Response.data);
      setMovies(Response.data.results)
    }).catch(err=>{
      alert('networt error')
    })
  },[])

  
  const navigate = useNavigate()
  const HandleMovies = (id)=>{
    console.log(id)
    
    navigate("/movie",{state:{id:id,colour:'green'}})
    
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          
            {
              movies.map((obj)=>
                <div onClick={()=>HandleMovies(obj.id)} className='container'>
              
                  <img className={props.issmall ? 'smallposter': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="img" />
                  <div className='interior'>
                    <h3>{obj.title}</h3>
                    <h2>{obj.name}</h2>
                  </div>
                </div>
                
              )
            }
        </div>

       
    </div>
  )
}

export default RowPost