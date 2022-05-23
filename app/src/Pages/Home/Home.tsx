import React from 'react'
import{NavLink,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { IMovie } from '../../Types/movies'
import MovieCard from '../../Components/MovieCard'


function Home() {
  
  const [movies,setMovies]=useState<IMovie[]>()
  const [isLoading,setIsLoading]=useState(true)
  const [error,setError]=useState(false)
  const [searchKey,setSearchKey]=useState("")
  const [query,setQuery]=useState("")



const getMovie=async(searchKey:string)=>{
  setIsLoading(true)
  const api=`http://www.omdbapi.com/?s=${searchKey}&apikey=d958875a`
  const url=api+query
  try{const res=await fetch(url)
  const resjson=await res.json()
  if(resjson.Search){
  setMovies(resjson.Search)
  }
  }catch(err){
    console.error(err); 
    setError(true)
  }
  setIsLoading(false)
}

 useEffect(()=>{
   getMovie(searchKey)
 },[searchKey])
   
  const searchMovie=(e:any)=>{
     e.preventDefault()
     getMovie(searchKey)
  }



  return (
  <>
  <div className="flex items-stretch">
  
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl p-5 ">MyMovieApp</a> 
  </div>
  <div className="form-control p-5"onSubmit={searchMovie}>
  <div className="input-group"onSubmit={searchMovie} >
    <input type="text" placeholder="Search…" className="input input-bordered" onChange={(e)=>setSearchKey(e.target.value)} />
    <button className="btn btn-square" type={"submit"}>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg> 

    </button>
  </div>
</div>
 
   </div>
 
  <div>{isLoading && <p>Loading...</p>}</div>
  <div>{error && <p>Something went wrong...</p>}</div>
    
 
    <div className='row'>
      {
        movies?movies.map(movie=>
          (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
          )):<div className='flex justify-center text-2xl'>No movie with this title!</div>
      }
    </div>

    </>
  )
}

export default Home