import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IMovie } from "../../Types/movies";
import { useState, useEffect } from "react";
import axios from "axios";
import { IReviews } from "../../Types/IReviews";
import ReviewsCard from "../../Components/ReviewsCard";
import { useGetReviews } from "../../hooks/useGetReviews";

export const Review = () => {
  const navigateHome = useNavigate();
  const handleClickHome = () => {
    navigateHome("/");
  };

  const navigateAdd = useNavigate();
  const handleClickAdd = () => {
    navigateAdd(`/reviews/addReview`);
  };
    
   const {isLoanding,isError,reviews}=useGetReviews()

  return (
    <>
    <div>
      {isLoanding && <p>isLoanding...</p>}
    </div>
    <div>{isError && <p>something went wrong...</p>}</div>
      <div className="text-2xl pb-4 justify-items-center  flex justify-center">
        Number of reviews:{reviews.length}
      </div>
      <div className="card-actions justify-center">
        <button className="btn btn-accent" onClick={() => handleClickAdd()}>
          Add Review
        </button>
        <button className="btn btn-active" onClick={() => handleClickHome()}>
          Back Home
        </button>
      </div>
      <div>
        <ReviewsCard reviews={reviews} />
      </div>
    </>
  );
};
