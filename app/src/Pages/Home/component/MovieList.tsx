import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import{NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { IMovie } from '../../../Types/movies'
import { json } from 'stream/consumers'
function MovieList() {

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/")
  }
const {id}=useParams<{id:string}>()

//const [movies,setMovies]=useState([])
const getMovie=async()=>{
  const url="http://www.omdbapi.com/?s=starwars&apikey=d958875a"
  const res=await fetch(url)
  const resjson=await res.json
  console.log(resjson); 
}
useEffect(()=>{
  getMovie()
},[])

  return (
    <>
    
    <div className="navbar bg-base-100">
    <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" onClick={()=>handleClick()}>MyMovieApp</a> 
    </div>
    </div>

    
    </>
  )
}

export default MovieList