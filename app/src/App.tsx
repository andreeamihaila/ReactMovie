import { format } from 'path';
import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import MovieList from './Pages/Home/component/MovieList';
import Home from './Pages/Home/Home';
//import About from './Pages/About/About';


function App() {
  return (
    <div>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    {/* <Route path="/about" element={<About/>}></Route> */}
    <Route path="/MovieList/:id" element={<MovieList/>}></Route>
     
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
