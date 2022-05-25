import { format } from "path";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Review } from "./Pages/Reviews/Reviews";
import { IMovie } from "./Types/movies";
import MovieCard from "./Components/MovieCard";
import AddReview from "./Pages/AddReview/AddReview";
import UpdateReview from "./Pages/UpdateReview/UpdateReview";

function App(props: IMovie) {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reviews" element={<Review />}></Route>
            <Route path="/reviews/addReview" element={<AddReview />}></Route>
            <Route path="/reviews/editReview" element={<UpdateReview />}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
