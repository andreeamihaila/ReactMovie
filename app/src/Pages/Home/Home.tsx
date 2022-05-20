import React from 'react'
import{NavLink,useNavigate} from 'react-router-dom'

function Home() {
  
  return (
  <>
    {/* //search bar */}
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">MyMovieApp</a> 
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search a movie..." className="input input-bordered" />
    </div>
    </div>
  </div>
  {/* //end search bar */}

  <div>MOVIE LIST</div>
  </>

  )
}

export default Home