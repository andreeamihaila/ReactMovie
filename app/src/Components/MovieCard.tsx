import React from 'react'
import { IMovie } from '../Types/movies'
import{NavLink,useNavigate} from 'react-router-dom'


interface MovieCardProp{
    movie:IMovie
  }

function MovieCard({movie}:MovieCardProp) {
  const id=movie.imdbID

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/review")
  }
  return (
    <>

   <div className=" hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    {/*  */}
    <img src={movie.Poster}  className=" max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{movie.Title}</h1>
      <p className="py-3">Year appearnce {movie.Year}</p>
      <p className="py-2">this is a {movie.Type}</p>
      <button className="btn btn-primary"onClick={()=>handleClick()}>See Reviews</button>
      
    </div>
  </div>
</div>
</>
  )
}

export default MovieCard